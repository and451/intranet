# INTRAEB — Intranet da Agência Espacial Brasileira

Nova versão da intranet da **AEB** (Agência Espacial Brasileira), desenvolvida com stack moderno e baseada na estrutura da intranet anterior (`https://intranet-old.aeb.gov.br`).

## Objetivo

Modernizar a experiência da intranet institucional, mantendo as seções essenciais (notícias, boletins internos, diretorias, AEB Escola e contato) com interface responsiva, acessível e de fácil manutenção.

## Tecnologias

- **[Next.js](https://nextjs.org/)** — Framework React com App Router e geração de páginas estáticas
- **[TypeScript](https://www.typescriptlang.org/)** — Tipagem estática para maior segurança e produtividade
- **[Tailwind CSS](https://tailwindcss.com/)** — Estilização utilitária e responsiva
- **[Lucide React](https://lucide.dev/)** — Ícones modernos e leves

## Estrutura de Diretórios

```
src/
  app/                 # Rotas e páginas (App Router)
    page.tsx           # Página inicial (destaques + boletins)
    layout.tsx         # Layout global (Header, Sidebar, Footer)
    globals.css        # Estilos globais
    noticias/page.tsx  # Listagem de notícias
    boletins/page.tsx  # Tabela de boletins internos
    diretorias/page.tsx# Diretorias da AEB
    aeb-escola/page.tsx# Cursos e workshops
    contato/page.tsx   # Informações de contato
  components/          # Componentes reutilizáveis
    Header.tsx
    Sidebar.tsx
    Footer.tsx
  lib/
    utils.ts           # Funções utilitárias (cn)
  types/
    index.ts           # Tipagens TypeScript
public/
  images/              # Imagens estáticas
```

## Páginas e Funcionalidades

| Página        | Descrição                                              |
|---------------|--------------------------------------------------------|
| `/`           | Destaques de notícias, boletins recentes, links úteis |
| `/noticias`   | Listagem completa de notícias da AEB                   |
| `/boletins`   | Tabela com boletins internos ordinários e suplementares|
| `/diretorias` | Cards com DPOA, DGEP, DIEN, DGSE                     |
| `/aeb-escola` | Cursos, workshops e status de inscrições               |
| `/contato`    | Endereço, telefone e site institucional                |

## Como Rodar Localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão LTS recomendada)

### Instalação

```bash
# Clone o repositório
git clone <url-do-repositorio>
cd intranet-aeb

# Instale as dependências
npm install
```

### Modo de desenvolvimento

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

### Build de produção

```bash
npm run build
```

O resultado estático será gerado na pasta `dist/`.

## Deploy

O projeto está configurado para exportação estática (`output: 'export'`), permitindo deploy em qualquer plataforma de hospedagem estática (Netlify, Vercel, GitHub Pages, etc.).

### Exemplo com Netlify CLI

```bash
npx netlify-cli deploy --prod --dir=dist
```

## Personalização

- **Cores institucionais**: ajuste as classes `bg-blue-900`, `text-blue-900`, etc., para refletir a paleta oficial da AEB.
- **Conteúdo**: edite os arrays de dados nas páginas (`noticias`, `boletins`, `diretorias`, `cursos`) para refletir o conteúdo real.
- **Imagens**: adicione imagens em `public/images/` e referencie com `<Image src="/images/arquivo.png" ... />`.

## Licença

Projeto interno da Agência Espacial Brasileira (AEB).

---

Desenvolvido com [Next.js](https://nextjs.org) e [Tailwind CSS](https://tailwindcss.com).
