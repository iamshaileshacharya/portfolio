import React from 'react'

interface TimelineCardProps {
    year: string
    title: string
    subtitle: string
    description: string
}

const TimelineCard: React.FC<TimelineCardProps> = ({ year, title, subtitle, description }) => {
    return (
        <div className="flex items-start mb-8 group">
            <div className="flex flex-col items-center">
                <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 transition-transform duration-300 transform group-hover:scale-125 group-hover:from-rose-400 group-hover:to-blue-500"></div>
                <div className="h-full w-0.5 sm:w-1 bg-gradient-to-b from-blue-500 to-purple-600 transition-all duration-300 group-hover:from-rose-400 group-hover:to-blue-500"></div>
            </div>
            <div className="ml-3 sm:ml-4">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white">{title}</h3>
                <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{subtitle}</span>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">{description}</p>
                <span className="text-xs sm:text-sm text-gray-400">{year}</span>
            </div>
        </div>
    )
}

export default TimelineCard