import {
    mobile,
    backend,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    freelancer,
    kascodex,
    youtubeclone,
    ecommerce,
    exercises,
    refinedashboard,
    threejs,
    ministryofHealth,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },

];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },

];

const experiences = [
    {
        title: "Environmental Health officer",
        company_name: "Ministry of Health",
        icon: ministryofHealth,
        iconBg: "#E6DEDD",
        date: "Oct 2009 - Sep 2012",
        points: [
            "Collaborating with other agencies and organizations to address environmental health concerns and promote public health.",
            "Inspecting and monitoring food premises to ensure compliance with health and safety regulations.",
            "Inspecting and monitoring housing and buildings to ensure compliance with health and safety regulations.",
            "Conducting inspections and investigations related to hazardous waste, air pollution, noise pollution, and other environmental hazards.",
        ],
    },
    {
        title: "Freelancer",
        company_name: "Freelancing",
        icon: freelancer,
        iconBg: "#383E56",
        date: "Jan 2016 - Jan 2019",
        points: [
            "Assisting in software development: including coding, testing, and debugging.",
            "Conducting research: on various topics related to the IT industry, such as new technologies, programming languages, and software frameworks. ",
            "Creating documentation related to the software development process, such as technical specifications, user manuals, and project plans. ",
            "Collaborating with team members",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Kassu proved me wrong.",
        name: "Seble Aman",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/lego/3.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Kassu does.",
        name: "Christian Kas",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/lego/2.jpg",
    },
    {
        testimonial:
            "After Kassu optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Workneh Tamire",
        designation: "CTO",
        company: "Epassi Finland Oy",
        image: "https://randomuser.me/api/portraits/lego/5.jpg",
    },
];

const projects = [
    {
        name: "KasCodex OpenAI",
        description:
            "An elegant user interface that resembles the ChatGPT app, communication with advanced GPT3 model API, and most importantly, the ability to ask the AI for help ",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "three.js",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: kascodex,
        source_code_link: "https://kas-codex.vercel.app/",
    },
    {
        name: "Ecommerce",
        description:
            "Shop with ease and convenience using our feature-packed Ecommerce app for all your online buying and selling needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "nodejs",
                color: "pink-text-gradient",
            },
        ],
        image: ecommerce,
        source_code_link: "http://github.com/Kas1398/Ecommerce.git",
    },
    {
        name: "Refine Dashboard",
        description:
            "Our real estate includes residential properties such as apartments or single-family homes, as well as commercial properties like office buildings or retail spaces.",
        tags: [
            {
                name: "mongodb",
                color: "blue-text-gradient",
            },
            {
                name: "nodejs",
                color: "green-text-gradient",
            },
            {
                name: "react",
                color: "pink-text-gradient",
            },
        ],
        image: refinedashboard,
        source_code_link: "https://github.com/Kas1398/refine_dashboard.git",
    },
    {
        name: "YouTube Clone App",
        description:
            "A platform that allows you to upload, share, and watch videos online. With a user-friendly interface,you can easily create and customize your profile, search for videos by keywords, categories, and channels, and interact with other users through comments and likes. ",
        tags: [
            {
                name: "tailwind",
                color: "blue-text-gradient",
            },
            {
                name: "nodejs",
                color: "green-text-gradient",
            },
            {
                name: "react",
                color: "pink-text-gradient",
            },
        ],
        image: youtubeclone,
        source_code_link: "https://chris-kas-sebli.vercel.app/",
    },
    {
        name: "Fitness App",
        description:
            "Transform your body and mind with our comprehensive fitness app designed to help you achieve your health goals.",
        tags: [
            {
                name: "tailwind",
                color: "blue-text-gradient",
            },
            {
                name: "react",
                color: "green-text-gradient",
            },

        ],
        image: exercises,
        source_code_link: "https://gym-by-kassu.onrender.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };