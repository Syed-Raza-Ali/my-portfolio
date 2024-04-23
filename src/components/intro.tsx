"use client"
import { Twitter, Linkedin, Github, Facebook } from "@/icons/icons"
import { headerItems, userInfo } from "@/constants/constant"
import Image from "next/image"
import Link from "next/link"
const Intro: React.FC = () => {
    return (
        <section
            id={headerItems.home.page}
            className="flex flex-col md:flex-row text-center justify-center items-center mt-1 md:text-start "
        >
            <div>
                <div className="bg-transparent transition-transform transform hover:scale-125">
                    <Image
                        src="https://i.ibb.co/x56716R/Whats-App-Image-2024-04-13-at-1-32-46-AM.png"
                        alt="Profile"
                        width={400}
                        height={400}
                        className="rounded-full shadow-2xl mt-10"
                    /></div>
            </div>

            <div className="md:ml-20 sm:ml-12 md:w-1/2 ">
                <h1 className="text-6xl uppercase hidden md:block">Web developer</h1>
                <h1 className="text-2xl mt-5 md:text-3xl">
                    Hi I&#39;m <span className="text-teal-600 text-3xl md:text-4xl font-bold"> {userInfo.name} </span>
                </h1>
                <p
                    className="mt-4 mb-4 mx-6 md:mx-0"
                >{userInfo.heading}</p>

                <div className="flex  gap-x-4 mt-8 justify-center items-center md:justify-start">
                    <div className="flex justify-center items-center w-10 h-10 rounded-full bg-transparent transition-transform transform hover:scale-125">
                        <Link
                            href="https://github.com/Syed-Raza-Ali">
                            <Github />
                        </Link>
                    </div>
                    <div
                        className="flex justify-center items-center w-12 h-12 border border-2px rounded-full border-black bg-transparent transition-transform transform hover:scale-125">
                        <Link
                            href="https://www.linkedin.com/in/syed-raza-ali-009b802a5/">
                            <Linkedin />
                        </Link>

                    </div>
                    <div
                        className="flex justify-center  items-center w-12 h-12 border border-2px rounded-full border-black bg-transparent transition-transform transform hover:scale-125">
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
        </section>
    )
}

export default Intro