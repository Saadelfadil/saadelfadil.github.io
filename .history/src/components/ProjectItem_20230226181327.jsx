import React from "react";

const ProjectItem = ({img, title}) => {
  return (
    <div className="relative flex items-center justify-center w-full h-auto shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]">
        <img src={img} alt="/" className="rounded-xl group-hover:opacity-10" />
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
            <h3 className="text-2xl font-bold text-white tracking-wider text-center">
                {title}
            </h3>
            <p className="py-4">React Js</p>
            <a href="/">
                <p>More Info</p>
            </a>
        </div>
    </div>
  )
};

export default ProjectItem;