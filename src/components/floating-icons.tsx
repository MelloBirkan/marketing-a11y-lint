'use client'

import {
  CommandLineIcon,
  EyeIcon,
  FlagIcon,
  GlobeAltIcon,
  SpeakerWaveIcon,
  UserIcon,
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

function pseudoRandom(seed: number) {
  const x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

function getIconMotion(index: number, width: number, height: number) {
  const base = index * 10

  const startX = pseudoRandom(base + 1) * width
  const startY = pseudoRandom(base + 2) * height
  const endX = pseudoRandom(base + 3) * width
  const endY = pseudoRandom(base + 4) * height
  const duration = 25 + pseudoRandom(base + 5) * 10

  return { startX, startY, endX, endY, duration }
}

const icons = [
  { Icon: UserIcon, label: 'Accessibility', delay: 0 },
  { Icon: EyeIcon, label: 'Vision', delay: 0.2 },
  { Icon: SpeakerWaveIcon, label: 'Hearing', delay: 0.4 },
  { Icon: CommandLineIcon, label: 'Keyboard', delay: 0.6 },
  { Icon: FlagIcon, label: 'Focus', delay: 0.8 },
  { Icon: GlobeAltIcon, label: 'Universal', delay: 1.0 },
]

export function FloatingIcons() {
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 })

  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    })

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {icons.map((item, i) => {
        const { startX, startY, endX, endY, duration } = getIconMotion(
          i,
          dimensions.width,
          dimensions.height,
        )

        return (
          <motion.div
            key={i}
            className="absolute opacity-10"
            initial={{
              x: startX,
              y: startY,
              scale: 0,
              rotate: -180,
            }}
            animate={{
              y: [startY, endY],
              x: [startX, endX],
              scale: [0, 1, 1, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration,
              repeat: Infinity,
              delay: item.delay,
              ease: 'easeInOut',
            }}
            aria-hidden="true"
          >
            <item.Icon className="h-16 w-16" style={{ color: '#7058BE' }} />
          </motion.div>
        )
      })}
    </div>
  )
}
