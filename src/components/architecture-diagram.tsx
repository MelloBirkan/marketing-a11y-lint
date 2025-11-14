'use client'

import { motion } from 'framer-motion'
import clsx from 'clsx'

interface AgentBoxProps {
  title: string
  icon: string
  description: string
  color: string
  delay: number
}

function AgentBox({ title, icon, description, color, delay }: AgentBoxProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={clsx(
        'relative overflow-hidden rounded-2xl p-6 shadow-lg ring-1 ring-black/5',
        color
      )}
    >
      <div className="text-4xl mb-3">{icon}</div>
      <h4 className="font-display text-lg font-semibold text-gray-950">{title}</h4>
      <p className="mt-2 text-sm text-gray-700">{description}</p>
    </motion.div>
  )
}

function Arrow({ direction = 'down', delay = 0 }: { direction?: 'down' | 'right'; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={clsx(
        'flex items-center justify-center text-gray-400',
        direction === 'down' ? 'my-4' : 'mx-4'
      )}
    >
      {direction === 'down' ? (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      ) : (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      )}
    </motion.div>
  )
}

export function ArchitectureDiagram() {
  return (
    <div className="relative">
      {/* Orchestrator */}
      <div className="flex justify-center">
        <div className="w-full max-w-md">
          <AgentBox
            title="Orquestrador"
            icon="🎯"
            description="Coordena o fluxo de trabalho, detecta frameworks e agrega resultados dos agentes especializados"
            color="bg-gradient-to-br from-purple-100 to-blue-100"
            delay={0.1}
          />
        </div>
      </div>

      <Arrow delay={0.3} />

      {/* RAG System */}
      <div className="flex justify-center">
        <div className="w-full max-w-md">
          <AgentBox
            title="Sistema RAG"
            icon="📚"
            description="Recupera diretrizes WCAG, Apple HIG e WAI-ARIA com metadados de rastreabilidade para citações verificáveis"
            color="bg-gradient-to-br from-green-100 to-teal-100"
            delay={0.5}
          />
        </div>
      </div>

      <Arrow delay={0.7} />

      {/* Specialized Agents */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="text-center mb-4"
      >
        <span className="text-sm font-medium text-gray-600">Agentes Especializados</span>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <AgentBox
          title="unified-web-scanner"
          icon="🌐"
          description="Analisa HTML e React: semântica, ARIA, contraste e padrões acessíveis"
          color="bg-gradient-to-br from-orange-100 to-red-100"
          delay={1.1}
        />
        <AgentBox
          title="swiftui-a11y-checker"
          icon="📱"
          description="Verifica SwiftUI: VoiceOver, modificadores de acessibilidade e Dynamic Type"
          color="bg-gradient-to-br from-blue-100 to-indigo-100"
          delay={1.3}
        />
        <AgentBox
          title="visual-a11y-analyzer"
          icon="👁️"
          description="Analisa screenshots: contraste visual, alvos de toque e legibilidade"
          color="bg-gradient-to-br from-pink-100 to-purple-100"
          delay={1.5}
        />
      </div>

      <Arrow delay={1.7} />

      {/* Output */}
      <div className="flex justify-center">
        <div className="w-full max-w-md">
          <AgentBox
            title="Relatório Final"
            icon="📊"
            description="Markdown com problemas encontrados, citações WCAG e prompts otimizados para IA (Cursor, Copilot, Claude Code)"
            color="bg-gradient-to-br from-yellow-100 to-amber-100"
            delay={1.9}
          />
        </div>
      </div>
    </div>
  )
}
