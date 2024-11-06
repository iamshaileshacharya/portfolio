import React from 'react'
import SkillCard from './SkillCard'

const Skills: React.FC = () => {
    const skills = [
        { name: 'AWS/Azure', proficiency: 75 },
        { name: 'HTML/CSS', proficiency: 78 },
        { name: 'Git', proficiency: 88 },
        { name: 'Linux', proficiency: 80 },
        { name: 'JavaScript', proficiency: 92 },
        { name: 'HUGO', proficiency: 82 },
        { name: 'Networking', proficiency: 85 },
        { name: 'Python', proficiency: 85 },
        { name: 'Wordpress', proficiency: 82 },
        { name: 'NextJS', proficiency: 90 },
        { name: 'SEO', proficiency: 88 },
        { name: 'Tailwind CSS', proficiency: 95 },
    ].sort((a, b) => a.name.localeCompare(b.name));

    return (
        <section id="skills" className="py-16 px-4 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-3xl font-medium mb-8 text-center text-gray-800 dark:text-white">
                    Skills
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {skills.map((skill, index) => (
                        <SkillCard
                            key={skill.name}
                            name={skill.name}
                            proficiency={skill.proficiency}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills