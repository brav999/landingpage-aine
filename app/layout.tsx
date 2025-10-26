import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "~/app/providers";
import { cn } from "~/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Ainê",
    template: "%s | Ainê"
  },
  description:
    "Plataforma de fisioterapia pélvica e obstétrica com foco em cuidado preventivo, exames e acompanhamento em tempo real.",
  keywords: [
    "fisioterapia pélvica",
    "obstetrícia",
    "saúde da mulher",
    "telemedicina"
  ]
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
