'use client'

import { useState } from 'react'
import clsx from 'clsx'
import { 
  XCircleIcon, 
  CheckCircleIcon, 
  ExclamationTriangleIcon 
} from '@heroicons/react/20/solid'

interface CodeExampleProps {
  title: string
  description: string
  beforeCode: string
  afterCode: string
  wcagRule?: string
  severity?: 'high' | 'medium' | 'low'
}

export function CodeExample({
  title,
  description,
  beforeCode,
  afterCode,
  wcagRule,
  severity = 'high',
}: CodeExampleProps) {
  const [activeTab, setActiveTab] = useState<'before' | 'after'>('before')

  const severityConfig = {
    high: { color: 'text-rose-500', bg: 'bg-rose-50', ring: 'ring-rose-200' },
    medium: { color: 'text-amber-500', bg: 'bg-amber-50', ring: 'ring-amber-200' },
    low: { color: 'text-blue-500', bg: 'bg-blue-50', ring: 'ring-blue-200' },
  }

  const config = severityConfig[severity]

  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/60 bg-white/40 p-2 shadow-lg backdrop-blur-xl transition-all hover:bg-white/60 hover:shadow-xl">
      {/* Header Section */}
      <div className="px-5 pt-5 pb-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-lg font-bold text-gray-900">
              {title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              {description}
            </p>
          </div>
          <span className={clsx(
            'flex-shrink-0 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider shadow-sm ring-1 ring-inset',
            config.bg,
            config.color,
            config.ring
          )}>
            {severity === 'high' ? 'Crítico' : severity === 'medium' ? 'Atenção' : 'Info'}
          </span>
        </div>

        {wcagRule && (
          <div className="mt-4 flex items-center gap-2 text-xs font-medium text-gray-500">
            <ExclamationTriangleIcon className="h-4 w-4 text-gray-400" />
            <span className="rounded-md bg-gray-100 px-2 py-1 font-mono text-gray-600 ring-1 ring-gray-200">
              {wcagRule}
            </span>
          </div>
        )}
      </div>

      {/* Code Window */}
      <div className="mt-2 overflow-hidden rounded-2xl bg-[#1e1e1e] shadow-inner ring-1 ring-white/10">
        {/* Tab Bar */}
        <div className="flex items-center justify-between border-b border-white/5 bg-white/5 px-2 py-2 backdrop-blur-md">
          <div className="flex gap-1 rounded-xl bg-black/20 p-1">
            <button
              onClick={() => setActiveTab('before')}
              className={clsx(
                'flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all',
                activeTab === 'before'
                  ? 'bg-rose-500/10 text-rose-400 shadow-sm ring-1 ring-rose-500/20'
                  : 'text-gray-500 hover:text-gray-300'
              )}
            >
              <XCircleIcon className={clsx('h-4 w-4', activeTab === 'before' ? 'text-rose-400' : 'text-gray-600')} />
              Problema
            </button>
            <button
              onClick={() => setActiveTab('after')}
              className={clsx(
                'flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all',
                activeTab === 'after'
                  ? 'bg-teal-500/10 text-teal-400 shadow-sm ring-1 ring-teal-500/20'
                  : 'text-gray-500 hover:text-gray-300'
              )}
            >
              <CheckCircleIcon className={clsx('h-4 w-4', activeTab === 'after' ? 'text-teal-400' : 'text-gray-600')} />
              Corrigido
            </button>
          </div>
          
          {/* Window Controls Decoration */}
          <div className="flex gap-1.5 pr-3 opacity-50">
            <div className="h-2.5 w-2.5 rounded-full bg-red-500/20" />
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/20" />
            <div className="h-2.5 w-2.5 rounded-full bg-green-500/20" />
          </div>
        </div>

        {/* Code Content */}
        <div className="relative group/code">
          <div className={clsx(
            'absolute inset-0 pointer-events-none opacity-5 transition-opacity duration-500',
            activeTab === 'before' ? 'bg-rose-500' : 'bg-teal-500'
          )} />
          <pre className="overflow-x-auto p-6 font-mono text-sm leading-relaxed">
            <code className={activeTab === 'before' ? 'text-rose-50' : 'text-teal-50'}>
              {activeTab === 'before' ? beforeCode : afterCode}
            </code>
          </pre>
        </div>
      </div>
    </div>
  )
}
