// Proteção de rotas: a regra fica no callback `authorized` em src/auth.ts
// (exige login apenas quando o app do Azure está configurado).
export { auth as middleware } from "@/auth";

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|login|images|docs).*)"],
};
