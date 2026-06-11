# Deploy no Vercel

## Por que Vercel?

- Deploy em **2 cliques** a partir do GitHub
- Interface muito mais simples que Render
- Free tier generoso para projetos Next.js
- Domínio gratuito `.vercel.app`

## Limitações do Free Tier (Hobby)

| Recurso | Limite |
|---------|--------|
| Serverless Function Timeout | 10 segundos |
| Cold Start | ~1-3s na primeira requisição |
| Bandwidth | 100 GB/mês |
| Build Time | 45 minutos |

> **Atenção**: Chamadas ao Microsoft Graph podem levar 2-5s. Com cold start, pode chegar perto do limite de 10s. Se isso acontecer, considere upgrade para Pro ($20/mês) ou migre para Render/VM.

---

## Passo a passo

### 1. Criar conta e importar projeto

1. Acesse [vercel.com](https://vercel.com) → Sign up com GitHub
2. Dashboard → **Add New Project**
3. Importe `and451/intranet` → selecione branch `main`
4. O Vercel detecta automaticamente que é Next.js

### 2. Configurar variáveis de ambiente

Antes de clicar em **Deploy**, clique em **Environment Variables** e adicione:

| Nome | Valor |
|------|-------|
| `AZURE_AD_CLIENT_ID` | Client ID do app no Entra ID |
| `AZURE_AD_CLIENT_SECRET` | Client Secret do app |
| `AZURE_AD_TENANT_ID` | Tenant ID da AEB |
| `AUTH_SECRET` | String longa aleatória (gerar com `npx auth secret`) |
| `AUTH_TRUST_HOST` | `true` |

> **NÃO** configure `NEXTAUTH_URL` no Vercel — ele detecta automaticamente.

### 3. Deploy inicial

Clique em **Deploy**. O Vercel vai:
- Instalar dependências (`npm install`)
- Buildar (`npm run build`)
- Gerar preview URL

Aguarde o build (pode levar 2-5 minutos).

### 4. Configurar Redirect URI no Azure Portal

Após o deploy, o Vercel gera uma URL como:
```
https://intranet-aeb.vercel.app
```

No [Azure Portal](https://portal.azure.com), no seu app registrado:
1. **Authentication** → **Add a platform** → **Web**
2. Adicione exatamente:
   ```
   https://intranet-aeb.vercel.app/api/auth/callback/microsoft-entra-id
   ```
   (substitua `intranet-aeb` pelo nome real do seu projeto)
3. Salve

### 5. Consentimento Administrativo

No mesmo app no Azure Portal:
1. **API Permissions**
2. Certifique-se que estão listados:
   - `User.Read`
   - `Mail.Read`
   - `Chat.Read`
   - `Calendars.Read`
3. Clique em **Grant admin consent** → **Yes**

### 6. Testar

Acesse a URL do Vercel. Deve redirecionar para `/login`.
Clique em **Entrar com Microsoft** → autentique → a home deve carregar seus dados do Graph.

---

## Troubleshooting

### "Function execution timed out"

As chamadas ao Graph estão demorando mais que 10s. Soluções:
1. **Upgrade para Pro** ($20/mês) → timeout sobe para 60s
2. **Cachear respostas** no frontend (localStorage) para não bater no Graph toda vez
3. **Usar Edge Runtime** para as API routes (mais rápido, mas com limitações)

### "Invalid client" no login

- Verifique se `AZURE_AD_CLIENT_ID` e `AZURE_AD_CLIENT_SECRET` estão corretos
- Verifique se a Redirect URI no Azure bate exatamente com a do Vercel (sem `/` no final)

### Cold start lento

Normal no free tier. A primeira requisição após inatividade pode demorar 3-5s. O Vercel Pro tem **Warm Functions** que elimina isso.

---

## Comparativo rápido

| | Vercel Free | Render Free | VM Interna |
|--|-------------|-------------|------------|
| **Facilidade** | ⭐⭐⭐ Muito fácil | ⭐⭐ Médio | ⭐ Difícil |
| **Timeout** | 10s | Nenhum | Nenhum |
| **Cold Start** | ~3s | ~1s | Nenhum |
| **Custo** | Grátis | Grátis | Infra própria |
| **Dados** | Sai da AEB | Sai da AEB | Fica na AEB |
| **Manutenção** | Zero | Zero | Alta |

---

## Próximo passo sugerido

Comece com **Vercel Free** para validar o fluxo. Se tudo funcionar bem e o timeout/cold start não incomodar, mantenha. Se precisar de mais performance, upgrade para **Vercel Pro** ou migre para **Render/VM**.
