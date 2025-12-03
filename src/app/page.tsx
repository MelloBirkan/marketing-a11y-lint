import { ArchitectureDiagram } from '@/components/architecture-diagram'
import { Button } from '@/components/button'
import { CodeExample } from '@/components/code-example'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { PlusGrid, PlusGridItem, PlusGridRow } from '@/components/plus-grid'
import { MetricsCards } from '@/components/metrics-cards'
import { Navbar } from '@/components/navbar'
import { TerminalDemo } from '@/components/terminal-demo'
import { Heading, Subheading } from '@/components/text'
import { MorphingBlob } from '@/components/morphing-blob'
import { AnimatedGradientText } from '@/components/animated-gradient-text'
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
            <h1 className="font-display text-4xl/[0.95] font-bold tracking-tight sm:text-5xl/[0.9] md:text-6xl/[0.85] lg:text-7xl/[0.85]" style={{ color: '#211F22' }}>
              Análise de{' '}
              <AnimatedGradientText>
                acessibilidade
              </AnimatedGradientText>{' '}
              com IA multi-agente
            </h1>
            <p className="mt-8 max-w-2xl text-xl/8 font-medium sm:text-2xl/9" style={{ color: '#211F22', opacity: 0.85 }}>
              Detecte problemas de acessibilidade em{' '}
              <span className="font-bold" style={{ color: '#7058BE' }}>Web, React e SwiftUI</span>.
              Validação semântica inteligente com citações WCAG verificáveis.
            </p>
            <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
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
      <PlusGridItem className="py-16 sm:py-24">
        <Container>
          <Subheading>Contexto do Problema</Subheading>
          <Heading as="h3" className="mt-2 max-w-3xl">
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
            Ferramentas tradicionais detectam apenas <strong style={{ color: '#E14775' }}>31,3%</strong> dos problemas em aplicações mobile. Desenvolvedores precisam gerenciar múltiplas diretrizes (WCAG 2.2, Apple HIG, WAI-ARIA) sem ferramentas que validem adequadamente o contexto semântico do código.
          </p>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <StatCard
              value={2.5}
              suffix="B+"
              description="Pessoas dependem de tecnologias assistivas"
              color="#7058BE"
              delay={0}
            />
            <StatCard
              value={31.3}
              suffix="%"
              description="Cobertura de ferramentas tradicionais"
              color="#E14775"
              delay={0.2}
            />
            <StatCard
              value={97}
              suffix="%"
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


