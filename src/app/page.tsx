import { ArchitectureDiagram } from '@/components/architecture-diagram'
import { Button } from '@/components/button'
import { CodeExample } from '@/components/code-example'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { MetricsCards } from '@/components/metrics-cards'
import { Navbar } from '@/components/navbar'
import { SampleReport } from '@/components/sample-report'
import { TerminalDemo } from '@/components/terminal-demo'
import { Heading, Subheading } from '@/components/text'
import { MorphingBlob } from '@/components/morphing-blob'
import { AnimatedGradientText } from '@/components/animated-gradient-text'
import { EnhancedBentoCard } from '@/components/enhanced-bento-card'
import { StatCard } from '@/components/stat-card'
import { ScrollProgress } from '@/components/scroll-progress'
import { ScreenshotGallery } from '@/components/screenshot-gallery'
import {
  BoltIcon,
  CheckCircleIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  description:
    'Sistema de IA Multi-Agente para análise automatizada de acessibilidade em aplicações Web e Mobile. Detecte problemas de acessibilidade antes dos seus usuários.',
}

function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated background with morphing blobs */}
      <div className="absolute inset-0" style={{ backgroundColor: '#FAF4F3' }}>
        <MorphingBlob
          className="top-0 left-1/4 h-96 w-96"
          color="linear-gradient(135deg, #7058BE, #E14775)"
          delay={0}
        />
        <MorphingBlob
          className="bottom-0 right-1/4 h-[30rem] w-[30rem]"
          color="linear-gradient(135deg, #1F8CA8, #269D69)"
          delay={0.5}
        />
        <MorphingBlob
          className="top-1/3 right-1/3 h-80 w-80"
          color="linear-gradient(135deg, #E16132, #CC7B08)"
          delay={1}
        />
      </div>

      <Container className="relative z-10">
        <Navbar />
        <div className="flex min-h-[calc(100vh-8rem)] flex-col justify-center pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <div className="space-y-8">
            <h1 className="font-display text-6xl/[0.95] font-bold tracking-tight text-balance sm:text-7xl/[0.9] md:text-8xl/[0.85] lg:text-9xl/[0.85]" style={{ color: '#211F22' }}>
              Corrija problemas de{' '}
              <AnimatedGradientText>
                acessibilidade
              </AnimatedGradientText>
              <br />
              antes dos seus usuários.
            </h1>
            <p className="mt-8 max-w-2xl text-xl/8 font-medium sm:text-2xl/9" style={{ color: '#211F22', opacity: 0.85 }}>
              Análise de acessibilidade com{' '}
              <span className="font-bold" style={{ color: '#7058BE' }}>IA multi-agente</span> para Web,
              React e SwiftUI. Validação semântica com citações WCAG verificáveis.
            </p>
            <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
              <Button href="https://github.com/mellobirkan/a11y-lint" className="cursor-fancy group relative overflow-hidden">
                <span className="relative z-10">Ver no GitHub</span>
                <div className="absolute inset-0 translate-y-full transition-transform duration-300 group-hover:translate-y-0" style={{ background: 'linear-gradient(135deg, #7058BE, #E14775)' }} />
              </Button>
              <Button variant="secondary" href="#demo" className="cursor-fancy">
                Ver Demo →
              </Button>
            </div>
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
          <span style={{
            background: 'linear-gradient(135deg, #211F22, #7058BE, #211F22)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            97% dos sites têm erros de acessibilidade
          </span>
        </Heading>
        <p className="mt-6 max-w-3xl text-xl/8" style={{ color: '#211F22', opacity: 0.75 }}>
          Ferramentas tradicionais detectam apenas <strong style={{ color: '#E14775' }}>31,3%</strong> dos problemas em aplicações mobile e falham na validação semântica. Desenvolvedores enfrentam sobrecarga cognitiva gerenciando múltiplas diretrizes: WCAG 2.2, Apple HIG, WAI-ARIA.
        </p>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <StatCard
            value={2.5}
            suffix="B+"
            label="Impacto Global"
            description="Pessoas dependem de tecnologias assistivas"
            color="#7058BE"
            delay={0}
          />
          <StatCard
            value={31.3}
            suffix="%"
            label="Cobertura Limitada"
            description="Cobertura de ferramentas tradicionais"
            color="#E14775"
            delay={0.2}
          />
          <StatCard
            value={97}
            suffix="%"
            label="Problema Universal"
            description="Sites com erros de acessibilidade"
            color="#E16132"
            delay={0.4}
          />
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
        A única ferramenta que cobre{' '}
        <span style={{
          background: 'linear-gradient(135deg, #7058BE, #1F8CA8)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          Web e Mobile com IA
        </span>
      </Heading>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-16 md:grid-cols-2 lg:grid-cols-4">
        <EnhancedBentoCard
          eyebrow="Multi-plataforma"
          title="Análise Cross-Platform"
          description="Analise HTML, React e SwiftUI em uma única ferramenta. A única solução que cobre Web e Mobile com validação semântica profunda."
          iconName="device-phone-mobile"
          className="md:col-span-2"
          delay={0}
        />
        <EnhancedBentoCard
          eyebrow="Validação Inteligente"
          title="Semântica Avançada"
          description="Detecta problemas de contexto que ferramentas tradicionais ignoram. Entende o significado, não apenas a estrutura do código."
          iconName="sparkles"
          className="md:col-span-2"
          delay={0.1}
        />
        <EnhancedBentoCard
          eyebrow="IA-Nativo"
          title="Integração com Cursor"
          description="Gera prompts otimizados para correção instantânea. Copy-paste direto no seu editor favorito."
          iconName="cpu-chip"
          delay={0.2}
        />
        <EnhancedBentoCard
          eyebrow="Multi-Agente"
          title="Sistema com RAG"
          description="Agentes especializados com citações WCAG verificáveis. Orquestrador + workers."
          iconName="flag"
          delay={0.3}
        />
        <EnhancedBentoCard
          eyebrow="Performance"
          title="Análise Rápida"
          description="Escaneie projetos inteiros em minutos. Pipeline otimizado para velocidade."
          iconName="bolt"
          delay={0.4}
        />
        <EnhancedBentoCard
          eyebrow="Open Source"
          title="Comunidade Ativa"
          description="Código aberto no GitHub. Contribuições e feedback são bem-vindos."
          iconName="heart"
          delay={0.5}
        />
      </div>
    </Container>
  )
}

function HowItWorksSection() {
  return (
    <div className="relative mx-2 mt-2 overflow-hidden rounded-4xl py-32" style={{ background: 'linear-gradient(135deg, #211F22, #7058BE, #211F22)' }} id="how-it-works">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 animate-[gradient-shift_8s_ease-in-out_infinite]" style={{
          background: 'linear-gradient(90deg, rgba(225, 71, 117, 0.2), rgba(225, 97, 50, 0.2), rgba(31, 140, 168, 0.2), rgba(225, 71, 117, 0.2))',
          backgroundSize: '200% 200%'
        }} />
      </div>

      <Container className="relative z-10">
        <Subheading dark>Como Funciona</Subheading>
        <Heading as="h3" dark className="mt-2 max-w-3xl">
          Análise de acessibilidade em{' '}
          <span style={{
            background: 'linear-gradient(135deg, #E14775, #E16132)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            3 passos simples
          </span>
        </Heading>

        <div className="mt-16">
          <TerminalDemo />
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="group text-center transition-transform hover:scale-105">
            <div className="mb-4 flex justify-center transition-transform group-hover:animate-[float_2s_ease-in-out_infinite]">
              <BoltIcon className="h-16 w-16" style={{ color: '#E14775' }} />
            </div>
            <h4 className="font-display text-2xl font-bold text-white">1. Instale</h4>
            <p className="mt-3 text-base text-gray-300 leading-relaxed">
              pip install a11y-lint e configure suas credenciais Claude
            </p>
          </div>
          <div className="group text-center transition-transform hover:scale-105">
            <div className="mb-4 flex justify-center transition-transform group-hover:animate-[float_2s_ease-in-out_infinite]">
              <MagnifyingGlassIcon className="h-16 w-16" style={{ color: '#1F8CA8' }} />
            </div>
            <h4 className="font-display text-2xl font-bold text-white">2. Analise</h4>
            <p className="mt-3 text-base text-gray-300 leading-relaxed">
              Execute a11y-lint scan ./src e aguarde 2-3 minutos
            </p>
          </div>
          <div className="group text-center transition-transform hover:scale-105">
            <div className="mb-4 flex justify-center transition-transform group-hover:animate-[float_2s_ease-in-out_infinite]">
              <CheckCircleIcon className="h-16 w-16" style={{ color: '#269D69' }} />
            </div>
            <h4 className="font-display text-2xl font-bold text-white">3. Corrija</h4>
            <p className="mt-3 text-base text-gray-300 leading-relaxed">
              Use os prompts de IA gerados para correções instantâneas
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

function ScreenshotsSection() {
  return (
    <div className="py-32" style={{ backgroundColor: '#FAF4F3' }}>
      <Container>
        <Subheading>Interface Intuitiva</Subheading>
        <Heading as="h3" className="mt-2 max-w-3xl">
          Terminal UI poderoso com{' '}
          <span style={{
            background: 'linear-gradient(135deg, #7058BE, #E14775)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            experiência profissional
          </span>
        </Heading>
        <p className="mt-6 max-w-3xl text-xl/8" style={{ color: '#211F22', opacity: 0.75 }}>
          Interface de linha de comando moderna com suporte a temas claro e escuro,
          navegação intuitiva e feedback visual em tempo real durante análises.
        </p>
        <div className="mt-16">
          <ScreenshotGallery />
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
    <div className="relative overflow-hidden py-32">
      {/* Animated gradient background */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #7058BE, #E14775, #E16132)' }}>
        <div className="absolute inset-0 animate-[gradient-shift_10s_ease-in-out_infinite]" style={{
          background: 'linear-gradient(90deg, rgba(112, 88, 190, 0.5), rgba(225, 71, 117, 0.5), rgba(31, 140, 168, 0.5), rgba(112, 88, 190, 0.5))',
          backgroundSize: '200% 200%'
        }} />
      </div>

      {/* Morphing blobs */}
      <MorphingBlob
        className="top-0 right-0 h-96 w-96"
        color="rgba(250, 244, 243, 0.15)"
        delay={0}
      />
      <MorphingBlob
        className="bottom-0 left-0 h-80 w-80"
        color="rgba(250, 244, 243, 0.15)"
        delay={0.5}
      />

      <Container className="relative z-10 text-center">
        <h2 className="font-display text-5xl font-bold sm:text-6xl md:text-7xl" style={{ color: '#FAF4F3' }}>
          Pronto para melhorar a{' '}
          <span className="block" style={{
            background: 'linear-gradient(135deg, #CC7B08, #269D69)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            acessibilidade?
          </span>
        </h2>
        <p className="mt-8 text-xl sm:text-2xl" style={{ color: 'rgba(250, 244, 243, 0.9)' }}>
          Ferramenta open-source desenvolvida como TCC.
          <br />
          Contribuições são bem-vindas!
        </p>
        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button
            href="https://github.com/mellobirkan/a11y-lint"
            className="group relative overflow-hidden transition-all hover:scale-105 hover:shadow-2xl"
            style={{ backgroundColor: '#FAF4F3', color: '#7058BE' }}
          >
            <span className="relative z-10 font-bold">Ver no GitHub →</span>
            <div className="absolute inset-0 translate-y-full transition-transform duration-300 group-hover:translate-y-0" style={{
              background: 'linear-gradient(135deg, #CC7B08, #269D69)'
            }} />
          </Button>
          <Button
            href="#demo"
            variant="secondary"
            className="border-2 bg-transparent transition-all hover:scale-105"
            style={{
              borderColor: '#FAF4F3',
              color: '#FAF4F3',
            }}
          >
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
      <ScrollProgress />
      <Hero />
      <main>
        <div className="bg-gradient-to-b from-white from-50% to-gray-100 py-32">
          <ProblemSection />
          <div className="mt-32">
            <BentoSection />
          </div>
        </div>
        <HowItWorksSection />
        <ScreenshotsSection />
        <DemoSection />
        <MetricsSection />
        <ArchitectureSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
