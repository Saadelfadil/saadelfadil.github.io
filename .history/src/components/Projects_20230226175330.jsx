import React from "react";
import ProjectItem from "./ProjectItem";
import img from "../assets/saadelfadil.jpg";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1028px] m-auto md:pl-20 p-4 py-16">
        <h1 className="text-4xl font-bold text-center text-[#001b5e] ">Projects</h1>
        <p className="text-center py-8">
            An application that provides feedback data of students reviews to the 1337 school for every meal served in the day in a dashboard. made using NextJs, Django and PostgreSQL, plus an RFID badge scanner connected to a raspberry pi.
        </p>
        <div className="grid sm:grid-cols-2 gap-12">
            <ProjectItem img={} title/>
            <ProjectItem img={} title/>
            <ProjectItem img={} title/>
            <ProjectItem img={} title/>
        </div>
    </div>
  )
};

export default Projects;
