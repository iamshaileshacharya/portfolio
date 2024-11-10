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
    "image": {
        "@type": "ImageObject",
        "url": "https://acharyashailesh.com.np/_next/image?url=%2Fprofile.jpg&w=640&q=75",
        "width": "640px",
        "height": "640px"
    },
    "email": "me@acharyashailesh.com.np",
    "telephone": "+977-9868159458",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Butwal",
        "addressRegion": "Lumbini",
        "postalCode": "32907",
        "addressCountry": {
            "@type": "Country",
            "name": "Nepal",
            "alternateName": "NP"
        }
    },
    "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Master's Degree",
        "recognizedBy": {
            "@type": "EducationalOrganization",
            "name": "Tribhuvan University",
            "sameAs": "https://tu.edu.np"
        },
        "educationalLevel": "Graduate",
        "validFrom": "2023-01-01"
    },
    "alumniOf": [
        {
            "@type": "EducationalOrganization",
            "name": "Tribhuvan University",
            "sameAs": "https://cdcsit.edu.np/",
            "award": "MSc. Computer Science and Information Technology",
            "startDate": "2023-01-01",
            "endDate": "Present",
            "programType": "Graduate Program"
        },
        {
            "@type": "EducationalOrganization",
            "name": "Butwal Multiple Campus",
            "sameAs": "https://bumc.edu.np/",
            "award": "BSc. Computer Science and Information Technology",
            "startDate": "2016-01-01",
            "endDate": "2020-12-31",
            "programType": "Undergraduate Program"
        }
    ],
    "knowsLanguage": [
        {
            "@type": "Language",
            "name": "English",
            "alternateName": "en",
            "proficiencyLevel": "Professional working proficiency"
        },
        {
            "@type": "Language",
            "name": "Nepali",
            "alternateName": "ne",
            "proficiencyLevel": "Native"
        }
    ],
    "knowsAbout": {
        "@type": "ItemList",
        "itemListElement": [
            {
                "@type": "DefinedTerm",
                "termCode": "cloud-computing",
                "name": "Cloud Computing",
                "skills": ["AWS", "Azure", "Cloud Architecture"]
            },
            {
                "@type": "DefinedTerm",
                "termCode": "web-development",
                "name": "Web Development",
                "skills": ["Next.js", "React", "HTML/CSS", "JavaScript", "Tailwind CSS"]
            },
            {
                "@type": "DefinedTerm",
                "termCode": "programming",
                "name": "Programming Languages",
                "skills": ["Python", "JavaScript", "TypeScript", "C++"]
            }
        ]
    },
    "hasOccupation": [
        {
            "@type": "Occupation",
            "name": "Full Stack Web Developer",
            "occupationalCategory": "15-1254.00",
            "skills": {
                "@type": "ItemList",
                "itemListElement": [
                    {
                        "@type": "DefinedTerm",
                        "name": "Web Development"
                    },
                    {
                        "@type": "DefinedTerm",
                        "name": "Cloud Architecture"
                    },
                    {
                        "@type": "DefinedTerm",
                        "name": "Machine Learning"
                    }
                ]
            },
            "description": "Full Stack Web Developer specializing in modern web technologies and cloud architecture",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "url": "https://acharyashailesh.com.np/",
                "lastReviewed": "2023-11-10",
                "encoding": {
                    "@type": "MediaObject",
                    "encodingFormat": "text/html",
                    "contentUrl": "https://acharyashailesh.com.np/"
                }
            },
            "occupationLocation": {
                "@type": "City",
                "name": "Butwal",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Butwal",
                    "addressRegion": "Lumbini",
                    "postalCode": "32907",
                    "addressCountry": "NP"
                },
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "27.6866",
                    "longitude": "83.4323"
                }
            },
            "workLocation": {
                "@type": "Place",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Butwal",
                    "addressRegion": "Lumbini",
                    "postalCode": "32907",
                    "addressCountry": "NP"
                }
            },
            "estimatedSalary": {
                "@type": "MonetaryAmountDistribution",
                "name": "Full Stack Developer Salary in Nepal",
                "currency": "NPR",
                "duration": "P1M",
                "median": 100000,
                "percentile10": 50000,
                "percentile25": 75000,
                "percentile75": 125000,
                "percentile90": 150000
            }
        }
    ],
    "mainEntityOfPage": {
        "@type": "WebPage",
        "name": "Shailesh Acharya - Portfolio",
        "description": "Personal portfolio website of Shailesh Acharya, a Full Stack Developer and Master's Student",
        "inLanguage": "en-US",
        "encoding": {
            "@type": "MediaObject",
            "encodingFormat": "text/html"
        },
        "subjectOf": [
            {
                "@type": "SoftwareSourceCode",
                "name": "Portfolio Website",
                "url": "https://github.com/iamshaileshacharya/My-portfolio",
                "description": "A personal portfolio website built with Next.js, Framer Motion, and Tailwind CSS.",
                "datePublished": "2023-01-01",
                "programmingLanguage": ["JavaScript", "React", "Next.js"],
                "codeRepository": "https://github.com/iamshaileshacharya/My-portfolio",
                "runtimePlatform": "Node.js",
                "category": "Web Development"
            },
            {
                "@type": "SoftwareSourceCode",
                "name": "Email Spam Detection",
                "url": "https://github.com/iamshaileshacharya/python-spam-detection",
                "description": "A machine learning model with GUI to detect spam emails using Python.",
                "datePublished": "2022-01-01",
                "programmingLanguage": ["Python"],
                "codeRepository": "https://github.com/iamshaileshacharya/python-spam-detection",
                "runtimePlatform": "Python 3",
                "category": "Machine Learning"
            },
            {
                "@type": "SoftwareSourceCode",
                "name": "Smart Car Parking System",
                "url": "https://github.com/iamshaileshacharya/android-car-parking-system",
                "description": "An intelligent car parking monitoring system using Arduino and Raspberry Pi.",
                "datePublished": "2021-01-01",
                "programmingLanguage": ["Python", "C++"],
                "codeRepository": "https://github.com/iamshaileshacharya/android-car-parking-system",
                "runtimePlatform": ["Arduino", "Raspberry Pi"],
                "category": "IoT"
            }
        ]
    },
    "potentialAction": {
        "@type": "ContactAction",
        "name": "Contact Shailesh Acharya",
        "target": {
            "@type": "EntryPoint",
            "urlTemplate": "mailto:me@acharyashailesh.com.np",
            "description": "Email contact form"
        }
    }
}
