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
    "knowsAbout": ["AWS/Azure", "Git", "HTML/CSS", "Python", "Machine Learning", "Cloud Computing", "HUGO", "Next.js", "Tailwind CSS", "SEO", "WordPress"],
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
                        "description": "Freelenacer, Web Developer, Student (2020-Present)",
                        "provider": {
                            "@type": "Organization",
                            "name": "Various Organizations"
                        },
                        "hasCourseInstance": {
                            "@type": "CourseInstance",
                            "courseMode": "full-time",
                            "offers": {
                                "@type": "Offer",
                                "category": "Professional Experience"
                            }
                        }
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "item": {
                        "@type": "Course",
                        "name": "Education",
                        "description": "Master's in Computer Science, Tribhuvan University, CDCSIT (2023-Present)",
                        "provider": {
                            "@type": "Organization",
                            "name": "Tribhuvan University",
                            "sameAs": "https://cdcsit.edu.np/"
                        },
                        "hasCourseInstance": {
                            "@type": "CourseInstance",
                            "courseMode": "full-time",
                            "instructor": {
                                "@type": "Person",
                                "name": "Department of Computer Science"
                            },
                            "offers": {
                                "@type": "Offer",
                                "category": "Master's Degree",
                                "priceSpecification": {
                                    "@type": "PriceSpecification",
                                    "price": "250000",
                                    "priceCurrency": "NPR"
                                }
                            }
                        }
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "item": {
                        "@type": "Course",
                        "name": "Skills",
                        "description": "Next.js, Tailwind CSS, HUGO, WordPress, Python, Machine Learning, Aws/Azure, SEO",
                        "provider": {
                            "@type": "Organization",
                            "name": "Self-Learned & Professional Experience"
                        },
                        "hasCourseInstance": {
                            "@type": "CourseInstance",
                            "courseMode": "online",
                            "offers": {
                                "@type": "Offer",
                                "category": "Professional Skills"
                            }
                        }
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 4,
                    "item": {
                        "@type": "Course",
                        "name": "Projects",
                        "description": "Portfolio Website, Arduino/Raspberry Pi-based projects, Machine Learning Projects",
                        "provider": {
                            "@type": "Organization",
                            "name": "Personal & Academic Projects"
                        },
                        "hasCourseInstance": {
                            "@type": "CourseInstance",
                            "courseMode": "hybrid",
                            "offers": {
                                "@type": "Offer",
                                "category": "Project Portfolio"
                            }
                        }
                    }
                }
            ]
        }
    }
}