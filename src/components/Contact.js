import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="font-Concert  w-full h-screen text-[#d4a373]  bg-[#fefae0] flex justify-center items-center p-4 dark:bg-slate-900 transition duration-300 dark:text-[#ffbb29]"
    >
      <form
        method="POST"
        action="https://getform.io/f/f98cd71f-0caf-4de2-9893-109298311de2"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl  inline border-b-4 border-pink-600 uppercase">
            Contact
          </p>
          <p className=" py-4">// Submit the form below or shoot me an email</p>
        </div>
        <input
          className="bg-[#ccd6f6]"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="text"
          placeholder="email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6]"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className=" border-2 hover:bg-pink-600 hover:border-pink-600 px-4 my-8 py-3 mx-auto flex  items-center">
          Sent Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
