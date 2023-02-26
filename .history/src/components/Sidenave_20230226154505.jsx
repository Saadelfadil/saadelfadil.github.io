import React, { useState } from "react";
import {AiOutlineHome, AiOutlineMenu} from "react-icons/ai"

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
                    <a href="main" className="w-[75%] flex justify-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 eas">
                        <AiOutlineHome size={20}/>
                        <span className="pl-4">Home</span>
                    </a>
                </div>
            ) : ""
        }
    </div>
  )
};

export default Sidenave;
