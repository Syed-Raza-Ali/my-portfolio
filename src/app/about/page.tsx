import { headerItems, userInfo } from "@/constants/constant"
import Image from "next/image"

const About: React.FC = () => {
    return (
        <section
            id={headerItems.about.page}
            className="flex flex-col md:flex-row text-center justify-center items-center  md:text-start my-16"
        >
            
            <div className="m-4 md:ml-20 sm:ml-12 md:w-1/2 ">
                {/* <h1 className="text-5xl my-6 font-bold">About</h1> */}
                <h1 className="text-5xl my-6 font-bold">Get to know me!</h1>
                <h2 className="text-4xl my-12 font-bold">SYED RAZA ALI </h2>
                <p className="mt-8 mb-4 mx-6 md:mx-0">{userInfo.about}</p>
                {/* <p
                className="mt-8 mb-4 mx-6 md:mx-0">
                𝐀𝐫𝐞 𝐲𝐨𝐮 𝐮𝐧𝐡𝐚𝐩𝐩𝐲 𝐨𝐟 𝐰𝐞𝐛𝐬𝐢𝐭𝐞𝐬 𝐭𝐡𝐚𝐭 𝐚𝐫𝐞 𝐣𝐮𝐬𝐭 𝐨𝐤𝐚𝐲 𝐚𝐧𝐝 𝐝𝐨𝐧'𝐭 𝐫𝐞𝐚𝐥𝐥𝐲 𝐬𝐭𝐚𝐧𝐝 𝐨𝐮𝐭?<br></br>
                I'm here to change that. I'm really good at building websites that not only look awesome but also work really well.<br></br>
                <br></br>
                🌐 𝐑𝐞𝐚𝐜𝐡 𝐨𝐮𝐭 𝐭𝐨 𝐲𝐨𝐮𝐫 𝐝𝐢𝐠𝐢𝐭𝐚𝐥 𝐩𝐨𝐭𝐞𝐧𝐭𝐢𝐚𝐥:<br></br>
                Are you feeling bored with the usual?I can make awesome websites that are super fast and fun to use.I'll incorporate exciting features that help you shine online. Let's make your digital dreams come true!<br></br>
                <br></br>
                🛠️ 𝐒𝐤𝐢𝐥𝐥𝐟𝐮𝐥𝐧𝐞𝐬𝐬 𝐢𝐧 𝐂𝐨𝐝𝐞<br></br>
                As a web & chatbot developer, I blend JavaScript, TypeScript, and HTML expertise. Specializing in Next.js, Tailwind CSS, and utilizing authentication protocols like Next-auth, I ensure secure user interactions. My database proficiency involves SQL and Sanity for robust data management and SEO-friendly content. A top-tier developer with a versatile skill set, I create memorable and optimized web experiences
                <br></br>
                <br></br>
                🌟 𝐖𝐡𝐲 𝐂𝐨𝐥𝐥𝐚𝐛𝐨𝐫𝐚𝐭𝐞?<br></br>
                ✅ Dedicated to the art of high-performance web development.<br></br>
                ✅ Proven success in creating memorable user experiences.<br></br>
                ✅ Always adapting to the latest trends and technologies.<br></br>
                ✅ A problem solver at heart, passionate about pushing boundaries.<br></br>
                ✅ Open to collaboration, feedback, and constant improvement.<br></br>
                ✅ I specialize in creating websites that secure top-ranking positions using next.js.<br></br>
                ✅ I ensure websites not only attract attention but also keep users engaged, fostering longer stays.<br></br>
                <br></br>
                🌐𝐓𝐞𝐜𝐡 𝐒𝐭𝐚𝐜𝐤 𝐇𝐢𝐠𝐡𝐥𝐢𝐠𝐡𝐭𝐬:<br></br>
                💡𝐅𝐫𝐨𝐧𝐭-𝐞𝐧𝐝: HTML, CSS, JavaScript, TypeScript | React, Next.js<br></br>
                💡𝐁𝐚𝐜𝐤-𝐞𝐧𝐝/𝐂𝐥𝐨𝐮𝐝𝐬: Supabase, Prisma | Vercel, Django, Flask<br></br>
                💡𝐃𝐚𝐭𝐚𝐛𝐚𝐬𝐞: MongoDB, SQL, NeonDB, PostgreSQL<br></br>
                💡𝐔𝐈 𝐅𝐫𝐚𝐦𝐞𝐰𝐨𝐫𝐤𝐬: Tailwind CSS, Shadcn UI, Bootstrap<br></br>
                💡𝐀𝐮𝐭𝐡𝐞𝐧𝐭𝐢𝐜𝐚𝐭𝐢𝐨𝐧 & 𝐓𝐫𝐚𝐧𝐬𝐚𝐜𝐭𝐢𝐨𝐧𝐬: Stripe, Clerk, Next-Auth<br></br>
                💡𝐇𝐞𝐚𝐝𝐥𝐞𝐬𝐬 𝐂𝐌𝐒: Sanity<br></br>
                💡𝐀𝐈 𝐒𝐨𝐥𝐮𝐭𝐢𝐨𝐧𝐬: Generative AI, Open AI<br></br>
                💡𝐀𝐈 𝐂𝐡𝐚𝐭𝐛𝐨𝐭 : Dilogflow ES, Kommunicate, Flowise AI<br></br>
                <br></br>
                🚀𝐋𝐞𝐭'𝐬 𝐁𝐮𝐢𝐥𝐝 𝐘𝐨𝐮𝐫 𝐃𝐢𝐠𝐢𝐭𝐚𝐥 𝐌𝐚𝐬𝐭𝐞𝐫𝐩𝐢𝐞𝐜𝐞:<br></br>
                
                If you're seeking a web developer who doesn't just code but crafts digital masterpieces, let's connect. Together, we can transform your digital presence from functional to phenomenal.<br></br>
                <br></br>
                𝐃𝐨𝐧'𝐭 𝐬𝐞𝐭𝐭𝐥𝐞 𝐟𝐨𝐫 𝐭𝐡𝐞 𝐨𝐫𝐝𝐢𝐧𝐚𝐫𝐲; 𝐥𝐞𝐭'𝐬 𝐜𝐫𝐞𝐚𝐭𝐞 𝐬𝐨𝐦𝐞𝐭𝐡𝐢𝐧𝐠 𝐞𝐱𝐭𝐫𝐚𝐨𝐫𝐝𝐢𝐧𝐚𝐫𝐲 𝐟𝐨𝐫 𝐲𝐨𝐮𝐫 𝐛𝐫𝐚𝐧𝐝. 🌟
                
                </p> */}
                
                </div>

                <div className="flex flex-col justify-center items-center text-center">
                    <div className="bg-transparent transition-transform transform hover:scale-125">
                <Image
                    src="https://i.ibb.co/yBsrKzG/image.png"
                    alt="Profile"
                    width={300}
                    height={300}
                    className="m-auto mb-7"
                /></div>
                <div className="mt-3 w-3/4 break-words">
                    {
                        userInfo.skills.map(skill => (
                            <span className="bg-gray-200 m-1 p-2 text-sm inline-block rounded-md cursor-pointer transition-transform transform hover:scale-125">{skill}</span>
                        ))
                    }
                </div>
            </div>

        </section>
    )
}

export default About