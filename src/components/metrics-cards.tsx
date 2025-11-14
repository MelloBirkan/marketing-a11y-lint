import { AnimatedNumber } from './animated-number'

interface MetricCardProps {
  value: number
  label: string
  suffix?: string
  prefix?: string
  decimals?: number
}

function MetricCard({ value, label, suffix = '', prefix = '', decimals = 0 }: MetricCardProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5">
      <div className="flex items-baseline gap-1 font-display text-5xl font-medium text-gray-950">
        {prefix}
        <AnimatedNumber start={0} end={value} decimals={decimals} />
        {suffix}
      </div>
      <div className="mt-3 text-center text-sm/6 text-gray-600">{label}</div>
    </div>
  )
}

export function MetricsCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <MetricCard
        value={69.2}
        suffix="%"
        decimals={1}
        label="Cobertura de detecção de problemas"
      />
      <MetricCard
        value={0.30}
        prefix="$"
        decimals={2}
        label="Custo por análise (30 arquivos)"
      />
      <MetricCard
        value={30}
        suffix="+"
        label="Regras de acessibilidade"
      />
      <MetricCard
        value={3}
        label="Minutos por análise"
      />
    </div>
  )
}
