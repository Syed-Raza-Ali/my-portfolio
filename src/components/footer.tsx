import { Github, Linkedin, Twitter, Facebook } from "@/icons/icons"
import Link from "next/link"

const Footer: React.FC = () => {
    return (
        <footer>
            <div className="flex justify-center  h-36 w-full items-center text-center break-words flex-wrap ">

                <div className="md:flex inline-block md:mb-3 gap-x-4 mt-4 justify-center items-center">

                    {/* <div
                    className="font-bold text-3xl text-center mb-6 md:mb-0 md:mr-11"

                >Contact M</div> */}

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
                        <div className="flex justify-center border  border-2px  border-black  items-center w-12 h-12 rounded-full bg-transparent transition-transform transform hover:scale-125"><a className="icons-contactme" href="mailto:itsrazaalishah303@gmail.com" aria-label="email link"><svg
                            xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 20 20">
                            <g fill="">
                                <path
                                    d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z">
                                </path>
                                <path
                                    d="m19 8.839l-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z">
                                </path>
                            </g>
                        </svg></a>
                        </div>
                    </div>
                </div>

            </div>
        </footer>

    )
}

export default Footer