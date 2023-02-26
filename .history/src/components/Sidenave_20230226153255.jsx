import React, { useState} from "react";
import {AiOutlineMenu} from "react-icons/ai"

const Sidenave = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav);
    };

  return (
    <div>
        <AiOutlineMenu onClick={handleNav} className="absolute top-4 right-4 z-[100] md:hidden"/>
    </div>
  )
};

export default Sidenave;
