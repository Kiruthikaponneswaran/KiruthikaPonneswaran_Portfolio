import { EducationSection } from "../interfaces/education.interface";
import { ExternalSite } from "../interfaces/external-site.interface"
import { ProjectSection } from "../interfaces/project.interface";
import { SkillSection } from "../interfaces/skill-section.interface";
import { ExperienceSection } from "../interfaces/work-experience.interface";
import { AssetPaths } from "./asset-paths.enum";

// Social media links to show
const SocialMediaLinks: ExternalSite[] = [
  {
    name: "Github",
    link: "https://github.com/Kiruthikaponneswaran/",
    simpleIconName: "github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://in.linkedin.com/in/kiruthika-ponneswaran-72b16422a",
    simpleIconName: "linkedin",
    backgroundColor: "#0066c8",
  },
  {
    name: "Gmail",
    link: "mailto:kiruthikaponneswaran410@gmail.com",
    simpleIconName: "gmail",
    backgroundColor: "#EA4335",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/hey_babzz_",
    simpleIconName: "instagram",
    backgroundColor: "#FF0069",
  }
];

// Fullstack skills
const FullstackSkills: ExternalSite[] = [
  {
    name: "Angular",
    link: "https://angular.dev/",
    simpleIconName: "angular",
    backgroundColor: "#DD0031",
  },
  {
    name: "React",
    link: "https://react.dev/",
    simpleIconName: "react",
    backgroundColor: "#61DAFB",
  },
  {
    name: "React Native",
    link: "https://reactnative.dev/",
    simpleIconName: "react",
    backgroundColor: "#61DAFB",
  },
  {
    name: "TypeScript",
    link: "https://www.typescriptlang.org/",
    simpleIconName: "typescript",
    backgroundColor: "#3178C6",
  },
//   {
//     name: "JavaScript",
//     link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
//     simpleIconName: "javascript",
//     backgroundColor: "#F7DF1E",
//   },
  {
    name: "Python",
    link: "https://www.python.org/",
    simpleIconName: "python",
    backgroundColor: "#3776AB",
  },
//   {
//     name: "Django",
//     link: "https://www.djangoproject.com/",
//     simpleIconName: "django",
//     backgroundColor: "#092E20",
//   },
  {
    name: "Node.js",
    link: "https://nodejs.org/",
    simpleIconName: "nodedotjs",
    backgroundColor: "#5FA04E",
  },
//   {
//     name: "HTML5",
//     link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
//     simpleIconName: "html5",
//     backgroundColor: "#E34F26",
//   },
//   {
//     name: "CSS3",
//     link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
//     simpleIconName: "css3",
//     backgroundColor: "#1572B6",
//   },
//   {
//     name: "SCSS",
//     link: "https://sass-lang.com/",
//     simpleIconName: "sass",
//     backgroundColor: "#CC6699",
//   },
//   {
//     name: "Bootstrap",
//     link: "https://getbootstrap.com/",
//     simpleIconName: "bootstrap",
//     backgroundColor: "#7952B3",
//   },
//   {
//     name: "Tailwind CSS",
//     link: "https://tailwindcss.com/",
//     simpleIconName: "tailwindcss",
//     backgroundColor: "#06B6D4",
//   },
  {
    name: "Angular Material",
    link: "https://material.angular.io/",
    simpleIconName: "angular",
    backgroundColor: "#009688",
  },
];
const FullstackSection: SkillSection = {
    sectionTitle: "Frontend & Full Stack Development",
    imagePath: AssetPaths.FULL_STACK_DEVELOPMENT_SVG,
    skillLinks: FullstackSkills,
    skillsList: [
        "Developing scalable enterprise web applications using Angular, React.js, and React Native.",
        "Building responsive, pixel-perfect user interfaces with HTML5, CSS3, SCSS, Bootstrap, Tailwind CSS, and Angular Material.",
        "Integrating REST APIs, third-party services, Firebase Authentication, and Chatbot solutions into business applications.",
        "Developing backend services and web applications using Python, Django, Django REST Framework, Node.js, and MySQL.",
    ]
}

// Cloud / Backend & Dev Tools

