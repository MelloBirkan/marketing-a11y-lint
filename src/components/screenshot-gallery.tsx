'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface Screenshot {
  src: string
  title: string
  description: string
  tags: string[]
  span?: 'wide' | 'tall' | 'normal'
}

const screenshots: Screenshot[] = [
  {
    src: '/screenshots/scaning.png',
    title: 'Análise em Tempo Real',
    description: 'Agente de IA analisando código com feedback detalhado e progresso visual.',
    tags: ['Scanning', 'AI Agent', 'Real-time'],
  },
  {
    src: '/screenshots/darkmode.png',
    title: 'Interface em Modo Escuro',
    description: 'Menu principal com tema dark para trabalho noturno.',
    tags: ['UI', 'Dark Mode'],
  },
  {
    src: '/screenshots/lightmode.png',
    title: 'Interface em Modo Claro',
    description: 'Menu principal com tema light, design limpo e acessível.',
    tags: ['UI', 'Light Mode'],
  },
  {
    src: '/screenshots/selectDirectory.png',
    title: 'Seletor de Diretório',
    description: 'Interface intuitiva de navegação para selecionar projetos.',
    tags: ['File Browser', 'Navigation'],
  },
]

export function ScreenshotGallery() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
      {screenshots.map((screenshot, index) => {
        // First and last images take full width, middle ones are in grid
        const isFullWidth = index === 0 || index === 3
        const isMenuImage = index === 1 || index === 2

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 p-1 shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl ${
              isFullWidth ? 'md:col-span-2' : ''
            }`}
          >
            {/* Image Container */}
            <div className="relative overflow-hidden rounded-3xl bg-gray-900">
              <Image
                src={screenshot.src}
                alt={screenshot.title}
                width={isMenuImage ? 800 : 1600}
                height={isMenuImage ? 1200 : 900}
                className={`h-auto w-full transition-transform duration-700 group-hover:scale-105 ${
                  isMenuImage ? 'max-h-[600px] object-contain object-top' : ''
                }`}
                priority={index < 2}
              />

              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Info Overlay */}
              <div className="absolute inset-x-0 bottom-0 translate-y-full p-6 transition-transform duration-500 group-hover:translate-y-0 lg:p-8">
                <h4 className="mb-2 font-display text-xl font-bold text-white lg:text-2xl">
                  {screenshot.title}
                </h4>
                <p className="mb-3 text-sm text-gray-200 lg:text-base">
                  {screenshot.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {screenshot.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-sm lg:text-sm"
                      style={{
                        backgroundColor: 'rgba(112, 88, 190, 0.8)',
                        color: '#FAF4F3',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Corner Badge */}
              <div className="absolute right-4 top-4 rounded-full px-3 py-1.5 text-xs font-bold backdrop-blur-md transition-all group-hover:scale-110 lg:px-4 lg:py-2 lg:text-sm"
                style={{
                  backgroundColor: 'rgba(225, 71, 117, 0.9)',
                  color: '#FAF4F3',
                }}
              >
                {index + 1}
              </div>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
