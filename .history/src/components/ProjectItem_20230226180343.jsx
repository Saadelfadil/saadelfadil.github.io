import React from "react";

const ProjectItem = ({img, title}) => {
  return (
    <div>
        <img src={img} alt="/" />
        <div className="hidden">
            <h3>
                {title}
            </h3>
        </div>
    </div>
  )
};

export default ProjectItem;
