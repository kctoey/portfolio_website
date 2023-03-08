import Html from "../asset/html.png";
import Css from "../asset/css.png";
import Javascript from "../asset/javascript.png";
import Firebase from "../asset/firebase.png";
import React from "../asset/react.png";
import Tailwind from "../asset/tailwind.png";
import Reactlogo from "../asset/react.png";
import Sass from "../asset/sass.png";
import Vite from "../asset/vite.png";
import Git from "../asset/Git.png";
import Mysql from "../asset/Mysql.png";

const Skills = () => {
  return (
    <div
      name="skills"
      className="font-Concert bg-white text-black w-screen sm:w-full h-[1000px] sm:h-screen dark:bg-slate-900 transition duration-300 dark:text-[#ffbb29]"
    >
      <div className="max-w-[1000px] mx-auto py-8 px-4 flex flex-col justify-center h-full">
        <div>
          <p className="text-4xl inline border-b-4  border-pink-600 uppercase">
            Skills
          </p>
          <p className="py-2 text-xl">
            These are the technologies I've worked with
          </p>
        </div>

        <div className=" text-2xl w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Html} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Css} alt="Css icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Javascript} alt="JS icon" />
            <p className="my-4">Javascript</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Reactlogo} alt="React icon" />
            <p className="my-4">React</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="Tailwind icon" />
            <p className="my-4">Tailwind</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Firebase} alt="Firebase icon" />
            <p className="my-4">Firebase</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Git} alt="Git icon" />
            <p className="my-4">Git</p>
          </div>
          <div className="hover:scale-110 duration-500 ">
            <img className="w-20   mx-auto" src={Sass} alt="Sass icon" />
            <p className="my-10">Sass</p>
          </div>
          <div className="hover:scale-110 duration-500 ">
            <img className="w-20   mx-auto" src={Vite} alt="Vite icon" />
            <p className="my-10">Vite</p>
          </div>
          <div className="hover:scale-110 duration-500 ">
            <img className="w-20   mx-auto" src={Mysql} alt="Mysql icon" />
            <p className="mt-10 pt-8">Mysql</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