const CloudSkills: ExternalSite[] = [
  {
    name: "Firebase",
    link: "https://firebase.google.com/",
    simpleIconName: "firebase",
    backgroundColor: "#FFCA28",
  },
  {
    name: "MySQL",
    link: "https://www.mysql.com/",
    simpleIconName: "mysql",
    backgroundColor: "#4479A1",
  },
  {
    name: "Git",
    link: "https://git-scm.com/",
    simpleIconName: "git",
    backgroundColor: "#F05032",
  },
  {
    name: "GitHub",
    link: "https://github.com/",
    simpleIconName: "github",
    backgroundColor: "#181717",
  },
  {
    name: "NPM",
    link: "https://www.npmjs.com/",
    simpleIconName: "npm",
    backgroundColor: "#CB3837",
  },
  {
    name: "Yarn",
    link: "https://yarnpkg.com/",
    simpleIconName: "yarn",
    backgroundColor: "#2C8EBB",
  },
  {
    name: "Webpack",
    link: "https://webpack.js.org/",
    simpleIconName: "webpack",
    backgroundColor: "#8DD6F9",
  },
  {
    name: "Vite",
    link: "https://vite.dev/",
    simpleIconName: "vite",
    backgroundColor: "#646CFF",
  },
];
// Cloud / Backend & Dev Tools Section
const CloudSection: SkillSection = {
    sectionTitle: "Backend & Development Tools",
    imagePath: AssetPaths.CLOUD_INFRASTRUCTURE_SVG,
    skillLinks: CloudSkills,
    skillsList: [
        "Developing secure backend applications using Django, Django REST Framework, Node.js, and MySQL.",
        "Integrating REST APIs, third-party services, ChatGPT API, and Firebase Authentication into enterprise and web applications.",
        "Managing source code with Git & GitHub while following Agile development practices.",
        "Building, debugging, and optimizing modern applications using Vite, Webpack, NPM, and Yarn.",
    ]
}

// UI / Frontend Skills

const DesignSkills: ExternalSite[] = [
  {
    name: "Figma",
    link: "https://figma.com/",
    simpleIconName: "figma",
    backgroundColor: "#F24E1E",
  },
  {
    name: "Angular Material",
    link: "https://material.angular.io/",
    simpleIconName: "angular",
    backgroundColor: "#009688",
  },
  {
    name: "Bootstrap",
    link: "https://getbootstrap.com/",
    simpleIconName: "bootstrap",
    backgroundColor: "#7952B3",
  },
  {
    name: "Tailwind CSS",
    link: "https://tailwindcss.com/",
    simpleIconName: "tailwindcss",
    backgroundColor: "#06B6D4",
  },
];

// UI / UX Section
const DesignSection: SkillSection = {
    sectionTitle: "UI / UX Development",
    imagePath: AssetPaths.UI_UX_DESIGN_SVG,
    skillLinks: DesignSkills,
    skillsList: [
        "Developing modern, responsive, and pixel-perfect user interfaces from Figma designs using Angular and React.",
        "Building reusable UI components with Angular Material, Bootstrap, Tailwind CSS, and SCSS for scalable enterprise applications.",
        "Enhancing user experience through responsive layouts, accessibility best practices, and performance optimization across desktop and mobile devices.",
    ]
}

// Design skills
const DigitalSolutionSkills: ExternalSite[] = [

];

// Enterprise Solutions Section
const DigitalSolutionSection: SkillSection = {
    sectionTitle: "Enterprise Solutions & Business Applications",
    imagePath: AssetPaths.DIGITAL_SOLUTIONS_SVG,
    skillLinks: DigitalSolutionSkills,
    skillsList: [
        "Developing and maintaining enterprise ERP applications for Accounts, Sales, Purchase, and Finance modules using Angular and REST APIs.",
        "Integrating REST APIs, third-party services, and chatbot solutions to automate business workflows and improve operational efficiency.",
        "Collaborating with cross-functional teams and international clients, including UAE-based projects, to deliver scalable, high-quality software solutions.",
    ]
}

