import { UserItems, NavItems } from "@/models/Interfaces"


export const userInfo: UserItems = {
    name: "SYED RAZA ALI ",
    heading: 
    "Welcome to my digital space! I'm Syed Raza Ali, a newcomer to web development. Over the past year, I've delved deep into this captivating field, soaking up knowledge and refining my skills. Now, I'm excited to share my journey and creations with you on this website. Join me for an interactive exploration of the digital world!",
    about: `
    As a web & chatbot developer, I blend JavaScript, TypeScript, and HTML expertise. Specializing in Next.js, Tailwind CSS, and utilizing authentication protocols like Next-auth, I ensure secure user interactions. I'm proficient in integrating with various chatbot platforms like Dialogflow, Kommunicate, and Flowise AI. My database proficiency involves SQL and Sanity for robust data management and SEO-friendly content. A top-tier developer with a versatile skill set, I create memorable and optimized web experiences
        `,
    skills: ['React js', 'SEO', 'JavaScript' , 'HTML', 'Tailwind CSS' , 'Python','AI Chatbot', "Databases", "API's"],
}

export const projects = {
    gmail: { image: 'https://i.ibb.co/3y7mjqn/gmail-clone.jpg' },
    flipkart: { image: 'https://i.ibb.co/QDt04mP/maxresdefault.jpg' },
    google: { image: 'https://i.ibb.co/RHpgMcC/google-clone-next.jpg' },
    indeed: { image: 'https://i.ibb.co/tHkM8dD/indeed-clone.jpg' },
    aws: { image: 'https://i.ibb.co/61756n7/aws-3.jpg' },
    notes: { image: 'https://i.ibb.co/wCN5CVj/notesapp.jpg' }
}


export const headerItems: NavItems = {
    home: { label: "Home", page: "Home" },
    about: { label: "About", page: "About" },
    projects: { label: "Projects", page: "Projects" },
}