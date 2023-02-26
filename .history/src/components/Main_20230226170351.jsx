import React from "react";
import { TypeAnimation } from "react-type-animation"
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"

const Main = () => {
  return (
    <div id="main">
        <img className="w-full h-screen object-cover object-right " src="/src/assets/saadelfadil.jpg" alt="saadelfadil" />
        <div className="w-full h-screen absolute top-0 left-0 bg-white/50 ">
            <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center ">
                <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">I'm Saad El fadil</h1>
                <h2 className="flex sm:text-2xl ">I'm a
                    <TypeAnimation
                        sequence={[
                            'Software Engineer', // Types 'One'
                            1000, // Waits 1s
                            'Videomaker', // Deletes 'One' and types 'Two'
                            2000, // Waits 2s
                        ]}
                        wrapper="div"
                        cursor={true}
                        repeat={Infinity}
                        style={{ fontSize: '1em', paddingLeft: "5px" }}
                    />
                </h2>
                <div>
                        <FaInstagram size={20} className="cursor-pointer"/>
                        <FaLinkedin size={20} className="cursor-pointer"/>
                        <FaGithub size={20} className="cursor-pointer"/>
                </div>
            </div>
        </div>
    </div>
  )
};

export default Main;
