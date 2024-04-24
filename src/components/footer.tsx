import { Github, Linkedin, Twitter, Gmail } from "@/icons/icons"
import Link from "next/link"

const Footer: React.FC = () => {
    return (
        <footer>
            <div className="flex justify-center  h-36 w-full items-center text-center break-words flex-wrap ">

                <div className="md:flex inline-block md:mb-3 gap-x-4 mt-4 justify-center items-center">

                    <div className="flex gap-x-5 mt-4 mb-2 justify-start items-center">
                        <div className="flex justify-center items-center w-10 h-10 rounded-full bg-transparent transition-transform transform hover:scale-125">
                            <Link
                                href="https://github.com/Syed-Raza-Ali">
                                <Github />
                            </Link>
                        </div>
                        <div
                            className="flex justify-center items-center w-12 h-12 shadow-lg border border-2px rounded-full border-black bg-transparent transition-transform transform hover:scale-125">
                            <Link
                                href="https://www.linkedin.com/in/syed-raza-ali-009b802a5/">
                                <Linkedin />
                            </Link>

                        </div>
                        <div
                            className="flex justify-center items-center w-12 h-12 border border-2px rounded-full border-black bg-transparent transition-transform transform hover:scale-125">
                            <Link
                                href="https://twitter.com/SYEDRAZAALI06">
                                <Twitter />
                            </Link>

                        </div>
                        <div
                            className="flex justify-center items-center w-12 h-12 border border-2px rounded-full border-black bg-transparent transition-transform transform hover:scale-125">
                            <Link
                                href="mailto:itsrazaalishah303@gmail.com">
                                <Gmail />
                            </Link>

                        </div>
                        
                    </div>
                </div>

            </div>
        </footer>

    )
}

export default Footer