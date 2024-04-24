"use client"
import { IoMenu } from "react-icons/io5";
import { useState } from "react"
import Link from "next/link";

const Header: React.FC = () => {
    const [navItem, showNavItems] = useState<boolean>(false)

    return (
        <header className="bg-white p-6 justify-between w-full items-center border-b-4 h-28 top-0 md:flex ">
            <div className="flex justify-between bg-transparent transition-transform transform hover:scale-110 ">
                <Link href='/'>  <h2 className="text-4xl font-bold ">PORTFOLIO</h2> </Link>
                <IoMenu
                    size={30}
                    className="md:hidden "
                    onClick={() => showNavItems(prevState => !prevState)}
                />
            </div>
            <div className={`mr-8 md:space-x-6 mt-3 md:mt-0 md:block  ${navItem ? "block" : "hidden "}`}>
                <Link href='/' className="font-bold ">Home</Link>
                <Link href='/about' className="font-bold">About</Link>
                <Link href='/projects' className="font-bold">Projects</Link>
            </div>
        </header>
    )
}



export default Header