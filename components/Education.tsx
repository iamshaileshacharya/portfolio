import React from 'react'
import TimelineCard from './TimelineCard'

interface EducationProps {
    educationRef: React.RefObject<HTMLDivElement>
    educationProgress: number
}

const Education: React.FC<EducationProps> = ({ educationRef, educationProgress }) => {
    return (
        <section id="education" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-3xl font-medium mb-12 text-center text-gray-800 dark:text-white">
                    Education
                </h2>
                <div className="relative" ref={educationRef}>
                    <div
                        className="absolute inset-0 border-l transition-all duration-300"
                        style={{
                            borderImage: 'linear-gradient(to bottom, #3B82F6, #8B5CF6)',
                            borderImageSlice: 1,
                            height: `${educationProgress}%`,
                        }}
                    ></div>
                    <div className="pl-8">
                        <TimelineCard
                            year="2023 - Present"
                            title="MSC. CSIT"
                            subtitle=" TU, CDCSIT"
                            description="Machine Learning, Algorithm complexities, Fuzzy System, Genetic Algorithm, Advanced OS."
                        />
                        <TimelineCard
                            year="2020 - 2024"
                            title="Online Coursework"
                            subtitle="Coursera, Scrimba, Udemy"
                            description="HTML, CSS, JS, Python, HUGO, Digital marketing, SEO, Cloud Computing, Networking."
                        />
                        <TimelineCard
                            year="2016 - 2020"
                            title="BSC. CSIT"
                            subtitle="TU, Butwal Multiple Campus"
                            description="Learned the fundamentals of Data Structures, Database, Operating System, AI, SDLC."
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Education