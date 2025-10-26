import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ainefisiopelvica.com"),
  title: {
    default: "Ainé Fisiopélvica",
    template: "%s | Ainé Fisiopélvica",
  },
  description:
    "Cuidado especializado em fisioterapia pélvica e obstétrica com atendimento humanizado em Criciúma/SC.",
  openGraph: {
    title: "Ainé Fisiopélvica",
    description:
      "Tratamentos personalizados em fisioterapia pélvica, obstétrica e dermatofuncional com profissionais especializados.",
    url: "https://www.ainefisiopelvica.com/",
    siteName: "Ainé Fisiopélvica",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ainé Fisiopélvica",
    description:
      "Fisioterapia pélvica e obstétrica com atendimento acolhedor e resultados comprovados em Criciúma/SC.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.className} bg-white text-slate-900`}>{children}</body>
    </html>
  );
}
