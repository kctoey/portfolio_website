import React from "react";
import Easybank from "../asset/easybank1.JPG";
import Advice from "../asset/advice.JPG";
import FoodApp from "../asset/shoppingcart.JPG";
import MealApp from "../asset/mealproject.JPG";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import Drink from "../asset/drink.JPG";
import Todo from "../asset/todo.JPG";
const Work = () => {
  return (
    <div
      name="work"
      className="font-Concert w-screen sm:w-full md:h-screen bg-white text-black dark:bg-slate-900 transition duration-300 dark:text-[#ffbb29]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="my-6 pt-16">
          <p className=" text-4xl pt-4  inline border-b-4 border-pink-600 uppercase">
            Personal Projects
          </p>
        </div>
        {/* grid container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">
          {/* grid item */}
          <div className=" p-4 bg-white dark:bg-slate-800 rounded-xl shadow-2xl transition duration-200 hover:scale-105 ">
            <div
              style={{ backgroundImage: `url(${Easybank})` }}
              className=" group container rounded-md flex justify-center items-center mx-auto content-div "
            >
              {/* Hover effect */}

              <div className="opacity-0 group-hover:opacity-100  transition duration-200  ">
                <span className="text-2xl  text-white tracking-wider ">
                  Easybank website
                </span>
                <div className="pt-8 text-center invisible sm:visible">
                  <a href="https://easybank-bvn.pages.dev/">
                    <button className="h-12 text-center rounded-full px-4 py-3 m-2 bg-amber-600 text-white font-bold text-lg hover:bg-amber-500 hover:text-white">
                      <AiOutlineEye />
                    </button>
                  </a>
                  <a href="https://github.com/kctoey/Easybank_Project.git">
                    <button className="h-12 text-center rounded-full px-4 py-3 m-2 bg-gray-700 text-white font-bold text-lg hover:bg-gray-500 hover:text-white">
                      <AiFillGithub />
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h2 className="pt-4 text-2xl">Easy bank Website</h2>
              <p>
                Create a website design based on the Frontend Mentor. Website is
                responsive, includes animations, and is mobile-friendly
              </p>
            </div>
            <div className="flex flex-row space-x-2 text-center py-2  text-white">
              <h2 className="bg-pink-600 dark:bg-amber-600 w-16 rounded-md">
                React
              </h2>
              <h2 className="bg-pink-600 dark:bg-amber-600 w-20 rounded-md">
                Tailwind
              </h2>
              <h2 className="bg-pink-600 dark:bg-amber-600 w-16 rounded-md">
                AOS
              </h2>
            </div>
            <div>
              <div className=" text-center visible md:invisible md:hidden ">
                <a href="https://easybank-bvn.pages.dev/">
                  <button className="h-12 text-center rounded-full px-4 py-3 m-2 bg-amber-600 text-white font-bold text-lg hover:bg-amber-500 hover:text-white">
                    <AiOutlineEye />
                  </button>
                </a>
                <a href="https://github.com/kctoey/Easybank_Project.git">
                  <button className="h-12 text-center rounded-full px-4 py-3 m-2 bg-gray-700 text-white font-bold text-lg hover:bg-gray-500 hover:text-white">
                    <AiFillGithub />
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow-2xl transition duration-200 hover:scale-105">
            <div
              style={{ backgroundImage: `url(${Advice})` }}
              className=" group container rounded-md flex justify-center items-center mx-auto content-div "
            >
              {/* Hover effect */}

              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl  text-white tracking-wider ">
                  Random Advice
                </span>
                <div className="pt-8 text-center">
                  <a href="https://randomadvice.pages.dev/">
                    <button className="h-12 text-center rounded-full px-4 py-3 m-2 bg-amber-600 text-white font-bold text-lg hover:bg-amber-500 hover:text-white">
                      <AiOutlineEye />
                    </button>
                  </a>
                  <a href="https://github.com/kctoey/Randomadvice">
                    <button className="h-12 text-center rounded-full px-4 py-3 m-2 bg-gray-700 text-white font-bold text-lg hover:bg-gray-500 hover:text-white">
                      <AiFillGithub />
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h2 className="pt-4 text-2xl">Random Advice</h2>
              <p>
                Create random quote by using Advice Slip JSON API with
                Dark/Light Mode
              </p>
            </div>
            <div className="flex flex-row space-x-2 text-center py-2 text-white">
              <h2 className="bg-pink-600  dark:bg-amber-600 w-24 rounded-md">
                Javascript
              </h2>
              <h2 className="bg-pink-600  dark:bg-amber-600 w-20 rounded-md">
                Tailwind
              </h2>
              <h2 className="bg-pink-600  dark:bg-amber-600 w-16 rounded-md">
                API
              </h2>
            </div>

            <div>
              <div className=" text-center visible md:invisible ">
                <a href="https://easybank-bvn.pages.dev/">
                  <button className="h-12 text-center rounded-full px-4 py-3 m-2 bg-amber-600 text-white font-bold text-lg hover:bg-amber-500 hover:text-white">
                    <AiOutlineEye />
                  </button>
                </a>
                <a href="https://github.com/kctoey/Easybank_Project.git">
                  <button className="h-12 text-center rounded-full px-4 py-3 m-2 bg-gray-700 text-white font-bold text-lg hover:bg-gray-500 hover:text-white">
                    <AiFillGithub />
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow-2xl  transition duration-200 hover:scale-105">
            <div
              style={{ backgroundImage: `url(${MealApp})` }}
              className=" group container rounded-md flex justify-center items-center mx-auto content-div "
            >
              {/* Hover effect */}

              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl  text-white tracking-wider ">
                  Search Meal App
                </span>
                <div className="pt-8 text-center ">
                  <a href="https://meal-app.pages.dev/">
                    <button className="h-12 text-center rounded-full px-4 py-3 m-2 bg-amber-600 text-white font-bold text-lg hover:bg-amber-500 hover:text-white">
                      <AiOutlineEye />
                    </button>
                  </a>
                  <a href="https://github.com/kctoey/Recipes-App.git">
                    <button className="h-12 text-center rounded-full px-4 py-3 m-2 bg-gray-700 text-white font-bold text-lg hover:bg-gray-500 hover:text-white">
                      <AiFillGithub />
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h2 className="pt-4 text-2xl">Search Meal App</h2>
              <p>
                Create search meal app for view recipe by using MealDB API and
                random meal function
              </p>
            </div>
            <div className="flex flex-row space-x-2 text-center py-2 text-white">
              <h2 className="bg-pink-600  dark:bg-amber-600 w-16 rounded-md">
                React
              </h2>
              <h2 className="bg-pink-600  dark:bg-amber-600 w-20 rounded-md">
                Tailwind
              </h2>
              <h2 className="bg-pink-600  dark:bg-amber-600 w-16 rounded-md">
                API
              </h2>
              <h2 className="bg-pink-600  dark:bg-amber-600 w-24 rounded-md">
                useContext
              </h2>
            </div>
            <div>
              <div className=" text-center visible md:invisible md:hidden ">
                <a href="https://easybank-bvn.pages.dev/">
                  <button className="h-12 text-center rounded-full px-4 py-3 m-2 bg-amber-600 text-white font-bold text-lg hover:bg-amber-500 hover:text-white">
                    <AiOutlineEye />
                  </button>
                </a>
                <a href="https://github.com/kctoey/Easybank_Project.git">
                  <button className="h-12 text-center rounded-full px-4 py-3 m-2 bg-gray-700 text-white font-bold text-lg hover:bg-gray-700 hover:text-white">
                    <AiFillGithub />
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow-2xl transition duration-200 hover:scale-105">
            <div
              style={{ backgroundImage: `url(${FoodApp})` }}
              className=" group container rounded-md flex justify-center items-center mx-auto content-div "
            >
              {/* Hover effect */}

              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl    text-white tracking-wider ">
                  Food Shopping cart
                </span>
                <div className="pt-8 text-center">
                  <a href="https://foodapp.pages.dev/">
                    <button className="h-12 text-center rounded-full px-4 py-3 m-2 bg-amber-600 text-white font-bold text-lg hover:bg-amber-500 hover:text-white">
                      <AiOutlineEye />
                    </button>
                  </a>
                  <a href="https://github.com/kctoey/Food_App">
                    <button className="h-12 text-center rounded-full px-4 py-3 m-2 bg-gray-700 text-white font-bold text-lg hover:bg-gray-500 hover:text-white">
                      <AiFillGithub />
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h2 className="pt-4 text-2xl">Food Shopping cart</h2>
              <p>
                Create shopping cart with notify when adding product. Authorized
                login and logout with Google account.
              </p>
            </div>
            <div className="flex flex-row  flex-wrap  space-x-2 items-center  text-center py-2 text-white">
              <h2 className="bg-pink-600  dark:bg-amber-600 my-2 w-16 rounded-md">
                React
              </h2>
              <h2 className="bg-pink-600 dark:bg-amber-600  w-20 rounded-md">
                Tailwind
              </h2>
              <h2 className="bg-pink-600 dark:bg-amber-600 w-32 rounded-md">
                Redux-toolkit
              </h2>
              <h2 className="bg-pink-600  dark:bg-amber-600 w-20 rounded-md">
                Firebase
              </h2>
              <h2 className="mt-2 bg-pink-600 dark:bg-amber-600  w-36 rounded-md">
                react-hot-toast
              </h2>
            </div>
            <div className=" text-center visible md:invisible md:hidden ">
              <a href="https://easybank-bvn.pages.dev/">
                <button className="h-12 text-center rounded-full px-4 py-3 m-2 bg-amber-600 text-white font-bold text-lg hover:bg-amber-500 hover:text-white">
                  <AiOutlineEye />
                </button>
              </a>
              <a href="https://github.com/kctoey/Easybank_Project.git">
                <button className="h-12 text-center rounded-full px-4 py-3 m-2 bg-gray-700 text-white font-bold text-lg hover:bg-gray-700 hover:text-white">
                  <AiFillGithub />
                </button>
              </a>
            </div>
          </div>
          <div className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow-2xl transition duration-200 hover:scale-105">
            <div
              style={{ backgroundImage: `url(${Drink})` }}
              className=" group container rounded-md flex justify-center items-center mx-auto content-div "
            >
              {/* Hover effect */}

              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl  text-white tracking-wider ">
                  Drink water App
                </span>
                <div className="pt-8 text-center">
                  <a href="https://drink-water-js-app.netlify.app/">
                    <button className="h-12 text-center rounded-full px-4 py-3 m-2 bg-amber-600 text-white font-bold text-lg hover:bg-amber-500 hover:text-white">
                      <AiOutlineEye />
                    </button>
                  </a>
                  <a href="https://github.com/kctoey/Drink_water.git">
                    <button className="h-12 text-center rounded-full px-4 py-3 m-2 bg-gray-700 text-white font-bold text-lg hover:bg-gray-500 hover:text-white">
                      <AiFillGithub />
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h2 className="pt-4 text-2xl">Drink Water app</h2>
              <p>
                Create drink water app for a day by click on glass the water
                will increase
              </p>
            </div>
            <div className="flex flex-row items-center flex-wrap  space-x-2  text-center py-2 text-white">
              <h2 className="bg-pink-600 dark:bg-amber-600 my-2 w-16 rounded-md">
                HTML
              </h2>
              <h2 className="bg-pink-600 dark:bg-amber-600  w-16 rounded-md">
                CSS
              </h2>
              <h2 className="bg-pink-600 dark:bg-amber-600 w-32 rounded-md">
                Javascript
              </h2>
            </div>
            <div className=" text-center visible md:invisible md:hidden ">
              <a href="https://drink-water-js-app.netlify.app/">
                <button className="h-12 text-center rounded-full px-4 py-3 m-2 bg-amber-600 text-white font-bold text-lg hover:bg-amber-500 hover:text-white">
                  <AiOutlineEye />
                </button>
              </a>
              <a href="https://github.com/kctoey/Drink_water.git">
                <button className="h-12 text-center rounded-full px-4 py-3 m-2 bg-gray-700 text-white font-bold text-lg hover:bg-gray-500 hover:text-white">
                  <AiFillGithub />
                </button>
              </a>
            </div>
          </div>
          <div className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow-2xl transition duration-200 hover:scale-105">
            <div
              style={{ backgroundImage: `url(${Todo})` }}
              className=" group container rounded-md flex justify-center items-center mx-auto content-div "
            >
              {/* Hover effect */}

              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl   text-white tracking-wider ">
                  To-do List
                </span>
                <div className="pt-8 text-center">
                  <a href="https://todo-firebase-dvd.pages.dev/">
                    <button className="h-12 text-center rounded-full px-4 py-3 m-2 bg-amber-600 text-white font-bold text-lg hover:bg-amber-500 hover:text-white">
                      <AiOutlineEye />
                    </button>
                  </a>
                  <a href="https://github.com/kctoey/Todo_Firebase.git">
                    <button className="h-12 text-center rounded-full px-4 py-3 m-2 bg-gray-700 text-white font-bold text-lg hover:bg-gray-500 hover:text-white">
                      <AiFillGithub />
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h2 className="pt-4 text-2xl">To-do List App</h2>
              <p>
                Create to do list app have function add and delete list use
                firebase store database
              </p>
            </div>
            <div className="flex flex-row items-center flex-wrap  space-x-2  text-center py-2 text-white">
              <h2 className="bg-pink-600 dark:bg-amber-600 my-2 w-16 rounded-md">
                React
              </h2>
              <h2 className="bg-pink-600 dark:bg-amber-600  w-20 rounded-md">
                Tailwind
              </h2>

              <h2 className="bg-pink-600  dark:bg-amber-600 w-16 rounded-md">
                Firebase
              </h2>
            </div>
            <div className=" text-center visible md:invisible md:hidden ">
              <a href="https://easybank-bvn.pages.dev/">
                <button className="h-12 text-center rounded-full px-4 py-3 m-2 bg-amber-600 text-white font-bold text-lg hover:bg-amber-500 hover:text-white">
                  <AiOutlineEye />
                </button>
              </a>
              <a href="https://github.com/kctoey/Easybank_Project.git">
                <button className="h-12 text-center rounded-full px-4 py-3 m-2 bg-gray-700 text-white font-bold text-lg hover:bg-gray-700 hover:text-white">
                  <AiFillGithub />
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
