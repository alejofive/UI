import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="grid grid-cols-4 h-screen relative">
      <div className="absolute top-0 right-0">
        <img className="w-[300px] h-[300px]" src="/image/frame.png" alt="" />
      </div>

      <section className="col-span-2">
        <img
          className="w-full h-full object-cover "
          src="/image/Graphic Side2.png"
          alt=""
        />
      </section>

      <section className="col-span-2 flex justify-center items-center">
        <div className="w-[516px]">
          <img
            className="w-[162px] h-[43px] object-contain"
            src="./image/logo.png"
            alt=""
          />
          <div className="mt-10">
            <div className="text-center">
              <h1 className="text-2xl font-semibold mb-4">Sign Up</h1>
              <p className="text-xs font-normal text-gray-500">
                Create your Hope UI account
              </p>
            </div>

            <form action="" className="grid grid-cols-4 gap-5 mt-4">
              <div className="col-span-2 ">
                <div>
                  <label
                    className="text-xs font-normal text-gray-500"
                    htmlFor=""
                  >
                    First Name
                  </label>
                  <input
                    className="w-full mt-2 h-[44px] rounded border border-blue-700"
                    type="text"
                  />
                </div>
                <div className="mt-4">
                  <label
                    className="text-xs font-normal text-gray-500"
                    htmlFor=""
                  >
                    Email
                  </label>
                  <input
                    className="w-full mt-2 h-[44px] rounded border border-blue-700 "
                    type="text"
                  />
                </div>
                <div className="mt-4">
                  <label
                    className="text-xs font-normal text-gray-500"
                    htmlFor=""
                  >
                    Password
                  </label>
                  <input
                    className="w-full mt-2 h-[44px] rounded border border-blue-700 "
                    type="text"
                  />
                </div>
              </div>

              <div className="col-span-2">
                <div>
                  <label
                    className="text-xs font-normal text-gray-500"
                    htmlFor=""
                  >
                    Last Name
                  </label>
                  <input
                    className="w-full mt-2 h-[44px] rounded border border-blue-700"
                    type="text"
                  />
                </div>
                <div className="mt-4">
                  <label
                    className="text-xs font-normal text-gray-500"
                    htmlFor=""
                  >
                    Phone No.
                  </label>
                  <input
                    className="w-full mt-2 h-[44px] rounded border border-blue-700 "
                    type="text"
                  />
                </div>
                <div className="mt-4">
                  <label
                    className="text-xs font-normal text-gray-500"
                    htmlFor=""
                  >
                    Confirm password
                  </label>
                  <input
                    className="w-full mt-2 h-[44px] rounded border border-blue-700 "
                    type="text"
                  />
                </div>
              </div>

              <div className="col-span-4">
                <div className="mt-4 flex items-center justify-center">
                  <div className="flex items-center">
                    <input type="checkbox" name="" id="" />
                    <p className="text-xs text-gray-500 font-normal ml-2">
                      I agree with the terms of use
                    </p>
                  </div>
                </div>

                <div className="flex justify-center mt-6">
                  <Link
                    to="/success"
                    className="text-xs rounded px-10 py-2 bg-blue-700 text-white"
                  >
                    Sign up
                  </Link>
                </div>
              </div>
            </form>

            <div className="mt-4">
              <p className="text-center text-xs font-normal">
                or sign in with other accounts?
              </p>
              <div className="flex justify-center mt-4">
                <a
                  href="#"
                  className="w-[24px] h-[24px] object-contain ml-3 mr-3"
                >
                  <img
                    className="w-full h-full"
                    src="./image/iconSocial1.png"
                    alt=""
                  />
                </a>
                <a
                  href="#"
                  className="w-[24px] h-[24px] object-contain ml-3 mr-3"
                >
                  <img
                    className="w-full h-full"
                    src="./image/iconSocial2.png"
                    alt=""
                  />
                </a>
                <a
                  href="#"
                  className="w-[24px] h-[24px] object-contain ml-3 mr-3"
                >
                  <img
                    className="w-full h-full"
                    src="./image/iconSocial3.png"
                    alt=""
                  />
                </a>
                <a
                  href="#"
                  className="w-[24px] h-[24px] object-contain ml-3 mr-3"
                >
                  <img
                    className="w-full h-full"
                    src="./image/iconSocial4.png"
                    alt=""
                  />
                </a>
              </div>
              <p className="text-center mt-4 text-xs font-normal">
                Don’t have an account?{" "}
                <a href="/#" className="bg-none border-none text-blue-700  ">
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
