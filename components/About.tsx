import React, { useState, useEffect, useRef } from 'react'
import Image from "next/image"
import { FileText, Github, Linkedin, Mail } from 'lucide-react'
import ResumeModal from './ResumeModal'

interface AboutProps {
    isVisible: boolean;
    isDarkMode: boolean;
}

const About: React.FC<AboutProps> = ({ isVisible, isDarkMode }) => {
    const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const socialLinks = [
        { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/shailesh-acharya' },
        { icon: Github, label: 'GitHub', href: 'https://github.com/iamshaileshacharya' },
        { icon: Mail, label: 'Email', href: 'mailto:me@acharyashailesh.com.np' },
    ];

    useEffect(() => {
        if (containerRef.current && isVisible) {
            containerRef.current.classList.add('translate-y-0', 'opacity-100');
            containerRef.current.classList.remove('translate-y-10', 'opacity-0');
        } else if (containerRef.current) {
            containerRef.current.classList.add('translate-y-10', 'opacity-0');
            containerRef.current.classList.remove('translate-y-0', 'opacity-100');
        }
    }, [isVisible]);

    return (
        <section id="about" className="pt-40 sm:pt-56 pb-16 sm:pb-20 px-4">
            <div
                ref={containerRef}
                className="container mx-auto max-w-4xl transition-all duration-1000 transform"
            >
                <div className="flex flex-col sm:flex-row items-center mb-8">
                    <div className="w-full sm:w-1/4 mb-4 sm:mb-0 sm:mr-4">
                        <div className="relative group mx-auto sm:mx-0" style={{ width: 'fit-content' }}>
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-75 transition duration-300 group-hover:opacity-100 group-hover:from-blue-500 group-hover:to-rose-500"></div>
                            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden">
                                <div className="absolute inset-0.5 bg-white dark:bg-gray-900 rounded-full"></div>
                                <div className="absolute inset-2 overflow-hidden rounded-full">
                                    <Image
                                        src="/profile.jpg"
                                        alt="Profile picture"
                                        width={112}
                                        height={112}
                                        className="rounded-full object-cover"
                                        priority
                                        quality={85}
                                        sizes="(max-width: 640px) 96px, 112px"
                                    />
                                </div>
                            </div>
                            <div className="absolute inset-0 rounded-full shadow-lg shadow-blue-500/20 dark:shadow-purple-600/20 group-hover:shadow-rose-500/20 pointer-events-none transition duration-300"></div>
                        </div>
                    </div>
                    <div className="w-full sm:w-3/4 text-center sm:text-left">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">Shailesh Acharya</h1>
                        <div className="flex flex-wrap justify-center sm:justify-start items-center space-x-2 mb-4">
                            <span className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">Coding Ideas into Reality,</span>
                            <span className="bg-gradient-to-r from-blue-500 to-purple-600 px-3 py-1 rounded-full text-white text-sm sm:text-base transition-all duration-300 transform hover:scale-105 hover:from-rose-400 hover:to-blue-500">Byte by Byte</span>
                        </div>
                    </div>
                </div>

                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto sm:mx-0 text-center sm:text-left">
                    Currently pursuing my Master&apos;s in Computer Science, I&apos;m an enthusiastic programmer who loves to explore technology&apos;s endless possibilities. From building websites to understanding machine learning, I embrace each learning opportunity with genuine curiosity. My journey spans across various domains, web development, cloud computing, and digital marketing \u2013 where I&apos;m constantly learning and growing.
                </p>

                <div className="flex flex-wrap justify-center sm:justify-start items-center gap-3 sm:gap-4">
                    {socialLinks.map(({ icon: Icon, label, href }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 px-3 py-2 rounded-full
                                bg-white/50 dark:bg-gray-800/30 backdrop-blur-sm
                                hover:bg-gradient-to-r hover:from-rose-400 hover:to-blue-500
                                border border-white/80 dark:border-gray-700/20
                                transition-all duration-300 transform hover:scale-105
                                text-gray-700 hover:text-white dark:text-gray-300 text-sm"
                        >
                            <Icon size={16} className="sm:w-5 sm:h-5" />
                            <span>{label}</span>
                        </a>
                    ))}
                    <button
                        onClick={() => setIsResumeModalOpen(true)}
                        className="flex items-center space-x-2 px-3 py-2 rounded-full
                            bg-white/50 dark:bg-gray-800/30 backdrop-blur-sm
                            hover:bg-gradient-to-r hover:from-rose-400 hover:to-blue-500
                            border border-white/80 dark:border-gray-700/20
                            transition-all duration-300 transform hover:scale-105
                            text-gray-700 hover:text-white dark:text-gray-300 text-sm"
                    >
                        <FileText size={16} className="sm:w-5 sm:h-5" />
                        <span>Resume</span>
                    </button>
                </div>
            </div>
            <ResumeModal
                isOpen={isResumeModalOpen}
                onClose={() => setIsResumeModalOpen(false)}
                isDarkMode={isDarkMode}
            />
        </section>
    )
}

export default About