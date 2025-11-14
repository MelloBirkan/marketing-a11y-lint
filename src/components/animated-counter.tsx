'use client'

import { motion, useSpring, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'

interface AnimatedCounterProps {
  value: number
  suffix?: string
  prefix?: string
  className?: string
  duration?: number
}

export function AnimatedCounter({
  value,
  suffix = '',
  prefix = '',
  className = '',
  duration = 2,
}: AnimatedCounterProps) {
  const [hasAnimated, setHasAnimated] = useState(false)
  const spring = useSpring(0, { duration: duration * 1000 })
  const display = useTransform(spring, (current) =>
    Math.floor(current).toLocaleString()
  )

  useEffect(() => {
    if (hasAnimated) {
      spring.set(value)
    }
  }, [hasAnimated, spring, value])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5 },
      }}
      onViewportEnter={() => setHasAnimated(true)}
      viewport={{ once: true, margin: '-100px' }}
      className={className}
    >
      {prefix}
      <motion.span>{display}</motion.span>
      {suffix}
    </motion.div>
  )
}
