"use client"
import { headerItems, userInfo } from "@/constants/constant"
import { NavItems } from "@/models/Interfaces"
import { IoMenu } from "react-icons/io5";
import { useState } from "react"
import {Link as ScrollLink  } from "react-scroll"

const Header: React.FC = () => {
    const [navItem, showNavItems] = useState<boolean>(false)

    return (
        <header className="bg-white p-6 justify-between w-full shadow-xl fixed top-0 md:flex ">
            <div className="flex justify-between">
                <h2 className="text-2xl font-bold">PORTFOLIO</h2>
                <IoMenu
                    size={30}
                    className="md:hidden"
                    onClick={() => showNavItems(prevState => !prevState)}
                    
                />
                
            </div>
            <div className={`mr-8 md:space-x-6 mt-3 md:mt-0 md:block  ${navItem ? "block" : "hidden "}`}>
                {
                    Object.keys(headerItems).map(item => (
                        <ScrollLink
                        to = {headerItems[item as keyof NavItems].page}
                            key={headerItems[item as keyof NavItems].label}
                            className=" pl-28 md:pl-0 inline-block cursor-pointer font-bold p-2 text-center"
                            spy={true}
                            smooth= {true}
                        >
                            {headerItems[item as keyof NavItems].label}</ScrollLink>
                    ))
                }
            </div>
        </header>
    )
}



export default Header