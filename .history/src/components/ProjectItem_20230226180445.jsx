import React from "react";

const ProjectItem = ({img, title}) => {
  return (
    <div className="relative flex flex-row ">
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
