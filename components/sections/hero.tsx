"use client";

import Link from "next/link";
import { useMemo } from "react";
import { buttonVariants } from "~/components/ui/button";

const heroStats = [
  { value: "98%", label: "Pacientes com melhora clínica" },
  { value: "24/7", label: "Monitoramento em tempo real" },
  { value: "+150", label: "Profissionais certificados" }
];

export function Hero() {
  const stats = useMemo(() => heroStats, []);

  return (
    <header className="relative isolate overflow-hidden border-b">
      <div className="mx-auto flex min-h-[75vh] w-full max-w-6xl flex-col gap-10 px-4 py-24 text-center sm:py-32">
        <span className="mx-auto rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs uppercase tracking-widest text-primary">
          Ainê • Fisioterapia Pélvica &amp; Obstétrica
        </span>
        <h1 className="text-balance text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          Cuidado integrado para a saúde íntima em todas as fases da vida.
        </h1>
        <p className="mx-auto max-w-2xl text-balance text-base text-muted-foreground sm:text-lg">
          Combine atendimentos presenciais, teleconsultas, exames inteligentes e conteúdo educativo em uma experiência única para pacientes,
          profissionais e operadoras.
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/contato" className={buttonVariants()}>
            Agendar demonstração
          </Link>
          <Link href="#plataforma" className={buttonVariants({ variant: "outline" })}>
            Conheça a plataforma
          </Link>
        </div>
        <dl className="grid w-full gap-6 text-left sm:grid-cols-3">
          {stats.map((item) => (
            <div key={item.label} className="rounded-3xl border bg-background/70 p-6 shadow-sm">
              <dt className="text-sm text-muted-foreground">{item.label}</dt>
              <dd className="mt-2 text-3xl font-semibold text-foreground">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </header>
  );
}
