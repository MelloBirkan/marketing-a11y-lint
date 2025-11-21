'use client'

import { motion } from 'framer-motion'
import {
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  EyeIcon,
  ChartBarIcon,
  BookOpenIcon,
  CommandLineIcon,
} from '@heroicons/react/24/outline'

interface AgentCardProps {
  title: string
  description: string
  Icon: React.ElementType
  color: string
  delay: number
  className?: string
}

function AgentCard({ title, description, Icon, color, delay, className = '' }: AgentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3, ease: 'easeOut' }
      }}
      className={`group relative ${className}`}
    >
      {/* Glowing background effect */}
      <motion.div
        className="absolute -inset-1 rounded-3xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: color }}
      />

      {/* Card content */}
      <div className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-xl ring-1 ring-black/5 transition-shadow duration-300 group-hover:shadow-2xl">
        {/* Subtle gradient overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{ background: `linear-gradient(135deg, ${color}, transparent)` }}
        />

        {/* Icon container */}
        <motion.div
          whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
          transition={{ duration: 0.5 }}
          className="relative mb-4 inline-flex items-center justify-center rounded-xl p-3"
          style={{ backgroundColor: `${color}15` }}
        >
          <Icon className="h-8 w-8" style={{ color }} />
        </motion.div>

        {/* Title */}
        <h4
          className="mb-2 font-display text-lg font-bold tracking-tight"
          style={{ color: '#211F22' }}
        >
          {title}
        </h4>

        {/* Description */}
        <p className="text-sm leading-relaxed" style={{ color: '#211F22', opacity: 0.7 }}>
          {description}
        </p>

        {/* Decorative corner accent */}
        <motion.div
          className="absolute -right-4 -top-4 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30"
          style={{ backgroundColor: color }}
        />
      </div>
    </motion.div>
  )
}

function AnimatedArrow({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex justify-center py-6"
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="flex flex-col items-center gap-2"
      >
        {/* Animated dots */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.2,
              ease: 'easeInOut'
            }}
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: '#7058BE' }}
          />
        ))}

        {/* Arrow icon */}
        <motion.svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#7058BE"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </motion.svg>
      </motion.div>
    </motion.div>
  )
}

function SectionLabel({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="mb-8 text-center"
    >
      <span
        className="inline-block rounded-full px-6 py-2 text-sm font-semibold"
        style={{
          backgroundColor: '#7058BE15',
          color: '#7058BE'
        }}
      >
        {children}
      </span>
    </motion.div>
  )
}

export function ArchitectureDiagram() {
  return (
    <div className="relative mx-auto max-w-6xl">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.03, 0.05, 0.03],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full blur-3xl"
          style={{ background: 'linear-gradient(135deg, #7058BE, #E14775)' }}
        />
      </div>

      {/* Orchestrator */}
      <div className="flex justify-center">
        <div className="w-full max-w-xl">
          <AgentCard
            title="Orquestrador"
            description="Coordena o fluxo de trabalho, detecta frameworks e agrega resultados dos agentes especializados"
            Icon={CommandLineIcon}
            color="#7058BE"
            delay={0.1}
          />
        </div>
      </div>

      <AnimatedArrow delay={0.3} />

      {/* RAG System */}
      <div className="flex justify-center">
        <div className="w-full max-w-xl">
          <AgentCard
            title="Sistema RAG"
            description="Recupera diretrizes WCAG, Apple HIG e WAI-ARIA com metadados de rastreabilidade para citações verificáveis"
            Icon={BookOpenIcon}
            color="#269D69"
            delay={0.5}
          />
        </div>
      </div>

      <AnimatedArrow delay={0.7} />

      {/* Specialized Agents Section Label */}
      <SectionLabel delay={0.9}>Agentes Especializados</SectionLabel>

      {/* Specialized Agents Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <AgentCard
          title="unified-web-scanner"
          description="Analisa HTML e React: semântica, ARIA, contraste e padrões acessíveis"
          Icon={GlobeAltIcon}
          color="#E16132"
          delay={1.1}
        />
        <AgentCard
          title="swiftui-a11y-checker"
          description="Verifica SwiftUI: VoiceOver, modificadores de acessibilidade e Dynamic Type"
          Icon={DevicePhoneMobileIcon}
          color="#1F8CA8"
          delay={1.3}
        />
        <AgentCard
          title="visual-a11y-analyzer"
          description="Analisa screenshots: contraste visual, alvos de toque e legibilidade"
          Icon={EyeIcon}
          color="#E14775"
          delay={1.5}
        />
      </div>

      <AnimatedArrow delay={1.7} />

      {/* Final Report */}
      <div className="flex justify-center">
        <div className="w-full max-w-xl">
          <AgentCard
            title="Relatório Final"
            description="Markdown com problemas encontrados, citações WCAG e prompts otimizados para IA (Cursor, Copilot, Claude Code)"
            Icon={ChartBarIcon}
            color="#CC7B08"
            delay={1.9}
          />
        </div>
      </div>

      {/* Connecting lines decoration (subtle) */}
      <svg className="absolute inset-0 -z-10 h-full w-full" style={{ opacity: 0.05 }}>
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#7058BE" />
            <stop offset="50%" stopColor="#269D69" />
            <stop offset="100%" stopColor="#CC7B08" />
          </linearGradient>
        </defs>
        <motion.line
          x1="50%"
          y1="0"
          x2="50%"
          y2="100%"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          strokeDasharray="8 8"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.5 }}
        />
      </svg>
    </div>
  )
}
