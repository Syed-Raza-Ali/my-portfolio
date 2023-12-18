import { Github, Linkedin, Twitter, Facebook } from "@/icons/icons"
import Link from "next/link"

const Footer: React.FC = () => {
    return (

        <div className="flex justify-center h-32 w-full items-center text-center mt-3 shadow-black shadow-2xl break-words flex-wrap ">

            <div className="md:flex inline-block md:mb-3 gap-x-4 mt-4 justify-center items-center">

                <div
                    className="font-bold text-3xl text-center mb-6 md:mb-0 md:mr-11"

                >Stay Connected :</div>

                <div className="flex gap-x-5 mt-4 mb-2 justify-start items-center">

                    <div className="flex justify-center items-center w-10 h-10 rounded-full ">
                        <Link
                            href="https://github.com/Syed-Raza-Ali">
                            <Github />
                        </Link>
                    </div>
                    <div
                        className="flex justify-center items-center w-12 h-12 border border-2px rounded-full border-black">
                        <Link
                            href="https://www.linkedin.com/in/syed-raza-ali-009b802a5/">
                            <Linkedin />
                        </Link>

                    </div>
                    <div
                        className="flex justify-center items-center w-11 h-11 border border-2px rounded-full border-black">
                        <Link
                            href="https://twitter.com/SYEDRAZAALI06">
                            <Twitter />
                        </Link>

                    </div>
                    <div className="flex justify-center items-center w-10 h-10 rounded-full ">
                        <Link
                            href="https://www.facebook.com/syedrazaali303?mibextid=ZbWKwL">
                            <Facebook />
                        </Link>
                    </div>
                </div>
            </div>

        </div>


    )
}

export default Footer