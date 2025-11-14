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
      className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-shadow hover:shadow-2xl"
    >
      {/* Animated background accent */}
      <motion.div
        className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `linear-gradient(135deg, ${color}15, transparent)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <AnimatedCounter
          value={value}
          suffix={suffix}
          prefix={prefix}
          className={`mb-2 block font-display text-6xl font-bold`}
          style={{ color }}
        />
        <div className={`mb-2 text-sm font-semibold uppercase tracking-wider`} style={{ color }}>
          {label}
        </div>
        <p className="text-sm text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Decorative element */}
      <motion.div
        className="absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-20"
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
