'use client'

import { motion } from 'framer-motion'

interface MorphingBlobProps {
  className?: string
  color: string
  delay?: number
}

export function MorphingBlob({ className = '', color, delay = 0 }: MorphingBlobProps) {
  return (
    <motion.div
      className={`absolute ${className}`}
      animate={{
        scale: [1, 1.2, 1, 0.8, 1],
        rotate: [0, 90, 180, 270, 360],
        borderRadius: ['30% 70% 70% 30% / 30% 30% 70% 70%',
                      '70% 30% 30% 70% / 70% 70% 30% 30%',
                      '50% 50% 50% 50% / 50% 50% 50% 50%',
                      '30% 70% 70% 30% / 70% 30% 30% 70%',
                      '30% 70% 70% 30% / 30% 30% 70% 70%'],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
      style={{
        background: color,
        filter: 'blur(80px)',
        opacity: 0.6,
        // Safari-specific fixes for blur animation glitches
        WebkitBackfaceVisibility: 'hidden',
        backfaceVisibility: 'hidden',
        WebkitPerspective: 1000,
        perspective: 1000,
        WebkitTransform: 'translate3d(0, 0, 0)',
        transform: 'translate3d(0, 0, 0)',
        willChange: 'transform, border-radius',
      }}
    />
  )
}
