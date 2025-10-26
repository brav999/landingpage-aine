import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-aine-light/40 px-4">
      <div className="max-w-lg text-center">
        <h1 className="text-4xl font-bold text-aine-purple">404</h1>
        <p className="mt-4 text-lg text-slate-600">
          O conteúdo que você procura não foi encontrado. Verifique o endereço digitado ou retorne para a página inicial.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-aine-green px-6 py-3 text-sm font-semibold text-white transition hover:bg-aine-green/90"
        >
          Voltar para a Home
        </Link>
      </div>
    </div>
  );
}
