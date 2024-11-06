import React, { useRef, useEffect } from 'react'
import Image from 'next/legacy/image'
import { X, Github } from 'lucide-react'

interface ImageDialogProps {
    isOpen: boolean
    onClose: () => void
    title: string
    image: string
    githubUrl?: string
}

const ImageDialog: React.FC<ImageDialogProps> = ({ isOpen, onClose, title, image, githubUrl }) => {
    const dialogRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dialogRef.current && !dialogRef.current.contains(event.target as Node)) {
                onClose()
            }
        }

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isOpen, onClose])

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div
                ref={dialogRef}
                className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-md rounded-lg max-w-3xl w-full overflow-hidden shadow-xl"
            >
                <div className="flex justify-between items-center p-4 border-b border-gray-200/30 dark:border-gray-700/30">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
                    <button
                        onClick={onClose}
                        className="p-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-500 hover:to-rose-500 transition-all duration-300"
                        aria-label="Close dialog"
                    >
                        <X size={24} className="text-white" />
                    </button>
                </div>
                <div className="relative w-full" style={{ paddingTop: '56.25%' }}> {/* 16:9 aspect ratio */}
                    <div className="absolute inset-0 p-2 sm:p-4 md:p-6 lg:p-8">
                        <Image
                            src={image}
                            alt={title}
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </div>
                {githubUrl && (
                    <div className="p-4 flex justify-end">
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-4 py-2 rounded-lg text-white 
                            bg-gradient-to-r from-blue-500 to-purple-600 
                            hover:from-blue-500 hover:to-rose-500 
                            transition-all duration-300"
                        >
                            <Github size={20} className="mr-2" />
                            Visit GitHub
                        </a>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ImageDialog