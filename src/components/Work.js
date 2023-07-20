import React from "react";
import Easybank from "../asset/easybank1.JPG";
import Advice from "../asset/advice.JPG";
import FoodApp from "../asset/shoppingcart.JPG";
import MealApp from "../asset/mealproject.JPG";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import Drink from "../asset/drink.JPG";
import Todo from "../asset/todo.JPG";
import Ledonhome from "../asset/ledonhome.JPG";
import poster1 from "../asset/poster1.jpg";
import poster2 from "../asset/poster2.jpg";
import poster3 from "../asset/poster3.jpg";
const Work = () => {
  return (
    <div
      name="work"
      className="font-Concert w-screen sm:w-full  bg-white text-black dark:bg-slate-900 transition duration-300 dark:text-[#ffbb29]"
    >
      <div className="max-w-[1000px]  mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="my-6 pt-16">
          <p className=" text-4xl pt-4  inline border-b-4 border-pink-600 uppercase">
            My Projects
          </p>
        </div>
        {/* grid container */}
        <div className=" mt-4  flex flex-row">
          <img
            className="w-96 hover:scale-110 duration-500  mt-8 mx-auto"
            src={poster2}
            alt="Express icon"
          />
          <div className="flex flex-col justify-center items-center">
            <h2 className="pt-4 text-2xl text-pink-600">
              THAI ASAHI DENSO CO., LTD.
            </h2>
            <p>Design vinyl for Company Outing Trip in 2018</p>
          </div>
        </div>
        <div className="mt-4 flex flex-row">
          <img
            className="w-96 hover:scale-110 duration-500  mt-8 mx-auto"
            src={poster1}
            alt="Express icon"
          />
          <div className="flex flex-col justify-center items-center">
            <h2 className="pt-4 text-2xl text-pink-600">
              THAI ASAHI DENSO CO., LTD.
            </h2>
            <p>Design vinyl for Company Outing Trip in 2019</p>
          </div>
        </div>

        <div className=" mt-4 mb-16  flex flex-row ">
          <img
            className="w-48 hover:scale-110 duration-500 mt-8 mx-auto "
            src={poster3}
            alt="Express icon"
          />
          <div className="flex flex-col justify-center items-center w-80 ">
            <h2 className="pt-4 text-2xl text-center text-pink-600">
              Samnakthong Subdistrict Administrative Organization
            </h2>
            <p>Design poster for Rabies Prevention Project </p>
          </div>
        </div>
        {/* grid item */}

        <div className=" p-4 bg-white dark:bg-slate-800 rounded-xl shadow-2xl transition duration-200 hover:scale-105 ">
          <div
            style={{ backgroundImage: `url(${Ledonhome})` }}
            className=" group container rounded-md flex justify-center items-center mx-auto content-div "
          >
            {/* Hover effect */}

            <div className="opacity-0 group-hover:opacity-100  transition duration-200  ">
              <span className="text-2xl  text-white tracking-wider ">
                LEDONHOME e-commerce website
              </span>
              <div className="pt-8 text-center invisible sm:visible">
                <a href="https://www.ledonhome.com/">
                  <button className="h-12 text-center rounded-full px-4 py-3 m-2 bg-amber-600 text-white font-bold text-lg hover:bg-amber-500 hover:text-white">
                    <AiOutlineEye />
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div>
            <h2 className="pt-4 text-2xl">LEDONHOME e-commerce website</h2>
            <p>Design & Develop website for sell product with team</p>
          </div>
          <div className="flex flex-row space-x-2 text-center py-2  text-white">
            <h2 className="bg-pink-600 dark:bg-amber-600 w-16 rounded-md">
              Next.js
            </h2>
            <h2 className="bg-pink-600 dark:bg-amber-600 w-16 rounded-md">
              MUI
            </h2>
            <h2 className="bg-pink-600 dark:bg-amber-600 w-20 rounded-md">
              Tailwind
            </h2>
            <h2 className="bg-pink-600 dark:bg-amber-600 w-16 rounded-md">
              MongoDB
            </h2>
            <h2 className="bg-pink-600 dark:bg-amber-600 w-16 rounded-md">
              Express
            </h2>
            <h2 className="bg-pink-600 dark:bg-amber-600 w-16 rounded-md">
              Node.js
            </h2>
          </div>
          <div>
            <div className=" text-center visible md:invisible md:hidden ">
              <a href="https://www.ledonhome.com/">
                <button className="h-12 text-center rounded-full px-4 py-3 m-2 bg-amber-600 text-white font-bold text-lg hover:bg-amber-500 hover:text-white">
                  <AiOutlineEye />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
