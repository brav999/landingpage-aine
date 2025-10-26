import Link from "next/link";
import { Suspense } from "react";
import { Hero } from "~/components/sections/hero";
import { ObservabilitySection } from "~/components/sections/observability";
import { PlatformStackSection } from "~/components/sections/platform-stack";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Hero />
      <main className="flex-1 space-y-24 pb-24">
        <PlatformStackSection />
        <Suspense fallback={<div className="text-center text-sm text-muted-foreground">Carregando observabilidade…</div>}>
          <ObservabilitySection />
        </Suspense>
      </main>
      <footer className="border-t bg-background/60 py-10 backdrop-blur">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Ainê Fisioterapia Pélvica &amp; Obstétrica. Todos os direitos reservados.
          </p>
          <nav className="flex items-center gap-6">
            <Link href="/politica-privacidade" className="hover:text-foreground">
              Política de Privacidade
            </Link>
            <Link href="/termos" className="hover:text-foreground">
              Termos de Uso
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
