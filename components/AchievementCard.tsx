import React, { useState } from 'react'
import { LucideIcon, Eye } from 'lucide-react'
import ImageDialog from './ImageDialog'

interface AchievementCardProps {
    icon: LucideIcon
    title: string
    description: string
    image: string
    isTouch: boolean
}

const AchievementCard: React.FC<AchievementCardProps> = ({ icon: Icon, title, description, image, isTouch }) => {
    const [showImage, setShowImage] = useState(false)

    return (
        <>
            <div
                className="group relative overflow-hidden rounded-xl backdrop-blur-md bg-white/30 dark:bg-black/30 border border-white/20 dark:border-gray-800/20 shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-[1.02] cursor-pointer p-6"
                onClick={() => setShowImage(true)}
                role="button"
                tabIndex={0}
                aria-label={`View ${title}`}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/20 dark:from-gray-900/5 dark:to-gray-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                    <div className="flex items-center mb-4">
                        <div className="p-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 group-hover:from-blue-500 group-hover:to-rose-500 transition-all duration-300">
                            <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="ml-3 text-xl font-medium text-gray-800 dark:text-white">{title}</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">{description}</p>
                </div>
                {image && (
                    <div
                        className={`absolute top-2 right-2 p-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 group-hover:from-blue-500 group-hover:to-rose-500 text-white 
            ${isTouch ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} 
            transition-all duration-300`}
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
            />
        </>
    )
}

export default AchievementCard