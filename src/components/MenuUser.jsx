import React from "react";

const MenuUser = () => {
  return (
    <section className="grid grid-cols-4 gap-10 px-10">
      <div className="col-span-4 bg-white p-6 rounded-lg -mt-10 z-10">
        <div className="-mt-20">
          <img
            className="w-[120px] h-[120px] rounded-full object-contain"
            src="/image/user-logo.png"
            alt=""
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center ml-40">
            <h1 className="text-black text-2xl font-medium mr-8">
              Austin Robertson
            </h1>
            <p className="text-base font-normal text-gray-500">Web Designer</p>
          </div>

          <nav>
            <a
              href=""
              className="px-4 py-2 text-base font-medium rounded-3xl bg-primary text-white"
            >
              Feed
            </a>
            <a
              href=""
              className="px-4 py-2 text-base font-medium rounded-3xl text-primary"
            >
              Activity
            </a>
            <a
              href=""
              className="px-4 py-2 text-base font-medium rounded-3xl text-primary"
            >
              Freinds
            </a>
            <a
              href=""
              className="px-4 py-2 text-base font-medium rounded-3xl text-primary"
            >
              Profile
            </a>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default MenuUser;
