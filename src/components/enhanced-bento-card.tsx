'use client'

import {
  BoltIcon,
  CpuChipIcon,
  DevicePhoneMobileIcon,
  FlagIcon,
  HeartIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

const iconMap = {
  'device-phone-mobile': DevicePhoneMobileIcon,
  'sparkles': SparklesIcon,
  'cpu-chip': CpuChipIcon,
  'flag': FlagIcon,
  'bolt': BoltIcon,
  'heart': HeartIcon,
}

interface EnhancedBentoCardProps {
  eyebrow: string
  title: string
  description: string
  iconName: keyof typeof iconMap
  className?: string
  delay?: number
}

export function EnhancedBentoCard({
  eyebrow,
  title,
  description,
  iconName,
  className = '',
  delay = 0,
}: EnhancedBentoCardProps) {
  const Icon = iconMap[iconName]
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay }}
      className={`group relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg transition-all duration-500 hover:shadow-2xl ${className}`}
    >
      {/* Animated gradient background on hover */}
      <motion.div
        className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(112, 88, 190, 0.1), transparent 70%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: '#7058BE' }}>
            {eyebrow}
          </span>
          <motion.div
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Icon className="h-12 w-12" style={{ color: '#7058BE' }} />
          </motion.div>
        </div>

        <h3 className="mb-3 font-display text-2xl font-bold transition-colors group-hover:text-[#7058BE]" style={{ color: '#211F22' }}>
          {title}
        </h3>

        <p className="leading-relaxed" style={{ color: '#211F22', opacity: 0.7 }}>
          {description}
        </p>
      </div>

      {/* Decorative corner element */}
      <motion.div
        className="absolute -bottom-4 -right-4 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity group-hover:opacity-50"
        style={{
          background: 'linear-gradient(135deg, rgba(112, 88, 190, 0.3), rgba(31, 140, 168, 0.3))',
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </motion.div>
  )
}
