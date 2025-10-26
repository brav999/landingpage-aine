const architecture = [
  {
    title: "Frontend - Vercel",
    items: [
      "Next.js 15 / React 19",
      "Autenticação com NextAuth.js",
      "Gerenciamento de dados com React Query",
      "Estado global leve com Zustand",
      "Design system com Tailwind CSS + shadcn/ui"
    ]
  },
  {
    title: "Backend Serverless",
    items: [
      "tRPC hospedado em Vercel Functions",
      "Validação universal com Zod",
      "Logs estruturados com Pino + Axiom"
    ]
  },
  {
    title: "Banco e Auth - Supabase",
    items: [
      "PostgreSQL gerenciado",
      "Prisma ORM gerando tipos para o app",
      "Auth com MFA opcional e Magic Link",
      "Storage para exames e PDFs"
    ]
  }
];

export function PlatformStackSection() {
  return (
    <section id="plataforma" className="border-y bg-muted/30 py-20">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 md:grid-cols-3">
        {architecture.map((column) => (
          <div key={column.title} className="rounded-3xl border bg-background/80 p-8 shadow-sm">
            <h2 className="text-lg font-semibold text-foreground">{column.title}</h2>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              {column.items.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
