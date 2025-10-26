// app/layout.tsx
import './globals.css'

export const metadata = { title: 'Ainé Fisiopélvica' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="pt-BR"><body>{children}</body></html>
}
