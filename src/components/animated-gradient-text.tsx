'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedGradientTextProps {
  children: ReactNode
  className?: string
}

export function AnimatedGradientText({ children, className = '' }: AnimatedGradientTextProps) {
  return (
    <motion.span
      className={className}
      animate={{
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: 'linear',
      }}
      style={{
        background: 'linear-gradient(90deg, #7058BE, #E14775, #E16132, #269D69, #1F8CA8, #7058BE)',
        backgroundSize: '200% 200%',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
    >
      {children}
    </motion.span>
  )
}
