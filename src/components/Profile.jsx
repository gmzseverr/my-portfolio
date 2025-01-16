import React from "react";
import { useSelector } from "react-redux";

function Profile() {
  const user = useSelector((state) => state.user);
  return (
    <div className="bg-[#4731D3] dark:bg-[#171043] ">
      <div className="py-24 px-6 sm:px-12 md:px-24 lg:px-32 xl:px-48 ">
        <h2 className="text-5xl text-[#CBF281] font-bold mb-6 text-center md:text-left">
          Profile
        </h2>
        <div className="flex flex-col lg:flex-row lg:justify-between ">
          <div className="w-full lg:w-1/3 flex flex-col gap-6 lg:gap-0 lg:items-start text-white md:items-center sm:items-center ">
            <h3 className="text-3xl mb-6">Basic Information</h3>

            <span className="flex items-center mb-6">
              <h4 className="text-[#CBF281] mr-2">Birth Date:</h4>
              <p>{user.birthDate}</p>
            </span>

            <span className="flex items-center mb-6">
              <h4 className="text-[#CBF281] mr-2">Birth Place:</h4>
              <p>{user.birthPlace}</p>
            </span>

            <span className="flex items-center mb-6">
              <h4 className="text-[#CBF281] mr-2">Education:</h4>
              <p>{user.education}</p>
            </span>
            <span className="flex items-center mb-6">
              <h4 className="text-[#CBF281] mr-2">Preffered Roles:</h4>
              <p>{user.role}</p>
            </span>
          </div>

          <div className="w-full lg:w-1/3 flex justify-center lg:justify-center md:py-8 sm:py-8">
            <img
              src="src/assets/profile.png"
              alt="Profile"
              className=" -ml-5 object-cover rounded-[10px] boxShadow w-72 h-72 shadow-xl"
            />
          </div>

          <div className="w-full lg:w-1/3 text-white   md:items-center sm:items-center">
            <h2 className="text-3xl text-center md:text-left  mb-6">
              About Me
            </h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
              aut, odit laborum aliquam voluptatum nisi mollitia. Mnima
              accusamus ratione soluta aperiam sit voluptate? Dicta quod
              deserunt quam temporibus cumque magnam!{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
