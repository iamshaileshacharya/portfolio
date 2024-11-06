import React from 'react'
import { Briefcase, Code, Folder, GraduationCap, Moon, Sun, Trophy, User } from 'lucide-react'
import Link from 'next/link'
import useSmoothScroll from '@/hooks/useSmoothScroll'

interface NavigationProps {
    activeSection: string
    toggleDarkMode: () => void
    isDarkMode: boolean
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, toggleDarkMode, isDarkMode }) => {
    const scrollTo = useSmoothScroll();

    const navLinks = [
        { name: 'About', icon: User },
        { name: 'Experience', icon: Briefcase },
        { name: 'Education', icon: GraduationCap },
        { name: 'Skills', icon: Code },
        { name: 'Projects', icon: Folder },
        { name: 'Achievements', icon: Trophy }
    ]

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault()
        scrollTo(href.slice(1))  // remove the '#' from the href
    }

    return (
        <nav className="fixed left-0 right-0 top-2 transition-all duration-300 z-50 px-1 sm:px-2">
            <div className="container mx-auto max-w-6xl">
                <div className="bg-white/70 dark:bg-black/70 backdrop-blur-lg shadow-lg rounded-lg flex items-center justify-between px-2 py-2 sm:px-4 sm:py-2">
                    <ul className="flex items-center justify-between w-full space-x-1 sm:space-x-2 md:space-x-4">
                        {navLinks.map(({ name, icon: Icon }) => (
                            <li key={name} className="relative group">
                                <Link
                                    href={`#${name.toLowerCase()}`}
                                    onClick={(e) => handleClick(e, `#${name.toLowerCase()}`)}
                                    className={`text-sm md:text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 px-2 py-2 rounded-md flex items-center justify-center sm:justify-start ${activeSection === name.toLowerCase()
                                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent'
                                        : ''
                                        }`}
                                    aria-label={name}
                                >
                                    <Icon
                                        className={`w-5 h-5 sm:mr-2 ${activeSection === name.toLowerCase()
                                            ? 'fill-current text-blue-500'
                                            : 'text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white'
                                            }`}
                                        style={
                                            activeSection === name.toLowerCase()
                                                ? { filter: 'url(#blue-to-purple)' }
                                                : {}
                                        }
                                        aria-hidden="true"
                                    />
                                    <span className="hidden sm:inline">{name}</span>
                                </Link>
                                <span
                                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transform scale-x-0 transition-transform duration-300 ${activeSection === name.toLowerCase()
                                        ? 'scale-x-100'
                                        : 'group-hover:scale-x-100'
                                        }`}
                                    aria-hidden="true"
                                ></span>
                            </li>
                        ))}
                        <li>
                            <button
                                onClick={toggleDarkMode}
                                className="p-2 rounded-full hover:bg-gray-200/50 dark:hover:bg-gray-800/50 transition-colors duration-300 flex items-center justify-center"
                                aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                            >
                                {isDarkMode ? (
                                    <Sun className="w-5 h-5 text-gray-600 dark:text-gray-300" aria-hidden="true" />
                                ) : (
                                    <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" aria-hidden="true" />
                                )}
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navigation