function HowItWorksSection() {
  return (
    <PlusGridRow className="relative">
      <PlusGridItem className="py-16 sm:py-24">
        <Container id="how-it-works">
          <Subheading>Como Funciona</Subheading>
          <Heading as="h4" className="mt-2 max-w-3xl">
            <span style={{
              background: 'linear-gradient(135deg, #E14775, #E16132)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Prévia do fluxo:
            </span>
            {' '}Análise de acessibilidade em 3 passos simples
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
                Instruções de instalação e configuração da ferramenta.
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
      </PlusGridItem>
    </PlusGridRow>
  )
}

function ScreenshotsSection() {
  return (
    <PlusGridRow className="relative">
      <PlusGridItem className="py-16 sm:py-24">
        <Container>
          <Subheading>Interface Intuitiva</Subheading>
          <Heading as="h4" className="mt-2 max-w-3xl">
            Tela inicial com temas{' '}
            <span style={{
              background: 'linear-gradient(135deg, #7058BE, #E14775)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              claro e escuro
            </span>
          </Heading>
          <p className="mt-6 max-w-3xl text-xl/8" style={{ color: '#211F22', opacity: 0.75 }}>
            Menu principal disponível em modo claro e escuro. Alterne entre os temas para adaptar a interface ao seu ambiente de trabalho e garantir conforto visual.
          </p>

          {/* Dark/Light Mode Section - Moved to top */}
          <div className="mt-16">

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
              {/* Dark Mode Image */}
              <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 p-1 shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl">
                <div className="relative overflow-hidden rounded-3xl bg-gray-900">
                  <img
                    src="/screenshots/darkmode.png"
                    alt="Interface em Modo Escuro"
                    className="h-auto w-full max-h-[600px] object-contain object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute inset-x-0 bottom-0 translate-y-full p-6 transition-transform duration-500 group-hover:translate-y-0 lg:p-8">
                    <h4 className="mb-2 font-display text-xl font-bold text-white lg:text-2xl">
                      Modo Escuro
                    </h4>
                    <p className="mb-3 text-sm text-gray-200 lg:text-base">
                      Menu principal com tema dark, ideal para trabalho noturno e redução de fadiga visual.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md ring-1 ring-white/10 lg:text-sm">
                        Dark Mode
                      </span>
                      <span className="rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md ring-1 ring-white/10 lg:text-sm">
                        Conforto Visual
                      </span>
                    </div>
                  </div>
                  <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/30 text-sm font-bold text-gray-900 backdrop-blur-md shadow-lg ring-1 ring-white/20 transition-all group-hover:scale-110 lg:h-12 lg:w-12 lg:text-base">
                    🌙
                  </div>
                </div>
              </div>

              {/* Light Mode Image */}
              <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 p-1 shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl">
                <div className="relative overflow-hidden rounded-3xl bg-gray-900">
                  <img
                    src="/screenshots/lightmode.png"
                    alt="Interface em Modo Claro"
                    className="h-auto w-full max-h-[600px] object-contain object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute inset-x-0 bottom-0 translate-y-full p-6 transition-transform duration-500 group-hover:translate-y-0 lg:p-8">
                    <h4 className="mb-2 font-display text-xl font-bold text-white lg:text-2xl">
                      Modo Claro
                    </h4>
                    <p className="mb-3 text-sm text-gray-200 lg:text-base">
                      Menu principal com tema light, design limpo e acessível para ambientes bem iluminados.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md ring-1 ring-white/10 lg:text-sm">
                        Light Mode
                      </span>
                      <span className="rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md ring-1 ring-white/10 lg:text-sm">
                        Design Limpo
                      </span>
                    </div>
                  </div>
                  <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/30 text-sm font-bold text-gray-900 backdrop-blur-md shadow-lg ring-1 ring-white/20 transition-all group-hover:scale-110 lg:h-12 lg:w-12 lg:text-base">
                    ☀️
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Terminal Section */}
          <div className="mt-24">
            <div className="mb-8">
              <Subheading>Terminal Profissional</Subheading>
              <Heading as="h4" className="mt-2 max-w-3xl">
                Interface de linha de comando com{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #1F8CA8, #269D69)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                  experiência moderna
                </span>
              </Heading>
              <p className="mt-4 max-w-2xl text-lg/7" style={{ color: '#211F22', opacity: 0.75 }}>
                Navegação intuitiva e feedback visual em tempo real durante análises de acessibilidade.
              </p>
            </div>
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
      <PlusGridItem className="py-16 sm:py-24">
        <Container id="demo">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200/50 bg-cyan-50/80 px-4 py-1.5 backdrop-blur-sm mb-6">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-500" />
            <Subheading className="!mb-0 !text-cyan-700">Demonstração Interativa</Subheading>
          </div>

          <Heading as="h4" className="max-w-3xl">
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

          <p className="mt-6 max-w-2xl text-base/7" style={{ color: '#211F22', opacity: 0.75 }}>
            Explore os exemplos abaixo para entender como a ferramenta identifica problemas de acessibilidade.
            Cada card mostra o código com problema e, ao clicar em <strong>&quot;Corrigido&quot;</strong>, você visualiza a versão correta com as melhorias aplicadas.
          </p>

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
        </Container>
      </PlusGridItem>
    </PlusGridRow>
  )
}

function MetricsSection() {
  return (
    <PlusGridRow className="relative">
      <PlusGridItem className="py-16 sm:py-24">
        <Container>
          <Subheading>Resultados Parciais</Subheading>
          <Heading as="h4" className="mt-2 max-w-3xl">
            Métricas de{' '}
            <span style={{
              background: 'linear-gradient(135deg, #1F8CA8, #269D69)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              desempenho e eficiência
            </span>
          </Heading>
          <p className="mt-6 max-w-3xl text-lg/8" style={{ color: '#211F22', opacity: 0.75 }}>
            Testes parciais do MVP demonstraram essas métricas em projetos reais. No TCC2, serão realizados testes adicionais com métricas de validação de fato com especialistas em acessibilidade.
          </p>
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
      <PlusGridItem className="py-16 sm:py-24">
        <Container>
          <Subheading>Arquitetura</Subheading>
          <Heading as="h4" className="mt-2 max-w-3xl">
            Sistema Multi-Agente com{' '}
            <span style={{
              background: 'linear-gradient(135deg, #7058BE, #E14775)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              RAG
            </span>
          </Heading>
          <p className="mt-6 max-w-3xl text-lg/8 text-gray-600">
            Orquestrador vertical coordena agentes especializados que analisam código com citações WCAG e HIG verificáveis. Implementação do padrão ReAct (Reasoning + Acting) reduz alucinações de 14% para 6% em benchmarks internos.
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
      <PlusGridItem className="py-16 sm:py-24">
        <Container>
          <Subheading>Acadêmico</Subheading>
          <Heading as="h4" className="mt-2 max-w-3xl">
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
      <PlusGridItem className="py-16 sm:py-24">
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
                <Heading as="h3" dark className="mx-auto max-w-3xl !text-5xl sm:!text-6xl md:!text-7xl">
                  Pronto para melhorar a{' '}
                  <span className="block mt-2 text-white" style={{
                    textShadow: '0 0 30px rgba(255, 255, 255, 0.4), 0 0 60px rgba(255, 255, 255, 0.2)',
                    filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))'
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
          <ScreenshotsSection />
          <DemoSection />
          <HowItWorksSection />
          <ArchitectureSection />
          <MetricsSection />
          <AcademicSection />
          <CTASection />
        </PlusGrid>
      </main>
      <Footer />
    </div>
  )
}
