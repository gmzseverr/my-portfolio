import React, { useEffect, useState } from "react";
import axios from "axios";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("src/projects.json");
        setProjects(response.data.projects);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-[#CBF281] dark:bg-[#1A210B] ">
      <div className="py-24 px-6 sm:px-12 md:px-24 lg:px-32 xl:px-48">
        <h2 className="text-[#4731D3] dark:text-[#B5D872] text-3xl sm:text-4xl md:text-5xl font-bold text-left mb-6">
          Projects
        </h2>
        <div className="flex flex-col items-start mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="w-full max-w-[930px] md:h-[320px] md:flex bg-white dark:bg-[#2A2727] rounded-xl mb-8 items-center gap-x-4 shadow-xl"
            >
              <div className="w-full md:w-1/3 h-[320px] flex-shrink-0 rounded-lg md:rounded-tl-lg md:rounded-bl-lg md:rounded-r-none overflow-hidden relative">
                <img
                  src={project.picture}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold text-[#4731D3] dark:text-[#C1BAED] mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-700 dark:text-white ">{project.text}</p>
                <div className="pt-5">
                  {project.tags.map((tag, index) => (
                    <button
                      key={index}
                      className="bg-[#4731D3] dark:bg-[#8173DA] text-white px-5 py-1.5 rounded-3xl mr-3"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
