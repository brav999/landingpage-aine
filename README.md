# Ainê Platform

Arquitetura preparada para hospedar frontend e backend serverless na Vercel, integrando Supabase como camada de dados e um stack de observabilidade completo.

## Principais tecnologias

- **Frontend**: Next.js 15 (App Router) + React 19 RC, Tailwind CSS, shadcn/ui, Zustand, React Query e NextAuth.js
- **Backend**: tRPC exposto via rotas `app/api` do Next.js com validação usando Zod
- **Banco e Auth**: Supabase (PostgreSQL) com Prisma ORM e Supabase Auth (MFA opcional)
- **Observabilidade**: Logs com Pino + Axiom, Sentry para erros e UptimeRobot para disponibilidade

## Estrutura de pastas

```text
app/                     # Rotas do Next.js (frontend + API Routes)
├─ api/                  # Endpoints serverless (tRPC, NextAuth)
├─ (marketing)/(home)/   # Landing page institucional
components/              # Componentes reutilizáveis (UI, seções, providers)
lib/                     # Utilidades compartilhadas (env, logger, prisma, supabase, tRPC)
server/                  # Routers tRPC e contexto do backend
prisma/                  # Schema do Prisma para Supabase
```

## Variáveis de ambiente

Copie o arquivo `.env.example` e configure com os valores do seu projeto:

```bash
cp .env.example .env.local
```

- Gere uma URL e chave pública no Supabase e atualize as variáveis `SUPABASE_URL`, `SUPABASE_ANON_KEY`, `NEXT_PUBLIC_SUPABASE_URL` e `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
- Ajuste `DATABASE_URL` para apontar para o banco PostgreSQL gerenciado pelo Supabase.
- Defina `AXIOM_TOKEN` e `AXIOM_DATASET` com as credenciais do projeto no [Axiom](https://axiom.co/).
- Informe `SENTRY_DSN` caso deseje habilitar monitoramento de erros.
- Crie um segredo `NEXTAUTH_SECRET` para assinar tokens da sessão e configure provedores opcionais como GitHub (`GITHUB_CLIENT_ID` / `GITHUB_CLIENT_SECRET`).

## Scripts disponíveis

- `npm run dev` — inicia o servidor de desenvolvimento (`http://localhost:3000`)
- `npm run build` — gera a build de produção
- `npm run start` — executa o servidor em modo produção
- `npm run lint` — roda a verificação de lint
- `npm run prepare` — gera o client do Prisma

## Prisma + Supabase

O schema padrão já contempla as tabelas necessárias para o NextAuth (usuários, contas, sessões e tokens) além de uma tabela `AuditLog` para registrar eventos críticos na plataforma. Execute as migrações com:

```bash
npx prisma migrate dev
```

## Observabilidade e monitoramento

- **Logs**: o logger central `lib/logger.ts` envia logs para o Axiom em produção e usa `pino-pretty` localmente.
- **Sentry**: configure `SENTRY_DSN` para habilitar monitoramento de erros (frontend e backend).
- **UptimeRobot**: utilize o endpoint `/api/trpc/health.status` como alvo dos checks de disponibilidade.

## Próximos passos sugeridos

1. Implementar provedores reais de e-mail (Resend, Supabase ou SES) para o fluxo de login magic link.
2. Criar camadas de domínio no tRPC (ex.: `exams`, `patients`, `professionals`).
3. Integrar o storage do Supabase para upload de exames e documentos.
4. Conectar Sentry e UptimeRobot aos ambientes de staging/produção.
