'use client'

import { motion } from 'framer-motion'
import { AnimatedNumber } from './animated-number'

interface MetricCardProps {
  value: number
  label: string
  suffix?: string
  prefix?: string
  decimals?: number
  index?: number
}

function MetricCard({ value, label, suffix = '', prefix = '', decimals = 0, index = 0 }: MetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="group relative flex flex-col items-center justify-center overflow-hidden rounded-3xl border border-white/60 bg-white/40 p-8 shadow-lg backdrop-blur-xl transition-all duration-500 hover:border-white/70 hover:bg-white/60 hover:shadow-2xl"
    >
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: 'radial-gradient(circle at 50% 0%, rgba(112, 88, 190, 0.1), transparent 70%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="flex items-baseline gap-1 font-display text-5xl font-bold text-gray-900 transition-colors group-hover:text-[#7058BE]">
          {prefix}
          <AnimatedNumber start={0} end={value} decimals={decimals} />
          {suffix}
        </div>
        <div className="mt-3 text-center text-sm font-medium leading-relaxed text-gray-600">
          {label}
        </div>
      </div>

      {/* Decorative corner glow */}
      <motion.div
        className="absolute -right-6 -top-6 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity group-hover:opacity-20"
        style={{ background: 'linear-gradient(135deg, rgba(112, 88, 190, 0.4), rgba(31, 140, 168, 0.4))' }}
      />
    </motion.div>
  )
}

export function MetricsCards() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <MetricCard
        value={69.2}
        suffix="%"
        decimals={1}
        label="Taxa de detecção de problemas em testes"
        index={0}
      />
      <MetricCard
        value={0.30}
        prefix="$"
        decimals={2}
        label="Custo médio por análise completa"
        index={1}
      />
      <MetricCard
        value={30}
        suffix="+"
        label="Regras WCAG e HIG validadas"
        index={2}
      />
      <MetricCard
        value={3}
        label="Minutos de análise (projeto médio)"
        index={3}
      />
    </div>
  )
}
