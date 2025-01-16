import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faCodepen,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

function Footer() {
  const user = useSelector((state) => state.user);

  return (
    <div className="bg-white dark:bg-[#252128] text-center py-12 px-6 sm:px-12 md:px-24 lg:px-32 xl:px-48">
      <h1 className="text-2xl font-bold text-[#4731D3] dark:text-[#8F88FF] ">
        Send me a message!
      </h1>
      <p className="text-lg mt-4 text-black dark:text-white">
        Got a question or proposal, or just want to say hello? Go ahead.
      </p>
      <p className="mt-4 text-[#4731D3] dark:text-[#8F88FF] underline">
        {user.email}
      </p>
      <div className="mt-6 flex justify-center space-x-6">
        <a
          href={user.twitter}
          className="text-[#4731D3] dark:text-[#8F88FF] hover:animate-bounce"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a
          href={user.codepen}
          className="text-[#4731D3] dark:text-[#8F88FF] hover:animate-bounce"
        >
          <FontAwesomeIcon icon={faCodepen} size="2x" />
        </a>
        <a
          href={`mailto:${user.email}`}
          className="text-[#4731D3] dark:text-[#8F88FF] hover:animate-bounce font-light"
        >
          <FontAwesomeIcon icon={faAt} size="2x" />
        </a>
        <a
          href={user.instagram}
          className="text-[#4731D3] dark:text-[#8F88FF] hover:animate-bounce"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
