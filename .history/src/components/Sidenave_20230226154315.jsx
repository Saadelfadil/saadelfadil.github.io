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
                    <a href="main" className="w-[75%] flex justify-center round">
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
