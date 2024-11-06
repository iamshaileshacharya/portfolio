import React from 'react'
import TimelineCard from './TimelineCard'

interface ExperienceProps {
    experienceRef: React.RefObject<HTMLDivElement>
    experienceProgress: number
}

const Experience: React.FC<ExperienceProps> = ({ experienceRef, experienceProgress }) => {
    return (
        <section id="experience" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-3xl font-medium mb-12 text-center text-gray-800 dark:text-white">
                    Experience
                </h2>
                <div className="relative" ref={experienceRef}>
                    <div
                        className="absolute inset-0 border-l transition-all duration-300"
                        style={{
                            borderImage: 'linear-gradient(to bottom, #3B82F6, #8B5CF6)',
                            borderImageSlice: 1,
                            height: `${experienceProgress}%`,
                        }}
                    ></div>
                    <div className="pl-8">
                        <TimelineCard
                            year="2022 - 2023"
                            title="Volunteer"
                            subtitle="Python Nepal"
                            description="Discuss, share, and learn about Python use cases in the AI, deep learning, and machine learning fields."
                        />
                        <TimelineCard
                            year="2021 - 2021"
                            title="Data Expedition"
                            subtitle="oknp.org"
                            description="Involved in research, advocacy, training, workshops, and developing tools related to open knowledge."
                        />
                        <TimelineCard
                            year="2019 - 2020"
                            title="Intern"
                            subtitle="WorldLink"
                            description="Worked on a team responsible for providing Tech Support to clients regarding Internet connection and IPTV."
                        />
                        <TimelineCard
                            year="2019 - 2019"
                            title="CCNA Bootcamp"
                            subtitle="Networking NP"
                            description="Gained good insights about CISCO routers and switches and have sufficient knowledge to use CISCO devices."
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience