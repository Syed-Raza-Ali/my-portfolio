import { UserItems, NavItems } from "@/models/Interfaces"


export const userInfo: UserItems = {
    name: "SYED RAZA ALI ",
    heading: "Hello! I'm Syed Raza Ali, a beginner in web development.I've been learning the ropes for about one year now, and I'm excited to introduce you to my world through this website.",
    about: `
        I am a passionate Software Engineer with a strong background in Web Development, I have been crafting digital experiences for 1 years.
        My journey in IT began in 2022 since then, this site is my way of sharing what I've been up to in the software engineering realm. Think of it as a virtual space where I've put together bits of code and creativity to create something cool. It's not just a website; it's a reflection of my journey into the exciting world of making things work on the computer.
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