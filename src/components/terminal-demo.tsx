'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const terminalLines = [
  { text: '$ a11y-lint scan ./src', delay: 0 },
  { text: '', delay: 0.5 },
  { text: '🔍 Detectando framework...', delay: 1 },
  { text: '✓ React detectado', delay: 1.5 },
  { text: '', delay: 2 },
  { text: '📊 Analisando arquivos...', delay: 2.5 },
  { text: '  ├─ src/components/Header.jsx', delay: 3 },
  { text: '  ├─ src/components/ProductCard.jsx', delay: 3.3 },
  { text: '  ├─ src/components/Form.jsx', delay: 3.6 },
  { text: '  └─ src/pages/Home.jsx', delay: 3.9 },
  { text: '', delay: 4.2 },
  { text: '🤖 Agentes multi-IA em ação...', delay: 4.5 },
  { text: '  ⚡ Orquestrador: Coordenando análise', delay: 5 },
  { text: '  🌐 unified-web-scanner: Verificando semântica HTML', delay: 5.5 },
  { text: '  ♿ Validando WCAG 2.2 com RAG', delay: 6 },
  { text: '', delay: 6.5 },
  { text: '✅ Análise concluída!', delay: 7 },
  { text: '', delay: 7.3 },
  { text: '📈 Resultados:', delay: 7.6 },
  { text: '  • 12 problemas encontrados', delay: 8 },
  { text: '  • 5 ALTA | 4 MÉDIA | 3 BAIXA', delay: 8.3 },
  { text: '  • Relatório salvo: a11y-report.md', delay: 8.6 },
  { text: '', delay: 9 },
  { text: '💡 Prompts de IA gerados para correções rápidas', delay: 9.5 },
]

export function TerminalDemo() {
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    if (visibleLines < terminalLines.length) {
      const nextLine = terminalLines[visibleLines]
      const timer = setTimeout(() => {
        setVisibleLines((prev) => prev + 1)
      }, nextLine.delay * 1000)

      return () => clearTimeout(timer)
    } else {
      // Reset animation after completion
      const resetTimer = setTimeout(() => {
        setVisibleLines(0)
      }, 3000)
      return () => clearTimeout(resetTimer)
    }
  }, [visibleLines])

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gray-950 shadow-2xl ring-1 ring-white/10">
      {/* Terminal header */}
      <div className="flex items-center gap-2 border-b border-white/10 bg-gray-900 px-4 py-3">
        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
        </div>
        <div className="ml-2 text-sm font-medium text-gray-400">terminal</div>
      </div>

      {/* Terminal content */}
      <div className="min-h-96 p-6 font-mono text-sm">
        {terminalLines.slice(0, visibleLines).map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
            className="text-gray-100"
          >
            {line.text === '' ? '\u00A0' : line.text}
          </motion.div>
        ))}
        {visibleLines < terminalLines.length && (
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="inline-block h-4 w-2 bg-green-500"
          />
        )}
      </div>
    </div>
  )
}
