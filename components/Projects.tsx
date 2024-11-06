import React from 'react'
import ProjectCard from './ProjectCard'

interface ProjectsProps {
    isTouch: boolean
}

const Projects: React.FC<ProjectsProps> = ({ isTouch }) => {
    return (
        <section id="projects" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-3xl font-medium mb-12 text-center text-gray-800 dark:text-white">
                    Featured Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <ProjectCard
                        title="Portfolio Website"
                        description="A personal portfolio website built with Next.js, Framer Motion and Tailwind CSS."
                        tags={['Next.js', 'Tailwind css', 'Framer Motion']}
                        image="/projects/portfolio_website.png"
                        isTouch={isTouch}
                        githubUrl="https://github.com/iamshaileshacharya/My-portfolio"
                    />
                    <ProjectCard
                        title="Email Spam Detection"
                        description="A machine learning model with GUI to detect spam emails using Python."
                        tags={['Python', 'Gradio', 'Machine-Learning']}
                        image="/projects/spam_detection.png"
                        isTouch={isTouch}
                        githubUrl="https://github.com/iamshaileshacharya/python-spam-detection"
                    />
                    <ProjectCard
                        title="Smart car parking system"
                        description="An intelligent car parking monitoring system using Arduino and Raspberry Pi."
                        tags={['Arduino', 'Raspberry Pi', 'C++']}
                        image="/projects/Android_car_parking_monitoring_system.png"
                        isTouch={isTouch}
                        githubUrl="https://github.com/yourusername/ai-chatbot"
                    />
                    <ProjectCard
                        title="My portfolio website"
                        description="Personal portfolio website built with Next.js, Tailwind CSS and TypeScript."
                        tags={['Next.js', 'Tailwind CSS', 'TypeScript']}
                        image="/projects/current_website.png"
                        isTouch={isTouch}
                        githubUrl="https://github.com/iamshaileshacharya/portfolio"
                    />
                </div>
            </div>
        </section>
    )
}

export default Projects