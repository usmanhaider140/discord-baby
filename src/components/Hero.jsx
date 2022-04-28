import { DownloadIcon } from "@heroicons/react/outline";
import React from "react";
import HeroLg from "../assets/Hero_lg.svg";
import HeroSm from "../assets/Hero_sm.svg";
const Hero = () => {
  return (
    <div className="bg-discord_blue pb-8 md:pb-0">
      <div className="h-screen p-7 py-9 md:h-[83vh] md:flex  relative">
        <div className="flex flex-col gap-7 md:max-w-md lg:max-w-none lg:justify-center">
          <h1 className="text-5xl text-white font-bold">Your place to talk.</h1>
          <h2 className="text-white  text-lg font-light tracking-wide lg:max-w-3xl w-full ">
            Whether you are a part of a school or worldwide art community, or
            just handful of a friends that want to spend some time together, we
            have the perfect place for you.
          </h2>
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 md:flex-col md:items-start lg:flex-row transition-all">
            <button className="w-60 text-lg hover:shadow-2xl flex gap-2 items-center bg-white text-center justify-center p-3 px-6 rounded-full hover:text-discord_blurple focus:outline-none duration-200 ease-in-out">
              <DownloadIcon className="h-6" />
              Download for Mac{" "}
            </button>
            <button className="flex hover:shadow-2xl hover:text-discord_blurple items-center text-lg bg-gray-900 w-72 px-4 p-3 font-medium text-white hover:bg-gray-800 justify-center rounded-full focus:outline-none duration-200 ease-in-out ">
              Open Discord in Your Browser{" "}
            </button>
          </div>
        </div>
        <div className="flex-grow">
          <img
            src={HeroLg}
            className="hidden md:inline absolute"
            alt="Hero Image"
          />
          <img
            src={HeroSm}
            className="absolute -left-36 mt-16 sm:-left-44 md:hidden"
            alt="Hero Image"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
