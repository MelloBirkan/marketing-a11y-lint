'use client'

import { useState } from 'react'
import clsx from 'clsx'

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

  const severityColors = {
    high: 'bg-red-500',
    medium: 'bg-yellow-500',
    low: 'bg-blue-500',
  }

  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5">
      <div className="border-b border-gray-200 bg-gray-50 px-6 py-4">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-3">
              <h3 className="font-display text-lg font-medium text-gray-950">{title}</h3>
              <span className={clsx('h-2 w-2 rounded-full', severityColors[severity])} />
            </div>
            <p className="mt-1 text-sm text-gray-600">{description}</p>
            {wcagRule && (
              <p className="mt-2 text-xs font-medium text-gray-500">
                WCAG: {wcagRule}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="border-b border-gray-200">
        <div className="flex gap-2 px-6 pt-4">
          <button
            onClick={() => setActiveTab('before')}
            className={clsx(
              'rounded-t-lg px-4 py-2 text-sm font-medium transition-colors',
              activeTab === 'before'
                ? 'bg-white text-gray-950 shadow-sm ring-1 ring-black/5'
                : 'text-gray-600 hover:text-gray-950'
            )}
          >
            ❌ Problema
          </button>
          <button
            onClick={() => setActiveTab('after')}
            className={clsx(
              'rounded-t-lg px-4 py-2 text-sm font-medium transition-colors',
              activeTab === 'after'
                ? 'bg-white text-gray-950 shadow-sm ring-1 ring-black/5'
                : 'text-gray-600 hover:text-gray-950'
            )}
          >
            ✅ Corrigido
          </button>
        </div>
      </div>

      <div className="bg-gray-950 p-6">
        <pre className="overflow-x-auto text-sm text-gray-100">
          <code>{activeTab === 'before' ? beforeCode : afterCode}</code>
        </pre>
      </div>
    </div>
  )
}
