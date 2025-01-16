import React from "react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Hero() {
  return (
    <div className="bg-custom-gradient dark:bg-dark-gradient ml:bg-[#4731D3]  sm:bg-[#4731D3] w-full min-h-screen">
      <div className="max-w-[960px] py-40 px-6 md:px-30 sm:px-5 w-full mx-auto flex flex-col items-center md:flex-row md:justify-between">
        <div className="max-w-[530px] text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-[inter] font-bold text-[#CBF281]  ">
            I'm a Frontend <br />
            Developer...
          </h1>
          <p className="text-base font-[inter] md:text-xl  lg:text-2xl text-white flex md:flex-wrap pt-9">
            ...who likes to craft solid and scalable frontend products with
            great user experiences.
          </p>
          <div className="flex justify-center md:justify-start mt-6 gap-4">
            <div className="bg-gray-200 dark:bg-[#252128] w-32 h-14 rounded-lg p-2 flex items-center">
              <FontAwesomeIcon
                icon={faGithub}
                size="2x"
                className="text-[#4731D3] dark:text-white mr-2"
              />
              <button className="text-[#4731D3] dark:text-white text-lg font-normal">
                Github
              </button>
            </div>
            <div className="bg-gray-200 dark:bg-[#252128] w-32 h-14 rounded-lg p-2 flex items-center">
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2x"
                className="text-[#4731D3] dark:text-white mr-2"
              />
              <button className="text-[#4731D3] dark:text-white text-lg font-normal">
                LinkedIn
              </button>
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 mt-6 md:mt-0 shadow-xl">
          <img
            src="https://s3-alpha-sig.figma.com/img/76b0/6993/b04fd1fa29a883e2f4b8b8577a5c82eb?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fqp7Jlx5SIM4nT7aGH-ttCOdd5uQH2dYJID48AWTFAY--WSnAsgpcM8b7iDBYGpPZAgE~B53Nu0FL5BYmgmPKX1hEAR9TyXrOSYivufuQbOrgW3luWqp6V6JHBJeZbiuyccMEWkhV84BpmpajD-8GnuWy0jzZqzonQhr2NVUVHKJtbgd-~3QtrHYhRkmlsZEwtin4ZuKeNBp2067U6GqCbqdgh3UMWvir3eCN34f24AHRfKK~7cB9UvElzvoRo-hl4nYrjPB9-j9yxyjc-wpup2DYnuxJTeHm8PbiGgS~FV7ZGKRUIW05f3twKCfgOo5GtcnY33zuGt2U2bQmOru3A__"
            alt="Hero"
            className="w-[20rem] h-[22rem] rounded-2xl object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
