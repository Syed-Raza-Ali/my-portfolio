import { UserItems, NavItems } from "@/models/Interfaces"


export const userInfo: UserItems = {
    name: "SYED RAZA ALI ",
    heading:
        "Welcome to my digital space! I'm Syed Raza Ali, a newcomer to web development. Over the past year, I've delved deep into this captivating field, soaking up knowledge and refining my skills. Now, I'm excited to share my journey and creations with you on this website. Join me for an interactive exploration of the digital world!",
    about: `
    As a web & chatbot developer, I blend JavaScript, TypeScript, and HTML expertise. Specializing in Next.js, Tailwind CSS, and utilizing authentication protocols like Next-auth, I ensure secure user interactions. I'm proficient in integrating with various chatbot platforms like Dialogflow, Kommunicate, and Flowise AI. My database proficiency involves SQL and Sanity for robust data management and SEO-friendly content. A top-tier developer with a versatile skill set, I create memorable and optimized web experiences
        `,
    skills: ['Web Development', 'Chatbot Development', 'Database Development', 'Web Design', 'Graphic Design', 'SEO Optimization', 'Python Programming', "API's Endpoints"],
}

export const projects = {

    indeed: { image: 'https://i.ibb.co/zXd1Hv5/resized-image-Promo-4.jpg' },
    flipkart: { image: "https://i.ibb.co/jhNLG1q/resized-image-Promo-1.jpg" },
    gmail: { image: 'https://i.ibb.co/8DhQMq3/resized-image-Promo.jpg' },
    notes: { image: 'https://i.ibb.co/RBz5cZ8/Screenshot-2024-04-23-175107.png' },
    google: { image: 'https://i.ibb.co/6sc21Bg/resized-image-Promo-3.jpg' },
    aws: { image: 'https://i.ibb.co/N7BhdgV/Screenshot-2024-04-23-175036.png' }

}


export const headerItems: NavItems = {
    home: { label: "Home", page: "Home" },
    about: { label: "About", page: "About" },
    projects: { label: "Projects", page: "Projects" },
}