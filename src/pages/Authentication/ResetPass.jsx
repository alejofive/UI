import React from "react";
import { Link } from "react-router-dom";

const ResetPass = () => {
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

        <div className="w-[476px]">
          <img
            className="w-[162px] h-[43px] object-contain"
            src="./image/logo.png"
            alt=""
          />

          <div className="flex justify-center flex-col items-center">
            <h1 className="text-black font-medium text-4xl my-4">
              Reset Password
            </h1>

            <p className="text-xs font-normal text-gray-500 text-center">
              Enter your email address and we’ll send you an email with
              instructions to reset your password
            </p>
          </div>

          <form action="" className="mt-6">
            <div>
              <label className="text-xs font-normal text-gray-500" htmlFor="">
                Email
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
                Reset
              </Link>
            </div>
          </form>
        </div>
      </section>

      <section className="col-span-2">
        <img
          className="w-full h-full object-cover "
          src="/image/Graphic Side.png"
          alt=""
        />
      </section>
    </div>
  );
};

export default ResetPass;