// Personal Projects
const PersonalProjects: ProjectSection = {
    sectionTitle: "My Projects",
    sectionSubtitle: "🚀 Enterprise applications, interactive platforms, and scalable web solutions built with modern technologies.",
    entities: [
        {
            title: "TITAN Enterprise ERP Platform",
            coverImagePath: AssetPaths.PROJECT_TITAN_ERP,
             liveLink: "https://easydesignsystems.com/",
            description: "💼 Developed and maintained enterprise-scale ERP applications using Angular for Accounts, Sales, Purchase, and Finance modules. Integrated REST APIs, optimized workflows, and enhanced UI performance while collaborating with cross-functional teams and UAE-based clients.",
            techStack: ["Angular", "TypeScript", "REST API", "SCSS", "Angular Material"],
            year: 2026,
        },
        {
            title: "Chess Gaming Platform",
            coverImagePath: AssetPaths.PROJECT_CHESS_PLATFORM,
            liveLink: "https://www.allreal.io/",
            description: "♟️ Developed an interactive chess platform with intelligent gameplay, chatbot integration, Firebase Authentication, and Stockfish Engine. Built modern React components to deliver a seamless learning experience for chess enthusiasts.",
            techStack: ["React.js", "Vite", "Firebase", "ChatGPT API", "Stockfish Engine"],
            year: 2024,
        },
        {
            title: "Sigaram64 Chess Learning Platform",
            coverImagePath: AssetPaths.PROJECT_SIGARAM64,
            liveLink: "https://sigaram64.com/",
            description: "🏆 Contributed to the development of a modern chess learning platform for Grandmaster Surya Ganguly, implementing responsive UI components and interactive learning features using React.js.",
            techStack: ["React.js", "JavaScript", "Firebase", "Responsive UI"],
            year: 2024,
        },
        {
            title: "Restaurant Booking System",
            coverImagePath: AssetPaths.PROJECT_RESTAURANT_BOOKING,
             liveLink: "https://easydesignsystems.com/",
            description: "🍽️ Designed and developed a restaurant reservation system enabling customers to book tables, manage reservations, and browse menus. Built with Django following clean MVC architecture.",
            techStack: ["Python", "Django", "MySQL", "HTML", "CSS"],
            year: 2023,
        },
        {
            title: "Personal Portfolio Website",
            coverImagePath: AssetPaths.PROJECT_PORTFOLIO,
            githubLink: "https://github.com/kiruthikaponneswaran",
            description: "🌐 Designed and developed a modern developer portfolio showcasing professional experience, technical skills, and projects with responsive design and smooth user interactions.",
            techStack: ["Angular", "TypeScript", "SCSS", "Responsive Design"],
            year: 2026,
        }
    ]
}

// Professional Projects
const ProfessionalProjects: ProjectSection = {
    sectionTitle: "Professional Projects",
    sectionSubtitle: "💼 Enterprise solutions and real-world applications developed for business clients and production environments.",
    entities: [
        {
            title: "TITAN Enterprise Platform",
            coverImagePath: AssetPaths.PROJECT_TITAN_ERP,
             liveLink: "https://easydesignsystems.com/",
            description: "Developed and enhanced enterprise-scale business applications using Angular for Accounts, Sales, Purchase, and Finance modules. Integrated REST APIs, optimized UI performance, and collaborated with cross-functional teams to deliver scalable solutions.",
            techStack: ["Angular", "TypeScript", "REST API", "SCSS", "Angular Material"],
            year: 2026
        },
        {
            title: "Dubai Castle Support IT Solutions",
            coverImagePath: AssetPaths.PROJECT_DUBAI_CASTLE,
             liveLink: "https://www.castleitsolutions.com/",
            description: "Provided application support, feature enhancements, bug fixes, and UI improvements for business applications serving UAE clients while ensuring smooth production operations.",
            techStack: ["React", "TypeScript", "REST API", "SQL"],
            year: 2026
        },
        // {
        //     title: "Chess Gaming Platform",
        //     coverImagePath: AssetPaths.PROJECT_CHESS_PLATFORM,
        //     liveLink: "https://www.allreal.io/",
        //     description: "Built interactive frontend features for an online chess platform using React.js, integrating Firebase Authentication, ChatGPT API, and Stockfish Engine to create an engaging learning experience.",
        //     techStack: ["React.js", "Vite", "Firebase", "ChatGPT API", "Stockfish Engine"],
        //     year: 2024
        // },
        {
  title: "Restaurant Website",

  coverImagePath: AssetPaths.PROJECT_RESTAURANT_BOOKING,

   description:
    "Contributed to the development of a modern restaurant website for Gulf-based clients, focusing on responsive frontend development, restaurant menu presentation, online ordering, table booking, and an enhanced user experience across devices.",
      liveLink: "https://www.castleitsolutions.com/",
           
  techStack: [
    "React.js",
    "React Native",
    "JavaScript",
    "Firebase",
    "Responsive UI"
  ],

  year: 2024
}
    ]
}


