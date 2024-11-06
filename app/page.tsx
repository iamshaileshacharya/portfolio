// app/page.tsx

'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Navigation from '@/components/Navigation'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Achievements from '@/components/Achievements'
import Footer from '@/components/Footer'
import useIsTouchDevice from '@/hooks/useIsTouchDevice'

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isSystemPreference, setIsSystemPreference] = useState(true)
  const [isVisible, setIsVisible] = useState(false)
  const [experienceProgress, setExperienceProgress] = useState(0)
  const [educationProgress, setEducationProgress] = useState(0)
  const [activeSection, setActiveSection] = useState('')

  const experienceRef = useRef<HTMLDivElement>(null)
  const educationRef = useRef<HTMLDivElement>(null)

  const isTouch = useIsTouchDevice()

  const updateTheme = useCallback((darkMode: boolean) => {
    setIsDarkMode(darkMode)
    document.documentElement.classList.toggle('dark', darkMode)
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [])

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)')

    if (savedTheme) {
      updateTheme(savedTheme === 'dark')
      setIsSystemPreference(false)
    } else {
      updateTheme(prefersDark.matches)
    }

    const mediaQueryListener = (e: MediaQueryListEvent) => {
      if (isSystemPreference) {
        updateTheme(e.matches)
      }
    }

    prefersDark.addListener(mediaQueryListener)

    return () => {
      prefersDark.removeListener(mediaQueryListener)
    }
  }, [updateTheme, isSystemPreference])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'education', 'skills', 'projects', 'achievements']
      let current = ''

      sections.forEach((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section
          }
        }
      })

      setActiveSection(current)

      if (experienceRef.current) {
        const rect = experienceRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight
        const visibleHeight = Math.min(windowHeight, rect.bottom) - Math.max(0, rect.top)
        const progress = (visibleHeight / rect.height) * 100
        setExperienceProgress(Math.min(100, Math.max(0, progress)))
      }

      if (educationRef.current) {
        const rect = educationRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight
        const visibleHeight = Math.min(windowHeight, rect.bottom) - Math.max(0, rect.top)
        const progress = (visibleHeight / rect.height) * 100
        setEducationProgress(Math.min(100, Math.max(0, progress)))
      }
    }

    setIsVisible(true)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleDarkMode = () => {
    setIsSystemPreference(false)
    updateTheme(!isDarkMode)
  }

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="dark:bg-black transition-colors duration-300">
        {/* Background gradient and noise */}
        <div className="fixed inset-0 bg-gradient-to-br from-blue-50/80 via-white to-purple-50/80
          dark:from-black dark:via-gray-900 dark:to-gray-800/20 -z-10"></div>

        {/* Floating orbs */}
        <div className="fixed top-1/4 left-1/4 w-64 h-64 bg-blue-400/20 dark:bg-blue-500/10 rounded-full blur-3xl -z-5"></div>
        <div className="fixed top-1/2 right-1/3 w-96 h-96 bg-purple-400/20 dark:bg-purple-500/10 rounded-full blur-3xl -z-5"></div>

        <Navigation activeSection={activeSection} toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        <About isDarkMode={isDarkMode} />
        <Experience experienceRef={experienceRef} experienceProgress={experienceProgress} />
        <Education educationRef={educationRef} educationProgress={educationProgress} />
        <Skills />
        <Projects isTouch={isTouch} />
        <Achievements isTouch={isTouch} />
        <Footer />
      </div>
    </div>
  )
}