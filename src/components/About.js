import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="font-Concert w-full h-screen bg-white text-black dark:bg-slate-900 transition duration-300 dark:text-[#ffbb29]"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-0 pl-4 mb-4">
            <p className="text-4xl font-bold inline border-b-4  border-pink-600 uppercase">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full sm:grid grid-cols-2 gap-8 px-4 ">
          <div className="sm:text-right py-2 text-4xl font-bold">
            <p>Hi. I'm Toey, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              autem libero, est ea molestiae eveniet exercitationem dolorem
              maxime laudantium mollitia vitae odio quod amet quisquam dolore
              officiis magni. Quos, cupiditate?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