// Work Experience
const JobExperience: ExperienceSection = {
    experienceSectionTitle: "Work Experience",
    experiences: [
        {
            orgLink: "https://www.easydesignsystems.com/",
            orgLogoPath: AssetPaths.WORK_EASYDESIGN_LOGO,
            orgName: "Easy Design Systems",
            positions: [
                {
                    positionName: "Frontend Developer",
                    duration: "Jun 2024 - Aug 2026",
                    location: "Coimbatore, Tamil Nadu",
                    locationType: "On-Site",
                    jobType: "Full-time",
                    workPoints: [
                        "Developed and maintained enterprise-scale ERP applications on the TITAN platform using Angular and TypeScript.",
                        "Designed and implemented business modules including Accounts, Sales, Purchase, and Finance for production environments.",
                        "Integrated REST APIs and optimized UI performance to improve application responsiveness and workflow efficiency.",
                        "Developed reusable Angular components, custom forms, Material UI components, and responsive interfaces following best practices.",
                        "Collaborated closely with backend developers, QA engineers, and business analysts to deliver high-quality software solutions.",
                        "Provided application support, feature enhancements, and issue resolution for UAE-based client projects including Dubai Castle Support IT Solutions.",
                        "Participated in requirement discussions with overseas clients and translated business requirements into scalable frontend solutions.",
                        "Worked in Agile development environments using Git for version control and continuous feature delivery."
                    ]
                }
            ]
        },
        {
            orgLink: "https://www.allreal.io/",
            orgLogoPath: AssetPaths.WORK_MACHENN_LOGO,
            orgName: "Machenn Innovation",
            positions: [
                {
                    positionName: "Web Developer",
                    duration: "Nov 2023 - Feb 2024",
                    location: "Coimbatore, Tamil Nadu",
                    locationType: "On-Site",
                    jobType: "Full-time",
                    workPoints: [
                        "Developed interactive frontend features for the Chess Gaming Platform using React.js and Vite.",
                        "Integrated Firebase Authentication, ChatGPT API, and Stockfish Engine to deliver intelligent chess gameplay and personalized learning experiences.",
                        "Built responsive user interfaces and reusable React components for seamless cross-device compatibility.",
                        "Contributed to the Sigaram64 chess learning platform developed for Grandmaster Surya Ganguly.",
                        "Collaborated with designers and backend developers to deliver high-performance web applications."
                    ]
                }
            ]
        },
        {
            orgLink: "https://braineryspot.com/",
            orgLogoPath: AssetPaths.WORK_BRAINERY_LOGO,
            orgName: "Brainery Spot Technology",
            positions: [
                {
                    positionName: "Python Full Stack Developer Intern",
                    duration: "Apr 2023 - Oct 2023",
                    location: "Coimbatore, Tamil Nadu",
                    locationType: "On-Site",
                    jobType: "Full-time",
                    workPoints: [
                        "Developed web applications using Python, Django, Django REST Framework, and MySQL.",
                        "Designed responsive web pages, integrated backend APIs, and implemented CRUD operations.",
                        "Built a Restaurant Booking System as part of the internship using Django and MySQL.",
                        "Strengthened knowledge of full-stack web development, REST APIs, and database design through real-world projects."
                    ]
                }
            ]
        }
    ]
}

