'use client'

import type { ReactNode } from 'react'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

import Navigation from './Navigation'
import ScrollManager from './ScrollManager'
import FloatingContactActions from './FloatingContactActions'
import Footer from './Footer'
import ScrollProgress from '../animations/ScrollProgress'
import ParticlesBackground from '../animations/ParticlesBackground'
import VantaBackground from '../animations/VantaBackground'
import StemOverlay from '../animations/StemOverlay'

function isDostPath(pathname: string) {
  return pathname === '/dost' || pathname.startsWith('/dost/')
}

export default function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const hideGlobalChrome = isDostPath(pathname || '')

  useEffect(() => {
    const root = document.documentElement
    const body = document.body

    root.classList.toggle('dost-embed-mode', hideGlobalChrome)
    body.classList.toggle('dost-embed-mode', hideGlobalChrome)

    return () => {
      root.classList.remove('dost-embed-mode')
      body.classList.remove('dost-embed-mode')
    }
  }, [hideGlobalChrome])

  if (hideGlobalChrome) {
    return <main className="page page--dost">{children}</main>
  }

  return (
    <>
      <ScrollManager />
      <ScrollProgress />
      <VantaBackground />
      <ParticlesBackground />
      <StemOverlay />
      <div className="page-grid-overlay" aria-hidden="true" />

      <Navigation />

      <main className="page">{children}</main>
      <FloatingContactActions />
      <Footer />
    </>
  )
}
