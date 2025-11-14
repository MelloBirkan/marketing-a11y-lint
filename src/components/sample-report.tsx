import clsx from 'clsx'

interface Issue {
  id: number
  title: string
  severity: 'high' | 'medium' | 'low'
  file: string
  line: number
  wcag: string
  description: string
}

const sampleIssues: Issue[] = [
  {
    id: 1,
    title: 'Imagem sem texto alternativo',
    severity: 'high',
    file: 'src/components/ProductCard.jsx',
    line: 45,
    wcag: '1.1.1 Conteúdo Não Textual (Nível A)',
    description: 'A imagem do produto não possui atributo alt, impedindo leitores de tela de descrever o conteúdo.',
  },
  {
    id: 2,
    title: 'Contraste de cor insuficiente',
    severity: 'medium',
    file: 'src/components/Button.jsx',
    line: 23,
    wcag: '1.4.3 Contraste Mínimo (Nível AA)',
    description: 'A proporção de contraste entre o texto e o fundo é 3.2:1, abaixo do mínimo exigido de 4.5:1.',
  },
  {
    id: 3,
    title: 'Hierarquia de cabeçalhos incorreta',
    severity: 'medium',
    file: 'src/pages/Home.jsx',
    line: 78,
    wcag: '1.3.1 Informações e Relações (Nível A)',
    description: 'Salto de h1 para h3 sem h2 intermediário, prejudicando a navegação por leitores de tela.',
  },
]

export function SampleReport() {
  const severityConfig = {
    high: { label: 'ALTA', color: 'bg-red-500', textColor: 'text-red-700', bgColor: 'bg-red-50' },
    medium: { label: 'MÉDIA', color: 'bg-yellow-500', textColor: 'text-yellow-700', bgColor: 'bg-yellow-50' },
    low: { label: 'BAIXA', color: 'bg-blue-500', textColor: 'text-blue-700', bgColor: 'bg-blue-50' },
  }

  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-black/5">
      {/* Header */}
      <div className="border-b border-gray-200 bg-gradient-to-r from-purple-50 to-blue-50 px-6 py-6">
        <h3 className="font-display text-2xl font-medium text-gray-950">
          Relatório de Acessibilidade
        </h3>
        <p className="mt-2 text-sm text-gray-600">
          Análise gerada por a11y-lint • 3 problemas encontrados
        </p>
      </div>

      {/* Issues list */}
      <div className="divide-y divide-gray-200">
        {sampleIssues.map((issue) => {
          const config = severityConfig[issue.severity]

          return (
            <div key={issue.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <span className={clsx('h-8 w-8 rounded-full flex items-center justify-center text-white text-sm font-bold', config.color)}>
                    {issue.id}
                  </span>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3">
                    <h4 className="font-display text-lg font-medium text-gray-950">
                      {issue.title}
                    </h4>
                    <span className={clsx('rounded-full px-2.5 py-0.5 text-xs font-medium', config.textColor, config.bgColor)}>
                      {config.label}
                    </span>
                  </div>

                  <p className="mt-2 text-sm text-gray-600">{issue.description}</p>

                  <div className="mt-4 flex flex-wrap gap-4 text-xs">
                    <div className="flex items-center gap-1.5">
                      <span className="text-gray-500">📄 Arquivo:</span>
                      <code className="rounded bg-gray-100 px-2 py-1 font-mono text-gray-950">
                        {issue.file}:{issue.line}
                      </code>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <span className="text-gray-500">♿ WCAG:</span>
                      <span className="font-medium text-purple-700">{issue.wcag}</span>
                    </div>
                  </div>

                  <div className="mt-4 rounded-lg bg-purple-50 p-3 border border-purple-100">
                    <div className="flex items-start gap-2">
                      <span className="text-purple-600">💡</span>
                      <div>
                        <p className="text-xs font-medium text-purple-900">Prompt para IA:</p>
                        <p className="mt-1 text-xs text-purple-700">
                          &quot;Adicione o atributo alt descritivo à imagem em {issue.file}:{issue.line}&quot;
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 bg-gray-50 px-6 py-4">
        <p className="text-xs text-gray-500">
          Relatório gerado com{' '}
          <span className="font-medium text-gray-950">a11y-lint</span> •{' '}
          Sistema de IA Multi-Agente com RAG
        </p>
      </div>
    </div>
  )
}
