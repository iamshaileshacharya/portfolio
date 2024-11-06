// portfolioData.ts

export const portfolioData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Shailesh Acharya",
    "jobTitle": "Master's Student at Tribhuvan University",
    "url": "https://acharyashailesh.com.np",
    "sameAs": [
        "https://www.linkedin.com/in/shailesh-acharya",
        "https://github.com/iamshaileshacharya",
        "https://twitter.com/ping_shailesh"
    ],
    "image": "https://acharyashailesh.com.np/_next/image?url=%2Fprofile.jpg&w=640&q=75",
    "email": "me@acharyashailesh.com.np",
    "telephone": "+977-9868159458",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Butwal",
        "addressRegion": "Lumbini",
        "postalCode": "32907",
        "addressCountry": "NP"
    },
    "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": "Butwal Multiple Campus",
        "sameAs": "https://bumc.edu.np/"
    },
    // "worksFor": {
    //     "@type": "Organization",
    //     "name": "Tech Innovations Inc.",
    //     "sameAs": "https://www.techinnovations.com"
    // },
    "knowsAbout": ["AWS/Azure", "Git", "HTML/CSS", "Python", "Machine Learning", "Cloud Computing", "HUGO", "Next.js", "Tailwind CSS", "SEO", "WordPress"],
    // "hasOccupation": {
    //     "@type": "Occupation",
    //     "name": "Full Stack Developer",
    //     "skills": "Web Development, Mobile App Development, Cloud Architecture, Machine Learning"
    // },
    "makesOffer": [
        {
            "@type": "Offer",
            "itemOffered": {
                "@type": "Service",
                "name": "Full Stack Web Development",
                "description": "Design and development of web applications"
            }
        },
        {
            "@type": "Offer",
            "itemOffered": {
                "@type": "Service",
                "name": "Mobile App Development",
                "description": "Creation of cross-platform mobile applications"
            }
        },
        {
            "@type": "Offer",
            "itemOffered": {
                "@type": "Service",
                "name": "Cloud Architecture Consulting",
                "description": "Design and implementation of cloud-based solutions"
            }
        }
    ],
    "resume": {
        "@type": "CreativeWork",
        "name": "Shailesh Acharya Resume",
        "url": "https://acharyashailesh.com.np/shailesh_resume.pdf",
        "about": {
            "@type": "ItemList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "item": {
                        "@type": "Course",
                        "name": "Work Experience",
                        "description": "Freelenacer, Web Developer, Student (2020-Present)"
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "item": {
                        "@type": "Course",
                        "name": "Education",
                        "description": "Master's in Computer Science, Tribhuvan University, CDCSIT (2023-Present)"
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "item": {
                        "@type": "Course",
                        "name": "Skills",
                        "description": "Next.js, Tailwind CSS, HUGO, WordPress, Python, Machine Learning, Aws/Azure, SEO"
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 4,
                    "item": {
                        "@type": "Course",
                        "name": "Projects",
                        "description": "Portfolio Website, Arduino/Raspberry Pi-based projects, Machine Learning Projects"
                    }
                }
            ]
        }
    }
}