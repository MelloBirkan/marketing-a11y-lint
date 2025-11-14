import { ArchitectureDiagram } from '@/components/architecture-diagram'
import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { CodeExample } from '@/components/code-example'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { MetricsCards } from '@/components/metrics-cards'
import { Navbar } from '@/components/navbar'
import { SampleReport } from '@/components/sample-report'
import { TerminalDemo } from '@/components/terminal-demo'
import { Heading, Subheading } from '@/components/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  description:
    'Sistema de IA Multi-Agente para análise automatizada de acessibilidade em aplicações Web e Mobile. Detecte problemas de acessibilidade antes dos seus usuários.',
}

function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <h1 className="font-display text-6xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            Corrija problemas de acessibilidade antes dos seus usuários.
          </h1>
          <p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            Análise de acessibilidade com IA multi-agente para Web, React e SwiftUI. Validação semântica com citações WCAG verificáveis.
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="https://github.com/mellobirkan/a11y-lint">Ver no GitHub</Button>
            <Button variant="secondary" href="#demo">
              Ver Demo
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function ProblemSection() {
  return (
    <div className="overflow-hidden">
      <Container className="pb-24">
        <Subheading>O Problema</Subheading>
        <Heading as="h2" className="mt-2 max-w-3xl">
          97% dos sites têm erros de acessibilidade
        </Heading>
        <p className="mt-6 max-w-3xl text-lg/8 text-gray-600">
          Ferramentas tradicionais detectam apenas <strong>31,3%</strong> dos problemas em aplicações mobile e falham na validação semântica. Desenvolvedores enfrentam sobrecarga cognitiva gerenciando múltiplas diretrizes: WCAG 2.2, Apple HIG, WAI-ARIA.
        </p>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="text-center">
            <div className="text-5xl font-bold text-purple-600">2.5B+</div>
            <div className="mt-2 text-sm text-gray-600">Pessoas dependem de tecnologias assistivas</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-purple-600">31.3%</div>
            <div className="mt-2 text-sm text-gray-600">Cobertura de ferramentas tradicionais</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-purple-600">97%</div>
            <div className="mt-2 text-sm text-gray-600">Sites com erros de acessibilidade</div>
          </div>
        </div>
      </Container>
    </div>
  )
}

function BentoSection() {
  return (
    <Container id="features">
      <Subheading>Recursos</Subheading>
      <Heading as="h3" className="mt-2 max-w-3xl">
        A única ferramenta que cobre Web e Mobile com IA
      </Heading>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          eyebrow="Multi-plataforma"
          title="Análise Cross-Platform"
          description="Analise HTML, React e SwiftUI em uma única ferramenta. A única solução que cobre Web e Mobile com validação semântica profunda."
          graphic={
            <div className="flex h-80 items-center justify-center text-9xl">
              🌐📱
            </div>
          }
          fade={['bottom']}
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />
        <BentoCard
          eyebrow="Validação Inteligente"
          title="Semântica, não apenas sintaxe"
          description="Detecta problemas de contexto que ferramentas tradicionais ignoram. Entende o significado, não apenas a estrutura do código."
          graphic={
            <div className="flex h-80 items-center justify-center text-9xl">
              🧠✨
            </div>
          }
          fade={['bottom']}
          className="lg:col-span-3 lg:rounded-tr-4xl"
        />
        <BentoCard
          eyebrow="IA-Nativo"
          title="Integração com Cursor & Copilot"
          description="Gera prompts otimizados para correção instantânea. Copy-paste direto no seu editor favorito."
          graphic={
            <div className="flex size-full items-center justify-center pt-10 pl-10 text-7xl">
              🤖💻
            </div>
          }
          className="lg:col-span-2 lg:rounded-bl-4xl"
        />
        <BentoCard
          eyebrow="Arquitetura"
          title="Multi-Agente com RAG"
          description="Sistema de agentes especializados com citações WCAG verificáveis. Orquestrador + workers para máxima precisão."
          graphic={
            <div className="flex h-full items-center justify-center text-6xl">
              🎯📚
            </div>
          }
          className="lg:col-span-4 lg:rounded-br-4xl"
        />
      </div>
    </Container>
  )
}

