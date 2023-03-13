import React, { useState } from "react";

import { HiOutlineMail } from "react-icons/hi";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="font-Concert z-20  fixed w-screen h-[80px] flex justify-between items-center pr-8 bg-white text-black shadow-xl dark:bg-slate-900 dark:border-b-[1px] dark:border-b-gray-800 transition duration-300 dark:text-[#ffbb29]">
      <div className="pl-8">
        <h1 className="text-4xl sm:visible invisible">K</h1>
      </div>
      <ul className="hidden sm:flex space-x-8 cursor-pointer  pr-20">
        <li className="py-6 text-xl hover:scale-110 transition duration-100">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>

        <li className="py-6 text-xl hover:scale-110 transition duration-100">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-xl hover:scale-110 transition duration-100">
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-xl hover:scale-110 transition duration-100">
          <Link to="education" smooth={true} duration={500}>
            Education
          </Link>
        </li>
        {/* <li className="py-6 text-xl hover:scale-110 transition duration-100">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li> */}
      </ul>

      <div onClick={handleClick} className="sm:hidden z-10 cursor-pointer  ">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : " absolute space-y-4  top-0 left-0 w-full h-screen flex flex-col justify-center items-center  bg-white text-black  dark:bg-slate-900 dark:text-white "
        }
      >
        <li className="cursor-pointer py-6 text-xl hover:scale-110 transition duration-100">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>

        <li className="cursor-pointer py-6 text-xl hover:scale-110 transition duration-100">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="cursor-pointer py-6 text-xl hover:scale-110 transition duration-100">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className=" cursor-pointer py-6 text-xl hover:scale-110 transition duration-100">
          <Link
            onClick={handleClick}
            to="education"
            smooth={true}
            duration={500}
          >
            Education
          </Link>
        </li>
        {/* <li className=" cursor-pointer py-6 text-xl hover:scale-110 transition duration-100">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li> */}
      </ul>

      <div className=" hidden lg:flex fixed flex-col top-[35%]  left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-0 p-2 duration-300 bg-blue-600 ">
            <a
              className="flex justify-between items-center w-full text-gray-300 "
              href="mailto:toeyknchprn@gmail.com"
            >
              E-mail
              <HiOutlineMail size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-0 p-2 duration-300 bg-[#333333]  ">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/kctoey"
            >
              Github
              <FaGithub size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
