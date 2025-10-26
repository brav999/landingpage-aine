import { Monitor, Radio, ShieldAlert } from "lucide-react";

const observability = [
  {
    title: "Axiom.dev",
    description: "Coleta e análise de logs estruturados enviados pelo backend serverless via Pino.",
    icon: Radio
  },
  {
    title: "Sentry",
    description: "Monitoramento de erros front e backend com mapas de stack trace e session replay.",
    icon: ShieldAlert
  },
  {
    title: "UptimeRobot",
    description: "Verificação de disponibilidade dos principais endpoints e webhooks da plataforma.",
    icon: Monitor
  }
];

export function ObservabilitySection() {
  return (
    <section className="mx-auto w-full max-w-5xl px-4">
      <div className="grid gap-6 md:grid-cols-3">
        {observability.map((tool) => (
          <article key={tool.title} className="rounded-3xl border bg-background/70 p-6 shadow-sm">
            <tool.icon className="h-10 w-10 text-primary" />
            <h3 className="mt-6 text-lg font-semibold text-foreground">{tool.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{tool.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
