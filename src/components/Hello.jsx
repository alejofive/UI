import React from "react";

const Hello = () => {
  return (
    <div className="w-full h-[200px] relative">
      <img
        className="w-full h-full object-cover rounded-b-2xl"
        src="/image/Graphic Side.png"
        alt=""
      />

      <div className="absolute top-4 left-9">
        <h1 className="text-white font-bold text-4xl">Hello Devs !</h1>
        <p className="text-white font-medium text-base mt-2">
          We are on a mission to help developers like you to build beautiful
          projects for free.
        </p>
      </div>

      <button className="bg-voice rounded py-3 px-6 absolute top-4 right-9 flex items-center">
        <img
          className="w-[24px] h-[24px] object-contain mr-2"
          src="/image/Voice 3.png"
          alt=""
        />
        <p className="text-white text-base">Announcments</p>
      </button>
    </div>
  );
};

export default Hello;
