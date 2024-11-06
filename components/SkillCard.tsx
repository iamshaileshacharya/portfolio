import React from 'react'

interface SkillCardProps {
    name: string
    proficiency: number
    index: number
}

const SkillCard: React.FC<SkillCardProps> = ({ name, proficiency, index }) => {
    return (
        <div
            className="group p-3 bg-white/10 dark:bg-black/30 backdrop-blur-md rounded-xl border border-white/20 dark:border-gray-800/20 shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-[1.02]"
            style={{
                animation: `fadeIn 0.6s ease-out ${index * 0.1}s backwards`
            }}
        >
            <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-sm text-gray-800 dark:text-white">{name}</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">{proficiency}%</span>
            </div>
            <div className="w-full bg-gray-200/30 dark:bg-gray-700/30 rounded-full h-1 overflow-hidden">
                <div
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-1 rounded-full transition-all duration-300 ease-in-out group-hover:from-rose-400 group-hover:to-blue-500 group-hover:scale-x-105 origin-left"
                    style={{
                        width: `${proficiency}%`,
                        animation: `slideRight 1.5s ease-out ${index * 0.1}s`
                    }}
                ></div>
            </div>
        </div>
    )
}

export default SkillCard