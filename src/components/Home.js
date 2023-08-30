import React from "react";
import { RiArrowRightCircleLine } from "react-icons/ri";
import { Link } from "react-scroll";
import Switcher from "./Switcher";
import Resume from "../asset/Resume_Kanchaporn.pdf";
import Lottie from "lottie-react";
import animation from "../asset/animation_llm15ew9.json";

const Home = () => {
  return (
    <div
      name="home"
      className="mb-20 sm:mb-0 font-Concert w-full h-screen bg-white text-black dark:bg-slate-900 transition duration-300 dark:text-[#ffbb29]"
    >
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <div className="w-8 h-8 hover:-translate-y-2 rounded-full  transition duration-300">
          <Switcher className="z-0  " />
        </div>
        <div>
          <p className=" text-2xl">Hi, my name is</p>
          <h1 className=" pb-4  text-4xl   sm:text-7xl font-bold ">Toey</h1>
          <h2 className="pb-4 text-4xl bg-gradient-to-r from-[#FF8500]  to-[#EBF600] inline-block text-transparent bg-clip-text  sm:text-7xl font-bold ">
            I'm a Frontend Web Developer
          </h2>
          <p className="text-xl py-4 ">
            A self-taught frontend web developer in building responsive website
          </p>
        </div>

        <div className="flex flex-row space-x-2 text-md">
          <Link to="work" smooth={true} duration={500}>
            <button className=" bg-[#FF8500] text-white  rounded-full   group  px-2 py-2 my-2 flex items-center transition-all duration-300 hover:bg-[#6d6875] hover:border-white hover:text-white">
              View project
              <span className="group-hover:rotate-90 duration-300">
                <RiArrowRightCircleLine size={20} className="ml-1 " />
              </span>
            </button>
          </Link>
          <a href={Resume} download="Resume_Kanchaporn_Chiangthong">
            <button className="bg-[#FF8500]  text-white  rounded-full  group  px-2 py-2 my-2 flex items-center transition-all duration-300 hover:bg-[#6d6875] hover:border-white hover:text-white">
              Resume
              <span className="group-hover:rotate-90 duration-300"></span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
