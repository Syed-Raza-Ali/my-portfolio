import { headerItems, userInfo, projects } from "@/constants/constant"
import type { Projects } from "@/models/Interfaces"
import Image from "next/image"

const Projects: React.FC = () => {
    return (
        <section
            id={headerItems.projects.page}
            className="flex flex-col text-center justify-center items-center my-10 mb-10 h-fit "
        >
            
             <h1 className="text-5xl my-6 font-bold">Projects</h1>
                 <div className="flex justify-center items-center text-center mt-3 break-words flex-wrap">
              
               
                    {
                        Object.keys(projects).map(project => (
                            <Image 
                            src = {projects[project as keyof Projects].image}
                            alt=""
                            width={300}
                            height={300}
                            className="mt-4 p-2 shadow-lg shadow-black bg-transparent transition-transform transform hover:scale-125 cursor-pointer"/>
                        ))
                    }
                
            </div>

        </section>
    )
}

export default Projects