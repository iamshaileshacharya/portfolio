import React, { useState } from 'react'
import { Eye } from 'lucide-react'
import ImageDialog from './ImageDialog'

interface ProjectCardProps {
    title: string
    description: string
    tags: string[]
    image: string
    isTouch: boolean
    githubUrl: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tags, image, isTouch, githubUrl }) => {
    const [showImage, setShowImage] = useState(false)

    return (
        <>
            <div
                className="group relative overflow-hidden rounded-xl backdrop-blur-md bg-white/10 dark:bg-black/30 border border-white/20 dark:border-gray-800/20 shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-[1.02] cursor-pointer p-4 sm:p-6"
                onClick={() => setShowImage(true)}
                role="button"
                tabIndex={0}
                aria-label={`View ${title}`}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/20 dark:from-gray-900/5 dark:to-gray-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                    <h3 className="text-lg sm:text-xl font-medium mb-3 text-gray-800 dark:text-white">{title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4">{description}</p>
                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag, index) => (
                            <span
                                key={index}
                                className="px-2 sm:px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-xs sm:text-sm transition-all duration-300 transform hover:from-rose-400 hover:to-blue-500"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
                {image && (
                    <div
                        className={`absolute top-2 right-2 p-2 rounded-full bg-blue-500/50 text-white 
            ${isTouch ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} 
            transition-opacity duration-200`}
                    >
                        <Eye size={18} />
                    </div>
                )}
                {isTouch && (
                    <span className="absolute bottom-2 right-2 text-xs text-gray-400">
                        Tap to view
                    </span>
                )}
            </div>
            <ImageDialog
                isOpen={showImage}
                onClose={() => setShowImage(false)}
                title={title}
                image={image}
                githubUrl={githubUrl}
            />
        </>
    )
}

export default ProjectCard