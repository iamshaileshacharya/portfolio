import React from 'react'
import AchievementCard from './AchievementCard'
import { Megaphone, Shield, Code, Database } from 'lucide-react'

interface AchievementsProps {
    isTouch: boolean
}

const Achievements: React.FC<AchievementsProps> = ({ isTouch }) => {
    return (
        <section id="achievements" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-3xl font-medium mb-12 text-center text-gray-800 dark:text-white">
                    Featured Certifications
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <AchievementCard
                        icon={Megaphone}
                        title="Google Digital Garage"
                        description="Fundamentals of Digital Marketing"
                        image="/achievements/google_digital_marketing.png"
                        isTouch={isTouch}
                    />
                    <AchievementCard
                        icon={Shield}
                        title="Cyber Security"
                        description="CertiProf Professional Certificate"
                        image="/achievements/cyber_security.png"
                        isTouch={isTouch}
                    />
                    <AchievementCard
                        icon={Code}
                        title="Python Programming"
                        description="Coursera| University of Michigan"
                        image="/achievements/python.png"
                        isTouch={isTouch}
                    />
                    <AchievementCard
                        icon={Database}
                        title="Databases for Developers"
                        description="Oracle Dev Gym"
                        image="/achievements/database.png"
                        isTouch={isTouch}
                    />
                </div>
            </div>
        </section>
    )
}

export default Achievements