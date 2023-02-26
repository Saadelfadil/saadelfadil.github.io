import React from "react";
import {AiOutlineMenu} from "react-icons/ai"

const Sidenave = () => {
    // const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav((prev) => prev = !nav);
    };

  return (
    <div>
        <AiOutlineMenu onClick={handleNav} className="bg-black"/>
    </div>
  )
};

export default Sidenave;
