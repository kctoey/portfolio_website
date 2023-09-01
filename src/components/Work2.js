import React from "react";
import Myblog from "../asset/myblog.PNG";
import FoodApp from "../asset/shoppingcart.JPG";
import MealApp from "../asset/mealproject.JPG";
import Ecommerce from "../asset/ecom.PNG";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import Kotlin from "../asset/kotlin2.PNG";
const Work2 = () => {
  return (
    <div
      name="work"
      className="font-Concert   bg-white text-black dark:bg-slate-900 transition duration-300 dark:text-[#ffbb29]"
    >
      <div className="max-w-[1000px]  mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="my-6 pt-16">
          <p className="font-bold text-4xl pt-4  inline border-b-4 border-pink-600 uppercase">
            Projects
          </p>
        </div>
        {/* grid container */}
        <div className="py-6 md:py-2 grid grid-none  md:grid-cols-2 gap-4 ">
          {/* grid item */}
          <div className=" p-4 bg-white dark:bg-slate-800 rounded-xl shadow-2xl transition duration-200 hover:scale-105 ">
            <div
              style={{ backgroundImage: `url(${Ecommerce})` }}
              className=" group container rounded-md flex justify-center items-center  content-div object-contained"
            >
              {/* Hover effect */}

              <div className="opacity-0 group-hover:opacity-100  transition duration-200  ">
                <span className="text-2xl  text-white tracking-wider ">
                  E-commerce online shop
                </span>
                <div className="pt-8 text-center invisible sm:visible">
                  <a target="_blank" href="https://myshop-tau.vercel.app/">
                    <button className="h-12 text-center rounded-full px-4 py-3 m-2 bg-amber-600 text-white text-lg hover:bg-amber-500 hover:text-white">
                      <AiOutlineEye />
                    </button>
                  </a>
                  <a target="_blank" href="https://github.com/kctoey/Food_App">
                    <button className="h-12 text-center rounded-full px-4 py-3 m-2 bg-gray-700 text-white text-lg hover:bg-gray-500 hover:text-white">
                      <AiFillGithub />
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="px-4">
              <h2 className="pt-4 text-2xl"> E-commerce online shop</h2>
              <p>
                The online shopping website offers users the ability to
                seamlessly add and remove products, calculate prices, access
                user profiles and order history, edit usernames, and upload
                images, all while ensuring mobile-friendliness for a smooth
                experience.
              </p>
            </div>
            <div className="flex flex-row flex-wrap  space-x-2 text-center py-2  text-white px-2">
              <h2 className="bg-pink-600 dark:bg-amber-600 mt-2  px-2 rounded-md">
                React
              </h2>
              <h2 className="bg-pink-600 dark:bg-amber-600 mt-2 px-2 rounded-md">
                Tailwind
              </h2>
              <h2 className="bg-pink-600 dark:bg-amber-600 mt-2 px-2 rounded-md">
                Vite.js
              </h2>
              <h2 className="bg-pink-600 dark:bg-amber-600 mt-2 px-2 rounded-md">
                Firebase
              </h2>
              <h2 className="bg-pink-600 dark:bg-amber-600 mt-2 px-2 rounded-md">
                redux-toolkit
              </h2>
              <h2 className="bg-pink-600 dark:bg-amber-600 px-2 mt-2 rounded-md">
                redux-persist
              </h2>
            </div>
            <div>
              <div className=" text-center visible md:invisible md:hidden ">
                <a target="_blank" href="https://easybank-bvn.pages.dev/">
                  <button className="h-12 text-center rounded-full px-4 py-3 m-2 bg-amber-600 text-white text-lg hover:bg-amber-500 hover:text-white">
                    <AiOutlineEye />
                  </button>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/kctoey/Easybank_Project.git"
                >
                  <button className="h-12 text-center rounded-full px-4 py-3 m-2 bg-gray-700 text-white text-lg hover:bg-gray-500 hover:text-white">
                    <AiFillGithub />
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* <div className=" p-4 bg-white dark:bg-slate-800 rounded-xl shadow-2xl transition duration-200 hover:scale-105 ">
            <div
              style={{ backgroundImage: `url(${Easybank})` }}
              className=" group container rounded-md flex justify-center items-center mx-auto content-div "
            >
    

              <div className="opacity-0 group-hover:opacity-100  transition duration-200  ">
                <span className="text-2xl  text-white tracking-wider ">
                  Easybank website
                </span>
                <div className="pt-8 text-center invisible sm:visible">
                  <a
                    target="_blank"
                    href="https://easybank-landing-page-722.pages.dev/"
                  >
                    <button className="h-12 text-center rounded-full px-4 py-3 m-2 bg-amber-600 text-white text-lg hover:bg-amber-500 hover:text-white">
                      <AiOutlineEye />
                    </button>
                  </a>
                  <a
                    target="_blank"
                    href="https://github.com/kctoey/Easybank_Project.git"
                  >
                    <button className="h-12 text-center rounded-full px-4 py-3 m-2 bg-gray-700 text-white text-lg hover:bg-gray-500 hover:text-white">
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
                <a target="_blank" href="https://easybank-bvn.pages.dev/">
                  <button className="h-12 text-center rounded-full px-4 py-3 m-2 bg-amber-600 text-white text-lg hover:bg-amber-500 hover:text-white">
                    <AiOutlineEye />
                  </button>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/kctoey/Easybank_Project.git"
                >
                  <button className="h-12 text-center rounded-full px-4 py-3 m-2 bg-gray-700 text-white text-lg hover:bg-gray-500 hover:text-white">
                    <AiFillGithub />
                  </button>
                </a>
              </div>
            </div>
          </div> 
          */}

          <div className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow-2xl transition duration-200 hover:scale-105">
            <div
              style={{ backgroundImage: `url(${Myblog})` }}
              className=" group container rounded-md flex justify-center items-center mx-auto content-div "
            >
              {/* Hover effect */}

              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl  text-white tracking-wider ">
                  Toey Dev website
                </span>
                <div className="pt-8 text-center">
                  <a
                    target="_blank"
                    href="https://blog-next-auth-tau.vercel.app/"
                  >
                    <button className="h-12 text-center rounded-full px-4 py-3 m-2 bg-amber-600 text-white text-lg hover:bg-amber-500 hover:text-white">
                      <AiOutlineEye />
                    </button>
                  </a>
                  <a
                    target="_blank"
                    href="https://github.com/kctoey/Blog_next_auth"
                  >
                    <button className="h-12 text-center rounded-full px-4 py-3 m-2 bg-gray-700 text-white text-lg hover:bg-gray-500 hover:text-white">
                      <AiFillGithub />
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="px-4">
              <h2 className="pt-4 text-2xl">My Blog</h2>
              <p>
                The platform allows users to create and delete posts, including
                images. while bolstering security through robust user
                authentication, including the convenience of Google Login
                access.
              </p>
            </div>
            <div className="flex flex-row flex-wrap  space-x-2 text-center  mt-2 text-white px-2">
              <h2 className="bg-pink-600  dark:bg-amber-600 px-2 mt-2  rounded-md">
                Next.js
              </h2>
              <h2 className="bg-pink-600  dark:bg-amber-600 px-2  mt-2 rounded-md">
                Tailwind
              </h2>
              <h2 className="bg-pink-600  dark:bg-amber-600 px-2 mt-2 rounded-md">
                MongoDB
              </h2>
              <h2 className="bg-pink-600   dark:bg-amber-600 mt-2 px-2 rounded-md">
                Next Auth
              </h2>
              <h2 className="bg-pink-600  dark:bg-amber-600 mt-2  px-2 rounded-md">
                SWR
              </h2>
              <h2 className="bg-pink-600  dark:bg-amber-600 px-2 mt-2 rounded-md">
                Cloudinary
              </h2>
            </div>

            <div>
              <div className=" text-center visible md:invisible ">
                <a target="_blank" href="https://easybank-bvn.pages.dev/">
                  <button className="h-12 text-center rounded-full px-4 py-3 m-2 bg-amber-600 text-white text-lg hover:bg-amber-500 hover:text-white">
                    <AiOutlineEye />
                  </button>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/kctoey/Easybank_Project.git"
                >
                  <button className="h-12 text-center rounded-full px-4 py-3 m-2 bg-gray-700 text-white text-lg hover:bg-gray-500 hover:text-white">
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
                  <a target="_blank" href="https://meal-app.pages.dev/">
                    <button className="h-12 text-center rounded-full px-4 py-3 m-2 bg-amber-600 text-white text-lg hover:bg-amber-500 hover:text-white">
                      <AiOutlineEye />
                    </button>
                  </a>
                  <a
                    target="_blank"
                    href="https://github.com/kctoey/Recipes-App.git"
                  >
                    <button className="h-12 text-center rounded-full px-4 py-3 m-2 bg-gray-700 text-white text-lg hover:bg-gray-500 hover:text-white">
                      <AiFillGithub />
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="px-4">
              <h2 className="pt-4 text-2xl">Search Meal </h2>
              <p>
                Create search meal app for view recipe from Mealdb API and
                random meal with mobile friendly
              </p>
            </div>
            <div className="flex flex-row space-x-2 text-center py-2 text-white  flex-wrap px-2">
              <h2 className="bg-pink-600 mt-2  dark:bg-amber-600 w-16 rounded-md">
                React
              </h2>
              <h2 className="bg-pink-600 mt-2 dark:bg-amber-600 w-20 rounded-md">
                Tailwind
              </h2>
              <h2 className="bg-pink-600 mt-2 dark:bg-amber-600 w-16 rounded-md">
                API
              </h2>
              <h2 className="bg-pink-600 mt-2  dark:bg-amber-600 w-24 rounded-md">
                useContext
              </h2>
            </div>
            <div>
              <div className=" text-center visible md:invisible md:hidden ">
                <a target="_blank" href="https://easybank-bvn.pages.dev/">
                  <button className="h-12 text-center rounded-full px-4 py-3 m-2 bg-amber-600 text-white text-lg hover:bg-amber-500 hover:text-white">
                    <AiOutlineEye />
                  </button>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/kctoey/Easybank_Project.git"
                >
                  <button className="h-12 text-center rounded-full px-4 py-3 m-2 bg-gray-700 text-white text-lg hover:bg-gray-700 hover:text-white">
                    <AiFillGithub />
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow-2xl transition duration-200 hover:scale-105">
            <div
              style={{ backgroundImage: `url(${Kotlin})` }}
              className=" group container rounded-md flex justify-center items-center mx-auto content-div "
            >
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl    text-white tracking-wider ">
                  Acronym mobile App
                </span>
                <div className="pt-8 text-center">
                  {/* <a target="_blank" href="https://foodapp.pages.dev/">
                    <button className="h-12 text-center rounded-full px-4 py-3 m-2 bg-amber-600 text-white text-lg hover:bg-amber-500 hover:text-white">
                      <AiOutlineEye />
                    </button>
                  </a> */}
                  <a
                    target="_blank"
                    href="https://github.com/kctoey/Acronym-Mobile-App.git"
                  >
                    <button className="h-12 text-center rounded-full px-4 py-3 m-2 bg-gray-700 text-white text-lg hover:bg-gray-500 hover:text-white">
                      <AiFillGithub />
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="px-4">
              <h2 className="pt-4 text-2xl"> Acronym Mobile App</h2>
              <p>
                Effortlessly manage your vocabulary with our mobile app can
                create,update,delete new word
              </p>
            </div>
            <div className="flex flex-row  flex-wrap  space-x-2 items-center  text-center py-2 text-white px-2">
              <h2 className="bg-pink-600  dark:bg-amber-600 my-2 w-16 rounded-md">
                Kotlin
              </h2>
              <h2 className="bg-pink-600  dark:bg-amber-600 my-2 w-16 rounded-md">
                SQLite
              </h2>
            </div>
            <div className=" text-center visible md:invisible md:hidden ">
              <a target="_blank" href="https://easybank-bvn.pages.dev/">
                <button className="h-12 text-center rounded-full px-4 py-3 m-2 bg-amber-600 text-white text-lg hover:bg-amber-500 hover:text-white">
                  <AiOutlineEye />
                </button>
              </a>
              <a
                target="_blank"
                href="https://github.com/kctoey/Easybank_Project.git"
              >
                <button className="h-12 text-center rounded-full px-4 py-3 m-2 bg-gray-700 text-white text-lg hover:bg-gray-700 hover:text-white">
                  <AiFillGithub />
                </button>
              </a>
            </div>
          </div>
          {/* <div className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow-2xl transition duration-200 hover:scale-105">
            <div
              style={{ backgroundImage: `url(${Drink})` }}
              className=" group container rounded-md flex justify-center items-center mx-auto content-div "
            >
            

              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl  text-white tracking-wider ">
                  Drink water App
                </span>
                <div className="pt-8 text-center">
                  <a href="https://drink-water-js-app.netlify.app/">
                    <button className="h-12 text-center rounded-full px-4 py-3 m-2 bg-amber-600 text-white text-lg hover:bg-amber-500 hover:text-white">
                      <AiOutlineEye />
                    </button>
                  </a>
                  <a href="https://github.com/kctoey/Drink_water.git">
                    <button className="h-12 text-center rounded-full px-4 py-3 m-2 bg-gray-700 text-white text-lg hover:bg-gray-500 hover:text-white">
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
                <button className="h-12 text-center rounded-full px-4 py-3 m-2 bg-amber-600 text-white text-lg hover:bg-amber-500 hover:text-white">
                  <AiOutlineEye />
                </button>
              </a>
              <a href="https://github.com/kctoey/Drink_water.git">
                <button className="h-12 text-center rounded-full px-4 py-3 m-2 bg-gray-700 text-white text-lg hover:bg-gray-500 hover:text-white">
                  <AiFillGithub />
                </button>
              </a>
            </div>
          </div> */}
          {/* <div className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow-2xl transition duration-200 hover:scale-105">
            <div
              style={{ backgroundImage: `url(${Todo})` }}
              className=" group container rounded-md flex justify-center items-center mx-auto content-div "
            >
         

              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl   text-white tracking-wider ">
                  To-do List
                </span>
                <div className="pt-8 text-center">
                  <a href="https://todo-firebase-dvd.pages.dev/">
                    <button className="h-12 text-center rounded-full px-4 py-3 m-2 bg-amber-600 text-white text-lg hover:bg-amber-500 hover:text-white">
                      <AiOutlineEye />
                    </button>
                  </a>
                  <a href="https://github.com/kctoey/Todo_Firebase.git">
                    <button className="h-12 text-center rounded-full px-4 py-3 m-2 bg-gray-700 text-white text-lg hover:bg-gray-500 hover:text-white">
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
                <button className="h-12 text-center rounded-full px-4 py-3 m-2 bg-amber-600 text-white text-lg hover:bg-amber-500 hover:text-white">
                  <AiOutlineEye />
                </button>
              </a>
              <a href="https://github.com/kctoey/Easybank_Project.git">
                <button className="h-12 text-center rounded-full px-4 py-3 m-2 bg-gray-700 text-white text-lg hover:bg-gray-700 hover:text-white">
                  <AiFillGithub />
                </button>
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Work2;
