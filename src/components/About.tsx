import { headerItems, userInfo } from "@/constants/constant"
import Image from "next/image"

const About: React.FC = () => {
    return (
        <section
            id={headerItems.about.page}
            className="h-screen flex flex-col md:flex-row text-center justify-center items-center  md:text-start my-20"
        >
            
            <div className="m-4 md:ml-20 sm:ml-12 md:w-1/2 ">
                <h1 className="text-5xl my-6 ">About</h1>
                <h2 className="text-3xl my-4 ">Get to know me! </h2>
                <p
                className="mt-4 mb-4 mx-6 md:mx-0"> {userInfo.about}</p>
                
                </div>

                <div className="flex flex-col justify-center items-center text-center">
                <Image
                    src="/../raza.jpeg"
                    alt="Profile"
                    width={300}
                    height={300}
                    className="m-auto"
                />
                <div className="mt-3 w-3/4 break-words">
                    {
                        userInfo.skills.map(skill => (
                            <span className="bg-gray-200 m-1 p-2 text-sm inline-block rounded-md">{skill}</span>
                        ))
                    }
                </div>
            </div>

        </section>
    )
}

export default About