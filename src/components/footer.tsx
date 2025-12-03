import { PlusGrid, PlusGridItem, PlusGridRow } from '@/components/plus-grid'
import { Container } from './container'
import { Gradient } from './gradient'
import { Link } from './link'
import { Logo } from './logo'

function CallToAction() {
  return null
}

function SitemapHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="text-sm/6 font-medium text-gray-950/50">{children}</h3>
}

function SitemapLinks({ children }: { children: React.ReactNode }) {
  return <ul className="mt-6 space-y-4 text-sm/6">{children}</ul>
}

function SitemapLink(props: React.ComponentPropsWithoutRef<typeof Link>) {
  return (
    <li>
      <Link
        {...props}
        className="font-medium text-gray-950 data-hover:text-gray-950/75"
      />
    </li>
  )
}

function Sitemap() {
  return (
    <>
      <div>
        <SitemapHeading>Produto</SitemapHeading>
        <SitemapLinks>
          <SitemapLink href="#features">Recursos</SitemapLink>
          <SitemapLink href="#how-it-works">Como Funciona</SitemapLink>
          <SitemapLink href="#demo">Demo</SitemapLink>
        </SitemapLinks>
      </div>
      <div>
        <SitemapHeading>Projeto</SitemapHeading>
        <SitemapLinks>
          <SitemapLink href="https://github.com/MelloBirkan">GitHub</SitemapLink>
          <SitemapLink href="/documents/poster.pdf">Poster do Projeto</SitemapLink>
          <SitemapLink href="/documents/article.pdf">Artigo Completo</SitemapLink>
        </SitemapLinks>
      </div>
      <div>
        <SitemapHeading>TCC</SitemapHeading>
        <SitemapLinks>
          <SitemapLink href="#academic">Artigo Científico</SitemapLink>
          <SitemapLink href="#architecture">Sobre o Projeto</SitemapLink>
        </SitemapLinks>
      </div>
      <div>
        <SitemapHeading>Contato</SitemapHeading>
        <SitemapLinks>
          <SitemapLink href="https://github.com/MelloBirkan">GitHub Profile</SitemapLink>
        </SitemapLinks>
      </div>
    </>
  )
}

function SocialIconGitHub(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  )
}

function SocialLinks() {
  return (
    <>
      <Link
        href="https://github.com/MelloBirkan"
        target="_blank"
        aria-label="Visite meu GitHub"
        className="text-gray-950 data-hover:text-gray-950/75"
      >
        <SocialIconGitHub className="size-4" />
      </Link>
    </>
  )
}

function Copyright() {
  return (
    <div className="text-sm/6 text-gray-950">
      &copy; {new Date().getFullYear()} a11y-lint • Projeto de TCC • Universidade Presbiteriana Mackenzie
    </div>
  )
}

export function Footer() {
  return (
    <footer>
      <Gradient className="relative">
        <div className="absolute inset-2 rounded-4xl bg-white/80" />
        <Container>
          <CallToAction />
          <PlusGrid className="pb-16">
            <PlusGridRow>
              <div className="grid grid-cols-2 gap-y-10 pb-6 lg:grid-cols-6 lg:gap-8">
                <div className="col-span-2 flex">
                  <PlusGridItem className="pt-6 lg:pb-6">
                    <Logo className="h-9" />
                  </PlusGridItem>
                </div>
                <div className="col-span-2 grid grid-cols-2 gap-x-8 gap-y-12 lg:col-span-4 lg:grid-cols-subgrid lg:pt-6">
                  <Sitemap />
                </div>
              </div>
            </PlusGridRow>
            <PlusGridRow className="flex flex-col justify-between sm:flex-row">
              <div>
                <PlusGridItem className="py-3">
                  <Copyright />
                </PlusGridItem>
              </div>
              <div className="flex">
                <PlusGridItem className="flex items-center gap-8 py-3">
                  <SocialLinks />
                </PlusGridItem>
              </div>
            </PlusGridRow>
          </PlusGrid>
        </Container>
      </Gradient>
    </footer>
  )
}
