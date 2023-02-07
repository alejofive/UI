import React from "react";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="grid grid-cols-4 h-screen relative">
      <section className="col-span-2 flex justify-center items-center relative">
        <div className="absolute top-0 right-0">
          <img className="w-[300px] h-[300px]" src="/image/frame.png" alt="" />
        </div>

        <div className="w-[436px]">
          <img
            className="w-[162px] h-[43px] object-contain"
            src="./image/logo.png"
            alt=""
          />

          <div className="flex justify-center flex-col items-center mt-11">
            <img
              className="w-[86px] h-[91px] object-contain"
              src="/image/success.png"
              alt=""
            />

            <h1 className="text-blue-700 font-bold text-6xl my-6">Success !</h1>

            <p className="text-xs font-normal text-gray-500 text-center">
              A email has been send to your email@domain.com. Please check for
              an email from company and click on the included link to reset your
              password.
            </p>
          </div>

          <div className="flex justify-center mt-10">
            <Link
              to="/welcome"
              className="text-xs rounded px-10 py-2 bg-blue-700 text-white"
            >
              Back to home
            </Link>
          </div>
        </div>
      </section>

      <section className="col-span-2">
        <img
          className="w-full h-full object-cover "
          src="/image/Graphic Side2.png"
          alt=""
        />
      </section>
    </div>
  );
};

export default Success;
