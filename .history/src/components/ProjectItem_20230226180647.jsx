import React from "react";

const ProjectItem = ({img, title}) => {
  return (
    <div className="relative flex items-center justify-center w-full h-auto shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001]">
        <img src={img} alt="/" className="rounded-xl group-hover:opacity-10" />
        <div className="hidden">
            <h3>
                {title}
            </h3>
        </div>
    </div>
  )
};

export default ProjectItem;
