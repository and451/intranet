# INTRAEB — Status do projeto e plano de retomada

> Atualizado em 11/06/2026. Ponto de parada: aguardando (1) registro do app no
> Azure pelo admin do tenant e (2) preparação da VM no Data Center da AEB.
> **Decisão**: a publicação definitiva será em VM da AEB (`aeb.gov.br`), não
> mais na Vercel.

## O que já está pronto

- **Conteúdo real da intranet antiga** (export completo em
  `../../inspiração/Intranet-Old`, scripts em `scripts/`):
  - 617 notícias com página de detalhe por slug, fotos locais e paginação
  - 435 boletins internos com busca/filtros e PDFs na intranet antiga
  - Página `/sistemas` com 23 sistemas, ícones locais e 15 PDFs de
    manuais/normas em `public/docs/`
  - Página Normas e Boletins com Atos Normativos e Políticas de TIC
- **Design Claude Design aplicado**: cabeçalho gov.br (logo AEB, busca, menu
  do usuário com sair), rodapé institucional navy com redes sociais reais,
  hero com carrossel + 2 tiles fixos da atividade finalística, notícias em
  layout briefing, widget rico de Reserva de Salas (salas reais do Vindula)
- **Autenticação Microsoft (código completo, aguardando credenciais)**:
  - Auth.js v5 + Entra ID em `src/auth.ts`, com renovação automática do
    access token via refresh token (refresh token nunca vai ao navegador)
  - Rotas Graph: `/api/graph/emails`, `/calendar`, `/teams` (painel "Seu dia")
  - Proteção condicional: login só é exigido quando `AZURE_AD_CLIENT_ID`
    estiver definido; sem credenciais o site fica aberto (modo demonstração)
  - Build de produção validado (`npm run build` exit 0)

## O que falta — checklist de retomada

### 1. Azure (admin do tenant)
- [ ] Registro de aplicativo "INTRAEB" no Entra ID (somente este diretório)
- [ ] Redirect URIs (tipo Web):
  - `http://localhost:3000/api/auth/callback/microsoft-entra-id`
  - `https://<dominio-definitivo>/api/auth/callback/microsoft-entra-id`
- [ ] Client secret criado (anotar o valor na criação)
- [ ] Permissões delegadas Microsoft Graph: `User.Read`, `Mail.Read`,
  `Chat.Read`, `Calendars.Read` + consentimento do administrador
- [ ] Entregar: `AZURE_AD_CLIENT_ID`, `AZURE_AD_CLIENT_SECRET`,
  `AZURE_AD_TENANT_ID`

### 2. VM no Data Center da AEB
- [ ] Definir domínio (ex.: `intranet.aeb.gov.br`) e certificado TLS
- [ ] Node.js 20+ na VM; build com `npm ci && npm run build`; servir com
  `npm start` atrás de proxy reverso (nginx/IIS) — ou container Docker
- [ ] Processo gerenciado (PM2, systemd ou Docker restart policy)
- [ ] Variáveis de ambiente na VM:
  - `AUTH_SECRET` (gerar novo: `openssl rand -base64 32`)
  - `AUTH_TRUST_HOST=true`
  - `NEXTAUTH_URL=https://<dominio-definitivo>`
  - `AZURE_AD_CLIENT_ID` / `AZURE_AD_CLIENT_SECRET` / `AZURE_AD_TENANT_ID`
- [ ] Vantagem da VM interna: PDFs de boletins e imagens no corpo das
  notícias (hospedados em `intranet-old.aeb.gov.br`) passam a abrir para
  todos os usuários
- [ ] Limpeza pós-decisão: remover `netlify.toml`, `render.yaml`,
  `DEPLOY_VERCEL.md`, `DEPLOY_RENDER.md` quando a VM estiver no ar

### 3. Após credenciais + VM (testes que farei)
- [ ] Fluxo completo de login/logout com conta da AEB e retorno à página
  original (`callbackUrl`)
- [ ] Renovação de token após 1h de sessão
- [ ] Painel "Seu dia": e-mails não lidos, menções do Teams, agenda do dia
- [ ] Confirmar que o site passa a exigir login (proteção liga sozinha com
  `AZURE_AD_CLIENT_ID` definido)
- [ ] Remover rota de depuração `/api/debug/session` antes do go-live

### 4. Backlog de conteúdo/funcionalidades (sem dependências, qualquer hora)
- [ ] Widgets com dados fictícios: Eventos, Aniversariantes (podem vir do
  Graph `/users` ou do sistema de Ramais), Meus Favoritos, Suporte TI
- [ ] Busca do cabeçalho ("Buscar na intranet") ainda não funcional
- [ ] Páginas institucionais com placeholder: Diretorias, AEB Escola,
  Comissões, Comitês, Grupos de Trabalho, Biblioteca, Sobre nós, Contato
  (conteúdo real disponível em `inspiração/Intranet-Old/pages-md/`)
- [ ] Baixar os ~435 PDFs de boletins para o repo (hoje abrem na intranet
  antiga; menos necessário se a VM ficar na rede interna)
- [ ] Integração com a intranet atual (Vindula) para dados atualizados exige
  sessão autenticada — investigar API/raspagem quando priorizado
- [ ] Reserva de Salas: hoje grava no localStorage (demo); integrar com
  Vindula ou Graph `/places` no futuro; capacidades das salas são estimadas

## Armadilhas conhecidas (não repetir)
- **Não criar `auth.ts`/`middleware.ts` na raiz** — a raiz tem precedência
  sobre `src/` e o middleware duplicado já travou o deploy uma vez
- `useSearchParams()` em página client exige `<Suspense>` (quebra o build)
- API do WordPress antigo devolve `<div id='cptapagination-content'>` antes
  do JSON — remover antes do parse (já tratado em
  `scripts/export-old-intranet.ps1`)
