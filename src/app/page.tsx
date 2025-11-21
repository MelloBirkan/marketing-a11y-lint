import { ArchitectureDiagram } from '@/components/architecture-diagram'
import { Button } from '@/components/button'
import { CodeExample } from '@/components/code-example'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { PlusGrid, PlusGridItem, PlusGridRow } from '@/components/plus-grid'
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
  DocumentTextIcon,
  PresentationChartBarIcon,
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
              <Button href="https://github.com/MelloBirkan" className="cursor-fancy group relative overflow-hidden">
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
    <PlusGridRow className="relative">
      <PlusGridItem className="py-20 sm:py-24">
        <Container>
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
      </PlusGridItem>
    </PlusGridRow>
  )
}

function BentoSection() {
  return (
    <PlusGridRow className="relative">
      <PlusGridItem className="py-20 sm:py-24">
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
              eyebrow="Projeto Acadêmico"
              title="TCC Documentado"
              description="Projeto de conclusão de curso com poster e artigo científico disponíveis."
              iconName="heart"
              delay={0.5}
            />
          </div>
        </Container>
      </PlusGridItem>
    </PlusGridRow>
  )
}

function HowItWorksSection() {
  return (
    <PlusGridRow className="relative">
      <PlusGridItem className="py-20 sm:py-24">
        <div className="relative mx-2 overflow-hidden rounded-4xl border border-white/40 bg-white/60 py-32 sm:mx-4 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:border-white/60 hover:bg-white/70" id="how-it-works">
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 animate-[gradient-shift_15s_ease-in-out_infinite]" style={{
              background: 'linear-gradient(135deg, rgba(112, 88, 190, 0.1), rgba(225, 71, 117, 0.1), rgba(31, 140, 168, 0.1))',
              backgroundSize: '200% 200%'
            }} />
          </div>

          <Container className="relative z-10">
            <Subheading>Como Funciona</Subheading>
            <Heading as="h3" className="mt-2 max-w-3xl">
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
              <div className="group relative overflow-hidden rounded-3xl border border-white/50 bg-white/40 p-8 text-center shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/60 hover:shadow-xl">
                <div className="mb-6 flex justify-center transition-transform group-hover:scale-110 duration-500">
                  <div className="rounded-2xl bg-rose-50 p-4 ring-1 ring-rose-100">
                    <BoltIcon className="h-10 w-10 text-rose-500" />
                  </div>
                </div>
                <h4 className="font-display text-xl font-bold text-gray-900">1. Instale</h4>
                <p className="mt-3 text-base leading-relaxed text-gray-600">
                  <code className="rounded bg-gray-100 px-2 py-1 font-mono text-sm text-gray-800">pip install a11y-lint</code> e configure suas credenciais Claude
                </p>
              </div>

              <div className="group relative overflow-hidden rounded-3xl border border-white/50 bg-white/40 p-8 text-center shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/60 hover:shadow-xl">
                <div className="mb-6 flex justify-center transition-transform group-hover:scale-110 duration-500">
                  <div className="rounded-2xl bg-cyan-50 p-4 ring-1 ring-cyan-100">
                    <MagnifyingGlassIcon className="h-10 w-10 text-cyan-600" />
                  </div>
                </div>
                <h4 className="font-display text-xl font-bold text-gray-900">2. Analise</h4>
                <p className="mt-3 text-base leading-relaxed text-gray-600">
                  Execute <code className="rounded bg-gray-100 px-2 py-1 font-mono text-sm text-gray-800">a11y-lint scan ./src</code> e aguarde a análise
                </p>
              </div>

              <div className="group relative overflow-hidden rounded-3xl border border-white/50 bg-white/40 p-8 text-center shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/60 hover:shadow-xl">
                <div className="mb-6 flex justify-center transition-transform group-hover:scale-110 duration-500">
                  <div className="rounded-2xl bg-teal-50 p-4 ring-1 ring-teal-100">
                    <CheckCircleIcon className="h-10 w-10 text-teal-600" />
                  </div>
                </div>
                <h4 className="font-display text-xl font-bold text-gray-900">3. Corrija</h4>
                <p className="mt-3 text-base leading-relaxed text-gray-600">
                  Use os prompts de IA gerados para correções instantâneas
                </p>
              </div>
            </div>
          </Container>
        </div>
      </PlusGridItem>
    </PlusGridRow>
  )
}

