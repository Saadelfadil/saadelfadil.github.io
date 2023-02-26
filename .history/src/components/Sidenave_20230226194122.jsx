import React, { useState } from "react";
import { AiOutlineHome, AiOutlineMail, AiOutlineMenu, AiOutlineProject } from "react-icons/ai"
import { GrProjects } from "react-icons/gr"
import { BsPerson } from "react-icons/bs"

const Sidenave = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav((prev) => prev = !nav);
    };

  return (
    <div>
        <AiOutlineMenu onClick={handleNav} className="absolute top-4 right-4 z-[100] md:hidden"/>
        {
            nav ? (
                <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
                    <a onClick={handleNav} href="#main" className="w-[75%] flex justify-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                        <AiOutlineHome size={20}/>
                        <span className="pl-4">Home</span>
                    </a>
                    <a onClick={handleNav} href="#work" className="w-[75%] flex justify-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                        <GrProjects size={20}/>
                        <span className="pl-4">Work</span>
                    </a>
                    <a onClick={handleNav} href="#projects" className="w-[75%] flex justify-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                        <AiOutlineProject size={20}/>
                        <span className="pl-4">Projects</span>
                    </a>
                    <a onClick={handleNav} href="#main" className="w-[75%] flex justify-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 hov">
                        <BsPerson size={20}/>
                        <span className="pl-4">Resume</span>
                    </a>
                    <a onClick={handleNav} href="#contact" className="w-[75%] flex justify-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                        <AiOutlineMail size={20}/>
                        <span className="pl-4">Contact</span>
                    </a>
                </div>
            ) : ""
        }

        <div className="md:block hidden fixed top-[25%] z-10">
            <div className="flex flex-col">
                <a href="#main" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 ">
                    <AiOutlineHome />
                </a>
                <a href="#work" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 ">
                    <GrProjects />
                </a>
                <a href="#projects" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 ">
                    <AiOutlineProject />
                </a>
                <a href="#main" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 ">
                    <BsPerson />
                </a>
                <a href="#contact" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 ">
                    <AiOutlineMail />
                </a>
            </div>
        </div>
    </div>
  )
};

export default Sidenave;
