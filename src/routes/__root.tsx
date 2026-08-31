import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp'
import { engineerInfo } from '@/data/engineeringData'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: `${engineerInfo.name} | ${engineerInfo.title} – تصميم معماري واستشارات هندسية عن بُعد`,
      },
      {
        name: 'description',
        content: `${engineerInfo.slogan} ${engineerInfo.heroTagline}`,
      },
      {
        name: 'keywords',
        content: 'مهندس معماري, يوسف صالح قايد, تصميم معماري, استشارات هندسية, إظهار معماري Lumion, مخططات تنفيذية, حصر كميات, تصميم داخلي, رندر 3D, اليمن, صنعاء, خدمات هندسية عن بعد',
      },
      {
        property: 'og:title',
        content: `${engineerInfo.name} – ${engineerInfo.title}`,
      },
      {
        property: 'og:description',
        content: engineerInfo.slogan,
      },
      {
        property: 'og:type',
        content: 'website',
      },
    ],
    links: [
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <HeadContent />
      </head>
      <body className="bg-slate-50 text-slate-900 min-h-screen flex flex-col font-sans selection:bg-amber-400/30 selection:text-slate-950">
        <Navbar />
        <main className="flex-1 pt-[72px]">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
        <Scripts />
      </body>
    </html>
  )
}
