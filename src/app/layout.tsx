import '@/styles/tailwind.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s - a11y-lint',
    default: 'a11y-lint - Análise de Acessibilidade com IA',
  },
  description: 'Sistema de IA Multi-Agente para análise automatizada de acessibilidade em aplicações Web e Mobile. Detecte problemas de acessibilidade antes dos seus usuários.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/css?f%5B%5D=switzer@400,500,600,700&amp;display=swap"
        />
      </head>
      <body className="antialiased" style={{ color: '#211F22', backgroundColor: '#FAF4F3' }}>
        {children}
      </body>
    </html>
  )
}