// Freelancing Experience
const FreelancingExperience: ExperienceSection = {
    experienceSectionTitle: "Freelancing & Contributions",
    experiences: [
        {
            orgLink: "",
            orgLogoPath: AssetPaths.WORK_FREELANCE_LOGO,
            orgName: "Restaurant Website",
            positions: [
                {
                    positionName: "Frontend Contributor",
                    duration: "2023",
                    location: "Remote",
                    locationType: "Remote",
                    jobType: "Contract",
                    workPoints: [
                        "Contributed to the frontend development of a restaurant website by implementing responsive layouts using HTML, CSS, and JavaScript.",
                        "Enhanced the website styling, improving UI consistency, responsiveness, and overall user experience across multiple devices.",
                        "Implemented shopping cart functionality, including adding, updating, and removing menu items from the cart.",
                        "Worked with the development team to fix UI issues, improve usability, and ensure smooth frontend interactions.",
                    ]
                }
            ]
        }
    ]
}

// Internship Experience
const InternshipExperience: ExperienceSection = {
    experienceSectionTitle: "Internships",
    experiences: [
        {
            orgLink: "",
            orgLogoPath: AssetPaths.WORK_BRAINERY_LOGO,
            orgName: "Brainery Spot Technology",
            positions: [
                {
                    positionName: "Python Full Stack Developer Intern",
                    duration: "Apr 2023 - Oct 2023",
                    location: "Coimbatore, Tamil Nadu",
                    locationType: "On-Site",
                    jobType:  "Full-time",
                    workPoints: [
                        "Developed full-stack web applications using Python, Django, Django REST Framework, and MySQL.",
                        "Designed and implemented responsive web pages using HTML, CSS, JavaScript, and Bootstrap.",
                        "Built a Restaurant Booking System with features including table reservation, menu management, and user-friendly booking workflows.",
                        "Integrated backend APIs, performed CRUD operations, and optimized database interactions using MySQL.",
                        "Worked collaboratively with mentors to understand software development best practices, version control using Git, and Agile development methodologies.",
                    ]
                }
            ]
        }
    ]
}

// Professional Highlights
const CommunityInvolvement: ProjectSection = {
    sectionTitle: "Professional Highlights",
    entities: [
        {
            coverImagePath: AssetPaths.ACHIEVEMENT_ENTERPRISE,
            techStack: ["Angular", "TypeScript", "REST APIs"],
            title: "Enterprise Application Development",
            description: "💼 Developed and maintained enterprise-scale ERP applications using Angular, contributing to Accounts, Sales, Purchase, and Finance modules while optimizing UI performance and business workflows.",
            year: 2026,
        },
        {
            coverImagePath: AssetPaths.ACHIEVEMENT_CHESS,
            liveLink: "https://www.allreal.io/",
            techStack: ["React.js", "Firebase", "ChatGPT API"],
            title: "Chess Gaming Platform",
            description: "♟️ Contributed to an interactive chess platform by developing responsive React.js components and integrating Firebase Authentication, ChatGPT API, and Stockfish Engine for an engaging learning experience.",
            year: 2024,
        },
        {
            coverImagePath: AssetPaths.ACHIEVEMENT_UAE,
            techStack: ["Angular", "Client Communication"],
            title: "International Client Collaboration",
            description: "🌍 Worked closely with overseas clients, including UAE-based projects, delivering feature enhancements, issue resolution, and high-quality frontend solutions for production applications.",
            year: 2026,
        }
    ]
}

// Achievements
const AchievementInvolvement: ProjectSection = {
    sectionTitle: "Achievements",
    entities: [
        {
            coverImagePath: AssetPaths.ACHIEVEMENT_TITAN,
            techStack: ["Angular", "TypeScript", "REST APIs"],
            liveLink:"https://www.titanpaints.in/",
            title: "Enterprise ERP Development",
            description: "🏆 Successfully contributed to the development and maintenance of the TITAN Enterprise Platform by implementing scalable Angular solutions across Accounts, Sales, Purchase, and Finance modules for business-critical operations.",
            year: 2026,
        },
        {
            coverImagePath: AssetPaths.ACHIEVEMENT_CHESS,
            liveLink: "https://www.allreal.io/",
            techStack: ["React.js", "Firebase", "ChatGPT API", "Stockfish"],
            title: "Chess Gaming Platform",
            description: "♟️ Contributed to the development of an interactive chess learning platform by building responsive React.js components and integrating Firebase Authentication, ChatGPT API, and Stockfish Engine for intelligent gameplay.",
            year: 2024,
        },
        {
            coverImagePath: AssetPaths.ACHIEVEMENT_SIGARAM,
            liveLink: "https://sigaram64.com/",
            techStack: ["React.js", "Responsive UI"],
            title: "Sigaram64 Chess Learning Platform",
            description: "🎯 Participated in developing the Sigaram64 chess learning platform for Grandmaster Surya Ganguly, implementing frontend features and responsive user interfaces to enhance the online learning experience.",
            year: 2024,
        }
    ]
}

