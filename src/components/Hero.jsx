import React from "react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Hero({ isTurkish }) {
  return (
    <div className="bg-custom-gradient dark:bg-dark-gradient w-full min-h-screen">
      <div className="max-w-[960px] py-40 px-6 md:px-30 sm:px-5 w-full mx-auto flex flex-col items-center md:flex-row md:justify-between">
        <div className="max-w-[530px] text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-[#CBF281]">
            {isTurkish
              ? "Bir Frontend Geliştiricisi..."
              : "I'm a Frontend Developer..."}
          </h1>
          <p className="text-base md:text-xl lg:text-2xl text-white flex md:flex-wrap pt-9">
            {isTurkish
              ? "...güçlü ve ölçeklenebilir frontend ürünleri geliştirerek harika kullanıcı deneyimleri oluşturmayı seviyorum."
              : "...who likes to craft solid and scalable frontend products with great user experiences."}
          </p>

          <div className="flex justify-center md:justify-start mt-6 gap-4">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-200 dark:bg-[#252128] w-32 h-14 rounded-lg p-2 flex items-center"
            >
              <FontAwesomeIcon
                icon={faGithub}
                size="2x"
                className="text-[#4731D3] dark:text-white mr-2"
              />
              <span className="text-[#4731D3] dark:text-white text-lg font-normal">
                Github
              </span>
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-200 dark:bg-[#252128] w-32 h-14 rounded-lg p-2 flex items-center"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2x"
                className="text-[#4731D3] dark:text-white mr-2"
              />
              <span className="text-[#4731D3] dark:text-white text-lg font-normal">
                LinkedIn
              </span>
            </a>
          </div>
        </div>

        <div className="flex-shrink-0 mt-6 md:mt-0 shadow-xl">
          <img
            src="./b04fd1fa29a883e2f4b8b8577a5c82eb.png"
            alt="Hero"
            className="w-[20rem] h-[22rem] rounded-2xl object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
