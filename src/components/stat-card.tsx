'use client'

import { motion } from 'framer-motion'
import { AnimatedCounter } from './animated-counter'

interface StatCardProps {
  value: number
  suffix?: string
  prefix?: string
  label: string
  description: string
  color: string
  delay?: number
}

export function StatCard({
  value,
  suffix = '',
  prefix = '',
  label,
  description,
  color,
  delay = 0,
}: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="group relative overflow-hidden rounded-3xl border border-white/50 bg-white/40 p-8 shadow-lg backdrop-blur-xl transition-all duration-500 hover:border-white/70 hover:bg-white/60 hover:shadow-2xl"
    >
      {/* Animated background accent */}
      <motion.div
        className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `linear-gradient(135deg, ${color}10, transparent)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <div className="mb-4 inline-flex rounded-xl bg-white/50 p-3 shadow-sm ring-1 ring-black/5 backdrop-blur-sm">
           <div className="h-2 w-2 rounded-full animate-pulse" style={{ backgroundColor: color }} />
        </div>
        
        <AnimatedCounter
          value={value}
          suffix={suffix}
          prefix={prefix}
          className={`mb-3 block font-display text-6xl font-bold tracking-tight`}
          style={{ color }}
        />
        
        <div className={`mb-2 text-sm font-bold uppercase tracking-wider`} style={{ color }}>
          {label}
        </div>
        
        <p className="text-sm text-gray-600 leading-relaxed font-medium">
          {description}
        </p>
      </div>

      {/* Decorative element */}
      <motion.div
        className="absolute -right-8 -top-8 h-40 w-40 rounded-full opacity-10 blur-2xl"
        style={{ background: color }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </motion.div>
  )
}