function HowItWorksSection() {
  return (
    <div className="mx-2 mt-2 rounded-4xl bg-gray-900 py-32" id="how-it-works">
      <Container>
        <Subheading dark>Como Funciona</Subheading>
        <Heading as="h3" dark className="mt-2 max-w-3xl">
          Análise de acessibilidade em 3 passos simples
        </Heading>

        <div className="mt-16">
          <TerminalDemo />
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="mb-4 flex justify-center text-6xl">⚡</div>
            <h4 className="font-display text-xl font-medium text-white">1. Instale</h4>
            <p className="mt-2 text-sm text-gray-400">
              pip install a11y-lint e configure suas credenciais Claude
            </p>
          </div>
          <div className="text-center">
            <div className="mb-4 flex justify-center text-6xl">🔍</div>
            <h4 className="font-display text-xl font-medium text-white">2. Analise</h4>
            <p className="mt-2 text-sm text-gray-400">
              Execute a11y-lint scan ./src e aguarde 2-3 minutos
            </p>
          </div>
          <div className="text-center">
            <div className="mb-4 flex justify-center text-6xl">✅</div>
            <h4 className="font-display text-xl font-medium text-white">3. Corrija</h4>
            <p className="mt-2 text-sm text-gray-400">
              Use os prompts de IA gerados para correções instantâneas
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

function DemoSection() {
  return (
    <div className="py-32">
      <Container id="demo">
        <Subheading>Demonstração Interativa</Subheading>
        <Heading as="h3" className="mt-2 max-w-3xl">
          Veja o a11y-lint em ação
        </Heading>

        <div className="mt-16 space-y-8">
          <CodeExample
            title="Imagem sem texto alternativo"
            description="Leitores de tela não conseguem descrever a imagem para usuários com deficiência visual"
            wcagRule="1.1.1 Conteúdo Não Textual (Nível A)"
            severity="high"
            beforeCode={`<img src={product.image} className="w-full" />`}
            afterCode={`<img
  src={product.image}
  alt={product.name}
  className="w-full"
/>`}
          />

          <CodeExample
            title="Contraste de cor insuficiente"
            description="Texto com baixo contraste é difícil de ler para usuários com baixa visão"
            wcagRule="1.4.3 Contraste Mínimo (Nível AA)"
            severity="medium"
            beforeCode={`<button className="bg-gray-300 text-gray-400">
  Enviar
</button>`}
            afterCode={`<button className="bg-blue-600 text-white">
  Enviar
</button>`}
          />

          <CodeExample
            title="Botão sem acessibilidade no SwiftUI"
            description="VoiceOver não consegue identificar a ação do botão adequadamente"
            wcagRule="Apple HIG - VoiceOver"
            severity="high"
            beforeCode={`Button(action: { submit() }) {
  Image(systemName: "paperplane")
}`}
            afterCode={`Button(action: { submit() }) {
  Image(systemName: "paperplane")
}
.accessibilityLabel("Enviar mensagem")
.accessibilityHint("Toque duas vezes para enviar")`}
          />
        </div>

        <div className="mt-24">
          <Subheading>Relatório Gerado</Subheading>
          <Heading as="h3" className="mt-2 max-w-3xl">
            Resultados detalhados e acionáveis
          </Heading>
          <div className="mt-12">
            <SampleReport />
          </div>
        </div>
      </Container>
    </div>
  )
}

function MetricsSection() {
  return (
    <div className="py-32 bg-gradient-to-b from-gray-50 to-white">
      <Container>
        <Subheading>Resultados Comprovados</Subheading>
        <Heading as="h3" className="mt-2 max-w-3xl">
          Performance superior às ferramentas tradicionais
        </Heading>
        <div className="mt-16">
          <MetricsCards />
        </div>
      </Container>
    </div>
  )
}

function ArchitectureSection() {
  return (
    <div className="py-32">
      <Container>
        <Subheading>Arquitetura</Subheading>
        <Heading as="h3" className="mt-2 max-w-3xl">
          Sistema Multi-Agente com RAG
        </Heading>
        <p className="mt-6 max-w-3xl text-lg/8 text-gray-600">
          Orquestrador vertical coordena agentes especializados que analisam código com citações WCAG verificáveis. Padrão ReAct reduz alucinações de 14% para 6%.
        </p>
        <div className="mt-16">
          <ArchitectureDiagram />
        </div>
      </Container>
    </div>
  )
}

function CTASection() {
  return (
    <div className="py-32 bg-gradient-to-br from-purple-600 to-blue-600">
      <Container className="text-center">
        <h2 className="font-display text-5xl font-medium text-white sm:text-6xl">
          Pronto para melhorar a acessibilidade?
        </h2>
        <p className="mt-6 text-xl text-purple-100">
          Ferramenta open-source desenvolvida como TCC. Contribuições são bem-vindas!
        </p>
        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button href="https://github.com/mellobirkan/a11y-lint" className="bg-white text-purple-600 hover:bg-gray-100">
            Ver no GitHub
          </Button>
          <Button href="#demo" variant="secondary" className="border-white text-white hover:bg-white/10">
            Explorar Demo
          </Button>
        </div>
      </Container>
    </div>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <div className="bg-gradient-to-b from-white from-50% to-gray-100 py-32">
          <ProblemSection />
          <div className="mt-32">
            <BentoSection />
          </div>
        </div>
        <HowItWorksSection />
        <DemoSection />
        <MetricsSection />
        <ArchitectureSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
