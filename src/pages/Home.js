import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Dashboard from "./Admin/Dashboard";
import User from "./Admin/User";

const Home = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12 space"></div>
      <section className="col-span-12 py-5 px-8 flex items-center justify-between linea2 fixed w-full z-30 top-0 bg-white">
        <div className="flex items-center">
          <img
            className="w-[162px] h-[43px] object-contain"
            src="./image/logo.png"
            alt=""
          />

          <button className="bg-primary w-[30px] h-[30px] rounded-full flex justify-center items-center ml-11">
            <img
              className="w-[18px] h-[18px] object-contain"
              src="/image/left.png"
              alt=""
            />
          </button>

          <div className="relative ml-6">
            <img
              className="absolute top-2 left-2 w-[19px] h-[19px]"
              src="/image/Search.png"
              alt=""
            />
            <input
              className="w-[304px] h-[36px] py-1 px-4 pl-8 color-border rounded"
              type="text"
              placeholder="Search..."
            />
          </div>
        </div>

        <div className="flex items-center">
          <button className="w-[31px] h-[31px] mr-4">
            <img
              className="w-full h-full object-cover rounded-full"
              src="/image/bandera.png"
              alt=""
            />
          </button>

          <button className="w-[17px] h-[20px] mr-4">
            <img
              className="w-full h-full object-contain"
              src="/image/Notification.png"
              alt=""
            />
          </button>
          <button className="w-[24px] h-[24px] mr-4">
            <img
              className="w-full h-full object-contain"
              src="/image/Message.png"
              alt=""
            />
          </button>

          <button className="w-[45px] h-[45px] mr-4">
            <img
              className="w-full h-full object-cover rounded-full"
              src="/image/user-logo.png"
              alt=""
            />
          </button>

          <div>
            <h3 className="text-base font-normal text-color-1">
              Austin Robertson
            </h3>
            <p className="text-xs font-normal text-gray-500">
              Marketing Administrator
            </p>
          </div>
        </div>
      </section>

      <section className="col-span-2">
        <p className="text-base font-semibold text-gray-500 ml-8 mt-6">Home</p>

        <div className="bg-primary-link mx-3 mt-4">
          <div className="bg-primary py-2 px-7 mt-2 rounded">
            <Link className="flex items-center">
              <img
                className="mr-4 w-[24px] h-[24px] object-contain"
                src="/image/Category.png"
                alt=""
              />
              <p className="text-white text-base font-normal">Dashboard</p>
            </Link>
          </div>

          <div className=" py-2 px-7 mt-2 ">
            <Link className="flex items-center relative">
              <img
                className="mr-4 w-[24px] h-[24px] object-contain"
                src="/image/Filter.png"
                alt=""
              />
              <p className="text-gray-500 text-base font-normal">Menu Style</p>
              <img
                className="w-[24px] h-[24px]  object-contain absolute -right-5"
                src="/image/ic_Chevron.png"
                alt=""
              />
            </Link>
          </div>
        </div>

        <div className="linea"></div>

        <p className="text-base font-semibold text-gray-500 ml-8 mt-4">Pages</p>

        <div className="bg-primary-link mx-3 mt-4 ">
          <div className=" py-2 px-7 mt-2">
            <Link className="flex items-center relative ">
              <img
                className="mr-4 w-[24px] h-[24px] object-contain"
                src="/image/Game.png"
                alt=""
              />
              <p className="text-gray-500 text-base font-normal">Example</p>
              <img
                className="w-[24px] h-[24px]  object-contain absolute -right-5"
                src="/image/ic_Chevron.png"
                alt=""
              />
            </Link>
          </div>

          <div className=" py-2 px-7 mt-2">
            <Link className="flex items-center relative ">
              <img
                className="mr-4 w-[24px] h-[24px] object-contain"
                src="/image/Ticket Star.png"
                alt=""
              />
              <p className="text-gray-500 text-base font-normal">Widgets</p>
              <img
                className="w-[24px] h-[24px]  object-contain absolute -right-5"
                src="/image/ic_Chevron.png"
                alt=""
              />
            </Link>
          </div>

          <div className=" py-2 px-7 mt-2">
            <Link className="flex items-center relative ">
              <img
                className="mr-4 w-[24px] h-[24px] object-contain"
                src="/image/Location.png"
                alt=""
              />
              <p className="text-gray-500 text-base font-normal">Maps</p>
              <img
                className="w-[24px] h-[24px]  object-contain absolute -right-5"
                src="/image/ic_Chevron.png"
                alt=""
              />
            </Link>
          </div>

          <div className=" py-2 px-7 mt-2">
            <Link className="flex items-center relative ">
              <img
                className="mr-4 w-[24px] h-[24px] object-contain"
                src="/image/Shield Done.png"
                alt=""
              />
              <p className="text-gray-500 text-base font-normal">
                Authentication
              </p>
              <img
                className="w-[24px] h-[24px]  object-contain absolute -right-5"
                src="/image/ic_Chevron.png"
                alt=""
              />
            </Link>
          </div>

          <div className=" py-2 px-7 mt-2">
            <Link className="flex items-center relative ">
              <img
                className="mr-4 w-[24px] h-[24px] object-contain"
                src="/image/3 User.png"
                alt=""
              />
              <p className="text-gray-500 text-base font-normal">Users</p>
              <img
                className="w-[24px] h-[24px]  object-contain absolute -right-5"
                src="/image/ic_Chevron.png"
                alt=""
              />
            </Link>
          </div>

          <div className=" py-2 px-7 mt-2">
            <Link className="flex items-center relative ">
              <img
                className="mr-4 w-[24px] h-[24px] object-contain"
                src="/image/Info Circle.png"
                alt=""
              />
              <p className="text-gray-500 text-base font-normal">Error 404</p>
            </Link>
          </div>

          <div className=" py-2 px-7 mt-2">
            <Link className="flex items-center relative ">
              <img
                className="mr-4 w-[24px] h-[24px] object-contain"
                src="/image/Danger.png"
                alt=""
              />
              <p className="text-gray-500 text-base font-normal">Error 505</p>
            </Link>
          </div>

          <div className=" py-2 px-7 mt-2">
            <Link className="flex items-center relative ">
              <img
                className="mr-4 w-[24px] h-[24px] object-contain"
                src="/image/Bookmark.png"
                alt=""
              />
              <p className="text-gray-500 text-base font-normal">Maintence</p>
            </Link>
          </div>
        </div>

        <div className="linea"></div>

        <p className="text-base font-semibold text-gray-500 ml-8 mt-4">
          Elements
        </p>

        <div className="bg-primary-link mx-3 mt-4 ">
          <div className=" py-2 px-7 mt-2">
            <Link className="flex items-center relative ">
              <img
                className="mr-4 w-[24px] h-[24px] object-contain"
                src="/image/Wallet.png"
                alt=""
              />
              <p className="text-gray-500 text-base font-normal">Components</p>
              <img
                className="w-[24px] h-[24px]  object-contain absolute -right-5"
                src="/image/ic_Chevron.png"
                alt=""
              />
            </Link>
          </div>

          <div className=" py-2 px-7 mt-2">
            <Link className="flex items-center relative ">
              <img
                className="mr-4 w-[24px] h-[24px] object-contain"
                src="/image/Document.png"
                alt=""
              />
              <p className="text-gray-500 text-base font-normal">Form</p>
              <img
                className="w-[24px] h-[24px]  object-contain absolute -right-5"
                src="/image/ic_Chevron.png"
                alt=""
              />
            </Link>
          </div>

          <div className=" py-2 px-7 mt-2">
            <Link className="flex items-center relative ">
              <img
                className="mr-4 w-[24px] h-[24px] object-contain"
                src="/image/Setting.png"
                alt=""
              />
              <p className="text-gray-500 text-base font-normal">Table</p>
              <img
                className="w-[24px] h-[24px]  object-contain absolute -right-5"
                src="/image/ic_Chevron.png"
                alt=""
              />
            </Link>
          </div>

          <div className=" py-2 px-7 mt-2">
            <Link className="flex items-center relative ">
              <img
                className="mr-4 w-[24px] h-[24px] object-contain"
                src="/image/Frame 35287.png"
                alt=""
              />
              <p className="text-gray-500 text-base font-normal">Icons</p>
              <img
                className="w-[24px] h-[24px]  object-contain absolute -right-5"
                src="/image/ic_Chevron.png"
                alt=""
              />
            </Link>
          </div>
        </div>
      </section>

      <User />
      <div className="col-span-2"></div>
      <Footer />
    </div>
  );
};

export default Home;
