# Deploy no Render

## Pré-requisitos

1. Projeto já está no GitHub
2. Conta no [Render](https://render.com)
3. Aplicativo registrado no Microsoft Entra ID

## Configuração no Render

### 1. Criar Web Service

- Dashboard → **New** → **Web Service**
- Conectar o repositório GitHub
- Escolher branch `main`

### 2. Configurar Build & Start

| Campo | Valor |
|-------|-------|
| Runtime | Node |
| Build Command | `npm install && npm run build` |
| Start Command | `npm start` |

### 3. Variáveis de Ambiente

Adicionar no painel **Environment** do Render:

```
AZURE_AD_CLIENT_ID=seu-client-id
AZURE_AD_CLIENT_SECRET=seu-client-secret
AZURE_AD_TENANT_ID=seu-tenant-id
AUTH_SECRET=valor-gerado-pelo-render-ou-manual
AUTH_TRUST_HOST=true
NEXTAUTH_URL=https://SEU-SERVICO.onrender.com
```

> **Importante**: O `NEXTAUTH_URL` deve ser a URL exata do seu serviço no Render (ex: `https://intranet-aeb.onrender.com`).

### 4. Registrar Redirect URI no Entra ID

No [Azure Portal](https://portal.azure.com), no app registrado:

- **Authentication** → **Add a platform** → **Web**
- Adicionar a Redirect URI:
  ```
  https://SEU-SERVICO.onrender.com/api/auth/callback/microsoft-entra-id
  ```

### 5. Consentimento Administrativo

- **API Permissions** do app → **Grant admin consent** para:
  - `User.Read`
  - `Mail.Read`
  - `Chat.Read`
  - `Calendars.Read`

### 6. Deploy

- Salvar as configurações → o Render fará o deploy automaticamente
- Acompanhar os logs em caso de erro

## Comandos úteis

```bash
# Testar localmente antes do deploy
npm run dev

# Build local
npm run build

# Verificar variáveis de ambiente
printenv | grep AZURE
```

## Troubleshooting

| Problema | Solução |
|----------|---------|
| `NEXTAUTH_URL` incorreta | Verificar se a URL termina com `.onrender.com` e não tem barra no final |
| Erro "invalid_client" | Verificar se `AZURE_AD_CLIENT_SECRET` está correto e não expirou |
| Erro "invalid_request" | Verificar se a Redirect URI no Azure bate exatamente com a do Render |
| "Cannot find module" no build | Rodar `npm install` antes do build no Render |
| Sessão expira rápido | Verificar se `AUTH_SECRET` está configurado corretamente |