// Bachelor's Degree
const BachelorsDegree: EducationSection = {
    degreeName: "Bachelor of Engineering",
    majorName: "Electronics & Communication Engineering",
    duration: "Jun 2018 - May 2022",
    universityName: "Anna University",
    campusName: "University College of Engineering, Dindigul",
    logoImagePath: AssetPaths.EDUCATION_ANNA_UNIVERSITY_LOGO,
    gpa: "7.82 / 10.0",
    websiteLink: "https://www.annauniv.edu/",
    studyPoints: [
        "Built a strong foundation in Electronics & Communication Engineering, Digital Electronics, Communication Systems, Embedded Systems, and Microprocessors.",
        "Studied core computer science subjects including Data Structures, Database Management Systems, Operating Systems, Computer Networks, and Object-Oriented Programming.",
        "Completed academic projects that strengthened analytical thinking, software development fundamentals, and problem-solving skills.",
        "Developed a strong interest in web technologies, leading to specialization in Frontend Development using Angular, React.js, TypeScript, and modern JavaScript frameworks."
    ]
}





export const AppConfig = {
    loaderSplashAnimation: true,

    // Header
    logoName: "Kiruthika Ponneswaran",
    name: "Kiruthika Ponneswaran",
    emailId: "kiruthikaponneswaran410@gmail.com",

    // Contact
    googleFormContactLink: "https://docs.google.com/forms/d/e/1FAIpQLSc00VrzQiFqLqA1eyS4__mIpFS0Ml_TbMFT4To8zFyOPkkINA/viewform?usp=publish-editor",

    // Home Page
    professionalTitle: "Full-Stack Web Developer | Angular Developer | React Developer",

    professionalSummary:
        "Frontend Developer with 3+ years of experience developing enterprise web applications using Angular, React.js, and React Native. Passionate about building scalable, responsive, and user-centric applications with modern frontend technologies. Experienced in REST API integration, enterprise ERP systems, business applications, and collaborating with international clients across India and the UAE.",

    githubProfile: "https://github.com/kiruthikaponneswaran",

    // Change this if you forked/renamed the repository
    portfolioRepository: "https://github.com/kiruthikaponneswaran/Angular-Master-Portfolio",

    socialMedia: SocialMediaLinks,

    aboutMe: [
        FullstackSection,
        CloudSection,
        DesignSection,
        DigitalSolutionSection,
    ],

    // Projects
    projectsPageTitle: "Projects",

    projectsPageDescription:
       "A showcase of enterprise applications and full-stack solutions built with Angular, React.js, Django, REST APIs, and modern frontend technologies, focused on performance, scalability, and exceptional user experiences.",
    projectSections: [
        // PersonalProjects,
        ProfessionalProjects,      // rename FreelancingProjects -> ProfessionalProjects
    ],

    // Experience
    experiencePageTitle: "Professional Experience",

    experiencePageDescription:
     "A career shaped by enterprise software development, frontend engineering, internships, and real-world client projects across diverse business domains, combining technical expertise with practical problem-solving to deliver scalable, user-focused solutions.",
    experienceSections: [
        JobExperience,
        InternshipExperience,
        FreelancingExperience,     // keep only if you retain the restaurant contribution
    ],

    // Education
    educationPageTitle: "Education",

    educationPageDescription:
        "Academic foundation that shaped my engineering knowledge and software development career.",

    educationSections: [
        BachelorsDegree,
    ],

    // Achievements
    achievementsPageTitle: "Professional Achievements",

    achievementsPageDescription:
      "Highlighting the milestones, enterprise solutions, technical accomplishments, and impactful projects that define my journey in software engineering and demonstrate my growth from learning to building real-world solutions.",
    achievementsSections: [
        AchievementInvolvement,
        // CommunityInvolvement,
    ],
}
