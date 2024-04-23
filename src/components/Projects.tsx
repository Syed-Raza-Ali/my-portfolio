import { headerItems, userInfo, projects } from "@/constants/constant"
import type { Projects } from "@/models/Interfaces"
import Image from "next/image"

const Projects: React.FC = () => {
    return (
        <section
            id={headerItems.projects.page}
            className="flex flex-col text-center justify-center items-center my-40 mb-10 "
        >

            <h1 className="text-5xl my-6">Projects</h1>
            <div className="flex justify-center items-center text-center mt-3 break-words flex-wrap ">


                {
                    Object.keys(projects).map(project => (
                        <Image
                            src={projects[project as keyof Projects].image}
                            alt=""
                            width={300}
                            height={300}
                            className=" mt-4 p-2 bg-transparent transition-transform transform hover:scale-125" />
                    ))
                }

            </div>

        </section>
    )
}

export default Projects