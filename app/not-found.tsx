'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Head from 'next/head'

export default function NotFound() {
    const router = useRouter()
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX / window.innerWidth,
                y: e.clientY / window.innerHeight,
            })
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    const handleGoHome = () => {
        router.push('/')
    }

    const handleGoBack = () => {
        router.back()
    }

    return (
        <>
            <Head>
                <title>404 - Page Not Found | Your Site Name</title>
                <meta name="description" content="The page you are looking for might have been removed or is temporarily unavailable." />
                <meta name="robots" content="noindex, follow" />
            </Head>
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white relative overflow-hidden">
                {/* Enhanced background pattern */}
                <div
                    className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmZmZmMTAiPjwvcmVjdD4KPHBhdGggZD0iTTAgNUw1IDBaTTYgNEw0IDZaTS0xIDFMMSAtMVoiIHN0cm9rZT0iI2ZmZmZmZjIwIiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD4KPC9zdmc+')] opacity-30"
                    style={{
                        transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
                        transition: 'transform 0.1s ease-out'
                    }}
                ></div>

                {/* Main content */}
                <div className="relative z-10 p-8 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 max-w-lg w-full mx-4">
                    <div className="text-center">
                        <h1 className="text-8xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-rose-500">404</h1>
                        <p className="text-2xl mb-8 text-gray-300">Oops! Page not found.</p>
                        <p className="text-gray-400 mb-8">The page you are looking for might have been removed or is temporarily unavailable.</p>
                        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                            <button
                                onClick={handleGoHome}
                                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:from-blue-600 hover:to-purple-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                            >
                                Return Home
                            </button>
                            <button
                                onClick={handleGoBack}
                                className="px-6 py-3 bg-gray-700/50 text-white rounded-full hover:bg-gray-600/75 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
                            >
                                Go Back
                            </button>
                        </div>
                    </div>
                </div>

                {/* Enhanced decorative elements */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                    <div
                        className="w-[800px] h-[800px] bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
                        style={{
                            transform: `translate(${mousePosition.x * -100}px, ${mousePosition.y * -100}px)`,
                            transition: 'transform 0.3s ease-out'
                        }}
                    ></div>
                    <div
                        className="w-[800px] h-[800px] bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
                        style={{
                            transform: `translate(${mousePosition.x * 100}px, ${mousePosition.y * 100}px)`,
                            transition: 'transform 0.3s ease-out'
                        }}
                    ></div>
                </div>
            </div>
        </>
    )
}