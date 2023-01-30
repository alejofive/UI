import React from "react";

const BoxUser = () => {
  return (
    <div className="col-span-6 bg-white p-6">
      <div className="flex justify-center items-center flex-col">
        <div className="w-[80px] h-[80px] ">
          <img
            className="w-full h-full rounded-full object-cover"
            src="image/miniatura.png"
            alt=""
          />
        </div>

        <h1 className="text-sm font-medium text-black mt-6 mb-4">Bini Jets</h1>
        <p className="text-base text-gray-500 font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu
          turpis. Nunc
        </p>

        <button className="bg-box-plus text-white text-base font-normal py-2 px-6 mt-4">
          Assign
        </button>

        <div className="flex w-full justify-between linea3 mt-5 pt-5">
          <div>
            <h1 className="text-black text-3xl">4500</h1>
            <p className="text-base text-gray-500 font-normal">Operations</p>
          </div>
          <div>
            <h1 className="text-black text-3xl">3.9</h1>
            <p className="text-base text-gray-500 font-normal">
              Medical Rating
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxUser;
