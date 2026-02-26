import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import './additional-styles.css'

import AppShell from './components/layout/AppShell'

import Script from 'next/script'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // SSR default theme (prevents hydration mismatch)
  const cookieTheme = 'light'

  return (
    <html
      lang="en"
      data-theme={cookieTheme}
      style={{ colorScheme: cookieTheme }}
      suppressHydrationWarning
    >
      <head>
        {/* Early theme setup to avoid flash */}
        <Script id="early-theme" strategy="beforeInteractive">
          {`
            (function () {
              try {
                var stored = localStorage.getItem('theme');
                var systemDark =
                  window.matchMedia &&
                  window.matchMedia('(prefers-color-scheme: dark)').matches;

                var theme = stored || (systemDark ? 'dark' : 'light');
                var de = document.documentElement;

                de.setAttribute('data-theme', theme);
                de.style.colorScheme = theme;

                document.cookie =
                  'theme=' + theme +
                  '; Path=/; Max-Age=31536000; SameSite=Lax';
              } catch (e) {}
            })();
          `}
        </Script>
      </head>

      <body className={`${inter.className} ${montserrat.variable}`}>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  )
}
