import React from "react";

const Education = () => {
  return (
    <div
      name="education"
      className=" font-Concert w-screen md:w-full pt-12  h-full md:h-screen bg-white text-black dark:bg-slate-900 transition duration-300 dark:text-[#ffbb29]"
    >
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center items-center text-center h-full px-4">
        <div className=" w-full px-4 ">
          <div className=" pb-0  mb-4">
            <p className="font-bold text-start text-4xl   inline border-b-4 border-pink-600 uppercase">
              Education
            </p>
            <div className=" py-6 md:py-2 flex flex-col text-xl">
              <div className="md:grid md:grid-cols-2 gap-8 px-4 md:w-[1000px]  ">
                <div className=" py-4  flex-row ">
                  <h1 className="w-36 border-solid text-center bg-pink-600 dark:bg-amber-600 text-white  rounded-full">
                    2014 - 2018
                  </h1>
                  <div className="pt-4 inline md:flex-wrap text-start  md:flex md:justify-between md:w-[1000px] ">
                    <p className="text-pink-600">Mae fah luang University</p>
                    <p>Bachelor of Science (Occoupational health and safety)</p>
                  </div>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 gap-8 px-4 md:w-[1000px] ">
                <div className=" py-2  flex-row ">
                  <h1 className=" w-60 border-solid text-center bg-pink-600 dark:bg-amber-600 text-white  rounded-full">
                    2022-2024(expected)
                  </h1>
                  <div className="pt-4 inline md:flex-wrap text-start  md:flex md:justify-between  md:w-[1000px]">
                    <p className="text-pink-600">
                      Sukhothai Thammathirat Open University
                    </p>
                    <p>Bachelor of Science (Computer Science)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full px-4 ">
          <div>
            <p className="font-bold text-start  text-4xl  inline border-b-4 border-pink-600 uppercase">
              Certification
            </p>
            <div className="py-6 md:py-2 flex flex-col text-xl ">
              <div className="md:grid md:grid-cols-2 gap-8 px-4 md:w-[1000px] ">
                <div className=" py-2  flex-row ">
                  <h1 className="w-40 border-solid text-center bg-pink-600 dark:bg-amber-600 text-white  rounded-full">
                    2022-Present
                  </h1>
                  <div className=" text-start ">
                    <div className="pt-2">
                      <p className="text-pink-600">
                        Meta Front-End Developer Professional Certificate
                      </p>
                      <ul className="list-disc indent-4">
                        <li>Introduction to Front-End Developer</li>
                        <li>React Basics</li>
                        <li>Advanced React</li>
                      </ul>
                    </div>
                    <div className="pt-2">
                      <p className="text-pink-600">GOOGLE</p>
                      <ul className="list-disc indent-4">
                        <li>Foundations of User Experience (UX) Design</li>
                      </ul>
                    </div>
                    <div className="pt-2">
                      <p className="text-pink-600">IBM Skills Network</p>
                      <ul className="list-disc indent-4">
                        <li>Getting Started with Git and GitHub</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