function ScreenshotsSection() {
  return (
    <PlusGridRow className="relative">
      <PlusGridItem className="py-20 sm:py-24">
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
      </PlusGridItem>
    </PlusGridRow>
  )
}

function DemoSection() {
  return (
    <PlusGridRow className="relative">
      <PlusGridItem className="py-20 sm:py-24">
        <Container id="demo">
          {/* Glassmorphic container for Demo */}
          <div className="relative overflow-hidden rounded-4xl border border-white/40 bg-white/60 p-8 sm:p-12 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:border-white/60 hover:bg-white/70 hover:shadow-[0_20px_80px_-20px_rgba(31,140,168,0.3)]">
            {/* Animated gradient background */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 animate-[gradient-shift_15s_ease-in-out_infinite]" style={{
                background: 'linear-gradient(135deg, rgba(31, 140, 168, 0.15), rgba(38, 157, 105, 0.15), rgba(112, 88, 190, 0.15))',
                backgroundSize: '200% 200%'
              }} />
            </div>

            {/* Subtle glow effects */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full opacity-30 blur-3xl" style={{ background: 'radial-gradient(circle, rgba(31, 140, 168, 0.4), transparent)' }} />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full opacity-30 blur-3xl" style={{ background: 'radial-gradient(circle, rgba(38, 157, 105, 0.4), transparent)' }} />
            
            {/* Content */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200/50 bg-cyan-50/80 px-4 py-1.5 backdrop-blur-sm mb-6">
                <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-500" />
                <Subheading className="!mb-0 !text-cyan-700">Demonstração Interativa</Subheading>
              </div>

              <Heading as="h3" className="max-w-3xl">
                Veja o a11y-lint em{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #1F8CA8, #269D69)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                  ação
                </span>
              </Heading>

              <div className="mt-12 space-y-8">
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
            </div>
          </div>

          <div className="relative mt-24">
            {/* Glassmorphic container with gradient border */}
            <div className="relative overflow-hidden rounded-4xl border border-white/40 bg-white/60 p-12 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:border-white/60 hover:bg-white/70 hover:shadow-[0_20px_80px_-20px_rgba(112,88,190,0.3)]">
              {/* Animated gradient background */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 animate-[gradient-shift_10s_ease-in-out_infinite]" style={{
                  background: 'linear-gradient(135deg, rgba(112, 88, 190, 0.15), rgba(225, 71, 117, 0.15), rgba(31, 140, 168, 0.15), rgba(38, 157, 105, 0.15))',
                  backgroundSize: '200% 200%'
                }} />
              </div>

              {/* Subtle glow effects */}
              <div className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 rounded-full opacity-30 blur-3xl" style={{ background: 'radial-gradient(circle, rgba(112, 88, 190, 0.4), transparent)' }} />
              <div className="pointer-events-none absolute -bottom-20 -right-20 h-60 w-60 rounded-full opacity-30 blur-3xl" style={{ background: 'radial-gradient(circle, rgba(225, 71, 117, 0.4), transparent)' }} />

              {/* Content */}
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-purple-200/50 bg-purple-50/80 px-4 py-1.5 backdrop-blur-sm">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-purple-500" />
                  <Subheading className="!mb-0 !text-purple-700">Relatório Gerado</Subheading>
                </div>
                
                <Heading as="h3" className="mt-6 max-w-3xl">
                  <span style={{
                    background: 'linear-gradient(135deg, #7058BE, #E14775, #1F8CA8)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}>
                    Resultados detalhados e acionáveis
                  </span>
                </Heading>
                
                <p className="mt-4 max-w-2xl text-base/7 font-medium" style={{ color: '#211F22', opacity: 0.7 }}>
                  Relatórios completos com citações WCAG verificáveis, localização exata dos problemas e prompts otimizados para correção instantânea com IA.
                </p>

                <div className="mt-12">
                  <SampleReport />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </PlusGridItem>
    </PlusGridRow>
  )
}

function MetricsSection() {
  return (
    <PlusGridRow className="relative">
      <PlusGridItem className="py-20 sm:py-24">
        <Container>
          <Subheading>Resultados Comprovados</Subheading>
          <Heading as="h3" className="mt-2 max-w-3xl">
            Performance superior às ferramentas tradicionais
          </Heading>
          <div className="mt-16">
            <MetricsCards />
          </div>
        </Container>
      </PlusGridItem>
    </PlusGridRow>
  )
}

function ArchitectureSection() {
  return (
    <PlusGridRow className="relative">
      <PlusGridItem className="py-20 sm:py-24">
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
      </PlusGridItem>
    </PlusGridRow>
  )
}

function AcademicSection() {
  return (
    <PlusGridRow className="relative">
      <PlusGridItem className="py-20 sm:py-24">
        <Container>
          <Subheading>Acadêmico</Subheading>
          <Heading as="h3" className="mt-2 max-w-3xl">
            Documentação do Projeto
          </Heading>
          <p className="mt-6 max-w-3xl text-lg/8 text-gray-600">
            Acesse os materiais acadêmicos desenvolvidos durante a pesquisa e elaboração deste Trabalho de Conclusão de Curso.
          </p>
          
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="group relative overflow-hidden rounded-3xl border border-white/60 bg-white/40 p-8 shadow-lg backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-white/70 hover:bg-white/60 hover:shadow-2xl">
              {/* Gradient glow effect */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30" style={{ background: 'radial-gradient(circle, rgba(112, 88, 190, 0.6), transparent)' }} />
              
              <div className="relative z-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/60 shadow-sm ring-1 ring-[#7058BE]/20 backdrop-blur-sm transition-all group-hover:scale-110 group-hover:shadow-lg" style={{ boxShadow: '0 0 20px rgba(112, 88, 190, 0.15)' }}>
                  <PresentationChartBarIcon className="h-6 w-6 text-[#7058BE]" />
                </div>
                <h4 className="mt-6 text-xl font-bold text-gray-900 transition-colors group-hover:text-[#7058BE]">Poster do Projeto</h4>
                <p className="mt-2 leading-relaxed text-gray-600">
                  Visualização resumida da proposta, metodologia e resultados alcançados pelo a11y-lint.
                </p>
                <div className="mt-6">
                  <Button href="/documents/poster.pdf" target="_blank" variant="outline" className="w-full sm:w-auto gap-2 group-hover:border-[#7058BE]/30 group-hover:bg-[#7058BE]/5">
                    Visualizar Poster <span aria-hidden="true">&rarr;</span>
                  </Button>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl border border-white/60 bg-white/40 p-8 shadow-lg backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-white/70 hover:bg-white/60 hover:shadow-2xl">
              {/* Gradient glow effect */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30" style={{ background: 'radial-gradient(circle, rgba(225, 71, 117, 0.6), transparent)' }} />
              
              <div className="relative z-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/60 shadow-sm ring-1 ring-[#E14775]/20 backdrop-blur-sm transition-all group-hover:scale-110 group-hover:shadow-lg" style={{ boxShadow: '0 0 20px rgba(225, 71, 117, 0.15)' }}>
                  <DocumentTextIcon className="h-6 w-6 text-[#E14775]" />
                </div>
                <h4 className="mt-6 text-xl font-bold text-gray-900 transition-colors group-hover:text-[#E14775]">Artigo Completo</h4>
                <p className="mt-2 leading-relaxed text-gray-600">
                  Texto integral com fundamentação teórica, detalhes da implementação e análise de resultados.
                </p>
                <div className="mt-6">
                  <Button href="/documents/article.pdf" target="_blank" variant="outline" className="w-full sm:w-auto gap-2 group-hover:border-[#E14775]/30 group-hover:bg-[#E14775]/5">
                    Ler Artigo <span aria-hidden="true">&rarr;</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </PlusGridItem>
    </PlusGridRow>
  )
}

function CTASection() {
  return (
    <PlusGridRow className="relative">
      <PlusGridItem className="py-20 sm:py-24">
        <div className="relative mx-2 overflow-hidden rounded-4xl py-32 sm:mx-4 text-center" 
             style={{ background: 'linear-gradient(135deg, var(--color-dark), var(--color-purple), var(--color-dark))' }}>
          
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 animate-[gradient-shift_8s_ease-in-out_infinite]" style={{
              background: 'linear-gradient(90deg, var(--color-rose), var(--color-coral), var(--color-cyan), var(--color-rose))',
              backgroundSize: '200% 200%'
            }} />
          </div>

          {/* Morphing blobs */}
          <MorphingBlob
            className="top-0 right-0 h-96 w-96 opacity-40 mix-blend-screen"
            color="var(--color-purple)"
            delay={0}
          />
          <MorphingBlob
            className="bottom-0 left-0 h-80 w-80 opacity-40 mix-blend-screen"
            color="var(--color-rose)"
            delay={0.5}
          />

          <Container className="relative z-10">
            {/* Glass container for content */}
            <div className="relative mx-auto max-w-5xl overflow-hidden rounded-4xl border border-white/10 bg-white/5 px-8 py-16 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:bg-white/10 sm:px-12 sm:py-20">
              {/* Inner glow effects */}
              <div className="pointer-events-none absolute -left-20 top-1/2 h-60 w-60 -translate-y-1/2 rounded-full opacity-20 blur-3xl" style={{ background: 'radial-gradient(circle, rgba(112, 88, 190, 0.6), transparent)' }} />
              <div className="pointer-events-none absolute -right-20 top-1/2 h-60 w-60 -translate-y-1/2 rounded-full opacity-20 blur-3xl" style={{ background: 'radial-gradient(circle, rgba(225, 71, 117, 0.6), transparent)' }} />
              
              <div className="relative z-10">
                <Heading as="h2" dark className="mx-auto max-w-3xl !text-5xl sm:!text-6xl md:!text-7xl">
                  Pronto para melhorar a{' '}
                  <span className="block mt-2" style={{
                    background: 'linear-gradient(135deg, var(--color-amber), var(--color-teal))',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}>
                    acessibilidade?
                  </span>
                </Heading>
                
                <p className="mx-auto mt-8 max-w-2xl text-xl text-white/90 font-medium">
                  Projeto de Trabalho de Conclusão de Curso.
                  <br />
                  Confira o repositório no GitHub para mais detalhes!
                </p>

                <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
                  <Button
                    href="https://github.com/MelloBirkan"
                    className="cursor-fancy group relative h-14 min-w-[200px] overflow-hidden !rounded-full !bg-cream !text-dark !text-lg !font-bold shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
                  >
                    <span className="relative z-10 group-hover:opacity-0 transition-opacity duration-300">Ver no GitHub</span>
                    <span className="absolute inset-0 z-20 flex items-center justify-center text-cream opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      Ver no GitHub
                    </span>
                    <div className="absolute inset-0 translate-y-full transition-transform duration-300 group-hover:translate-y-0" 
                         style={{ background: 'linear-gradient(135deg, var(--color-purple), var(--color-rose))' }} 
                    />
                  </Button>
                  
                  <Button
                    href="#demo"
                    variant="secondary"
                    className="cursor-fancy h-14 min-w-[200px] !rounded-full border border-white/30 !bg-white/10 !text-lg !text-white backdrop-blur-md shadow-lg hover:!bg-white/20 hover:border-white/40"
                  >
                    Explorar Demo
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </PlusGridItem>
    </PlusGridRow>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden text-gray-950 bg-[#FAF4F3]">
      <ScrollProgress />
      <Hero />
      <main>
        <PlusGrid>
          <ProblemSection />
          <BentoSection />
          <HowItWorksSection />
          <ScreenshotsSection />
          <DemoSection />
          <MetricsSection />
          <ArchitectureSection />
          <AcademicSection />
          <CTASection />
        </PlusGrid>
      </main>
      <Footer />
    </div>
  )
}
