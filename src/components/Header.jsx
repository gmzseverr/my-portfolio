import { faToggleOff, faToggleOn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Header({
  isDarkMode,
  toggleDarkMode,
  isTurkish,
  toggleLanguage,
}) {
  return (
    <div className="bg-custom-gradient dark:bg-dark-gradient">
      <div className="px-5 sm:px-6 md:px-30 pt-6 w-full mx-auto flex justify-between items-center">
        <div className="w-[70%]">
          <span
            className="text-lg sm:text-sm font-bold md:w-auto pr-6 flex justify-end cursor-pointer"
            onClick={toggleLanguage}
          >
            <p className="text-[#CAF181] dark:text-[#BAB2E7]">
              {isTurkish ? "ENGLISH" : "TÜRKÇE"}
            </p>
            <p className="text-[#D9D9D9] ml-1">
              {isTurkish ? " MODE" : "'YE GEÇ"}
            </p>
          </span>
        </div>
        <div className="w-[30%] flex items-center justify-start pl-6">
          <FontAwesomeIcon
            icon={isDarkMode ? faToggleOn : faToggleOff}
            size="2x"
            className="text-[#9198fd] dark:text-yellow cursor-pointer"
            onClick={toggleDarkMode}
          />
          <p className="text-lg sm:text-sm text-[#4731D3] dark:text-[#D9D9D9] font-bold pl-3">
            {isDarkMode
              ? isTurkish
                ? "AYDINLIK MOD"
                : "LIGHT MODE"
              : isTurkish
              ? "KARANLIK MOD"
              : "DARK MODE"}
          </p>
        </div>
      </div>
    </div>
  );
}
