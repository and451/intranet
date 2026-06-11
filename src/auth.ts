import NextAuth from "next-auth";
import type { JWT } from "next-auth/jwt";
import MicrosoftEntraID from "next-auth/providers/microsoft-entra-id";

// Renova o access token no Entra ID quando ele expira (validade ~1h).
// O refresh token nunca sai do servidor: a sessão expõe apenas o accessToken.
async function refreshAccessToken(token: JWT): Promise<JWT> {
  try {
    const res = await fetch(
      `https://login.microsoftonline.com/${process.env.AZURE_AD_TENANT_ID}/oauth2/v2.0/token`,
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          client_id: process.env.AZURE_AD_CLIENT_ID!,
          client_secret: process.env.AZURE_AD_CLIENT_SECRET!,
          grant_type: "refresh_token",
          refresh_token: token.refreshToken!,
        }),
      }
    );

    const data = await res.json();
    if (!res.ok) throw data;

    return {
      ...token,
      accessToken: data.access_token,
      expiresAt: Math.floor(Date.now() / 1000) + (data.expires_in as number),
      // O Entra ID pode rotacionar o refresh token; mantém o antigo se não vier
      refreshToken: data.refresh_token ?? token.refreshToken,
      error: undefined,
    };
  } catch (err) {
    console.error("[auth] Falha ao renovar access token", err);
    return { ...token, error: "RefreshTokenError" };
  }
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    MicrosoftEntraID({
      clientId: process.env.AZURE_AD_CLIENT_ID!,
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET!,
      issuer: `https://login.microsoftonline.com/${process.env.AZURE_AD_TENANT_ID}/v2.0`,
      authorization: {
        params: {
          scope:
            "openid profile email offline_access User.Read Mail.Read Chat.Read Calendars.Read",
        },
      },
    }),
  ],
  callbacks: {
    // Usado pelo middleware: exige login só quando o app do Azure está
    // configurado; sem credenciais (deploy de demonstração) o site fica aberto.
    authorized({ auth }) {
      if (!process.env.AZURE_AD_CLIENT_ID) return true;
      return !!auth?.user;
    },
    async redirect({ url, baseUrl }) {
      // Mantém o redirecionamento pós-login dentro do domínio da aplicação
      if (url.startsWith(baseUrl)) return url;
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      return baseUrl;
    },
    async jwt({ token, account }) {
      // Primeiro login: guarda os tokens da conta
      if (account) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
        token.expiresAt = account.expires_at;
        return token;
      }

      // Token ainda válido (com folga de 60s)
      if (token.expiresAt && Date.now() < (token.expiresAt - 60) * 1000) {
        return token;
      }

      // Expirado: renova com o refresh token
      if (token.refreshToken) {
        return refreshAccessToken(token);
      }
      return { ...token, error: "RefreshTokenError" };
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.error = token.error;
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  trustHost: true,
});
