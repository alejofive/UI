import React from "react";
import { Link } from "react-router-dom";

const Hi = () => {
  return (
    <div className="grid grid-cols-4 h-screen relative">
      <section className="col-span-2 flex justify-center items-center relative">
        <div className="absolute top-0 left-0">
          <img
            className="w-[300px] h-[300px]"
            src="/image/Frame 453.png"
            alt=""
          />
        </div>

        <div className="w-[391px]">
          <img
            className="w-[162px] h-[43px] object-contain"
            src="./image/logo.png"
            alt=""
          />

          <div className="flex justify-center flex-col items-center mt-11">
            <img
              className="w-[100px] h-[100px] object-contain"
              src="/image/user-logo.png"
              alt=""
            />

            <h1 className="text-color-1 font-medium text-3xl my-2">
              Hi ! Austin Robertson
            </h1>

            <p className="text-xs font-normal text-gray-500 text-center">
              Enter your password to acess the admin.
            </p>
          </div>

          <form action="" className="mt-6">
            <div>
              <label className="text-xs font-normal text-gray-500" htmlFor="">
                Password
              </label>
              <input
                className="w-full mt-2 h-[44px] rounded border border-blue-700 "
                type="text"
              />
            </div>
            <div className="flex justify-center mt-8">
              <Link
                to="/rest"
                className="text-xs rounded px-10 py-2 bg-blue-700 text-white"
              >
                Sign in
              </Link>
            </div>
          </form>
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

export default Hi;
