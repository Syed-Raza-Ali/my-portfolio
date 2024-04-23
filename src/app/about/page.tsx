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
                <p className="mt-8 mb-4 mx-6 md:mx-0">

                    As a web & chatbot developer, I blend JavaScript, TypeScript, and HTML expertise. Specializing in Next.js, Tailwind CSS, and utilizing authentication protocols like Next-auth, I ensure secure user interactions. I'm proficient in integrating with various chatbot platforms like Dialogflow, Kommunicate, and Flowise AI. My database proficiency involves SQL and Sanity for robust data management and SEO-friendly content. A top-tier developer with a versatile skill set, I create memorable and optimized web experiences<br></br>
                    <br></br>
                    🌐𝐓𝐞𝐜𝐡 𝐒𝐭𝐚𝐜𝐤 𝐇𝐢𝐠𝐡𝐥𝐢𝐠𝐡𝐭𝐬:🌐<br></br>
                    💡𝐅𝐫𝐨𝐧𝐭-𝐞𝐧𝐝: HTML, CSS, JavaScript, TypeScript | React, Next.js<br></br>
                    💡𝐁𝐚𝐜𝐤-𝐞𝐧𝐝/𝐂𝐥𝐨𝐮𝐝𝐬: Supabase, Prisma | Vercel, Django, Flask<br></br>
                    💡𝐃𝐚𝐭𝐚𝐛𝐚𝐬𝐞: MongoDB, SQL, NeonDB, PostgreSQL<br></br>
                    💡𝐔𝐈 𝐅𝐫𝐚𝐦𝐞𝐰𝐨𝐫𝐤𝐬: Tailwind CSS, Shadcn UI, Bootstrap<br></br>
                    💡𝐀𝐮𝐭𝐡𝐞𝐧𝐭𝐢𝐜𝐚𝐭𝐢𝐨𝐧 & 𝐓𝐫𝐚𝐧𝐬𝐚𝐜𝐭𝐢𝐨𝐧𝐬: Stripe, Clerk, Next-Auth<br></br>
                    💡𝐇𝐞𝐚𝐝𝐥𝐞𝐬𝐬 𝐂𝐌𝐒: Sanity<br></br>
                    💡𝐀𝐈 𝐒𝐨𝐥𝐮𝐭𝐢𝐨𝐧𝐬: Generative AI, Open AI<br></br>
                    💡𝐀𝐈 𝐂𝐡𝐚𝐭𝐛𝐨𝐭 : Dilogflow ES, Kommunicate, Flowise AI<br></br>



                </p>
            </div>

            <div className="flex flex-col justify-center items-center text-center">
                <div className="bg-transparent transition-transform transform hover:scale-125">
                    <Image
                        src="https://i.ibb.co/yBsrKzG/image.png"
                        alt="Profile"
                        width={400}
                        height={400}
                        className="m-auto mb-7"
                    /></div>
                <div className="mt-5 w-3/4 break-words">
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