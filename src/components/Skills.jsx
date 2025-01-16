import React, { useEffect, useState } from "react";
import axios from "axios";

function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("src/data/skills.json");
        setSkills(response.data.skills);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="py-24 px-6 sm:px-12 md:px-24 lg:px-32 xl:px-48 dark:bg-[#252128] ">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <h2 className="text-5xl font-bold text-[#4832D3] dark:text-[#CBF281] mb-6 text-center md:text-left w-full md:w-auto pb-6">
          Skills
        </h2>
        <div className="w-full md:w-3/4 lg:w-4/5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:ml-10">
          {skills.map((skill) => (
            <div key={skill.id} className="flex flex-col items-center gap-3">
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-[100px] h-[100px] object-cover rounded-md shadow-xl mb-2"
              />
              <span className="text-gray-500 dark:text-white text-base font-normal text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
