import React from "react";

const BoxCredit = () => {
  return (
    <div className="col-span-2 bg-white p-6 rounded-lg flex flex-col w-full ">
      <h1 className="text-3xl text-black font-medium">$3450</h1>

      <div className="mt-10">
        <span className="text-xs text-gray-500 font-normal">
          Young Current Balance
        </span>
        <p className="text-xs font-medium text-color-1">20% ($520)</p>
      </div>

      <button className="py-2 rounded bg-porcentaje w-full text-white text-xs font-normal mt-10">
        Add Credit
      </button>

      <div className="mt-10">
        <div>
          <div className="flex justify-between">
            <p className="text-xs text-gray-500 font-normal">Insurance</p>
            <span className="text-sm font-medium">18</span>
          </div>
          <div className="w-full h-2 mt-2 rounded-md bg-cart-flecha">
            <div className="h-full w-2/4 bg-porcentaje2 rounded-md"></div>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex justify-between">
            <p className="text-xs text-gray-500 font-normal">Savings</p>
            <span className="text-sm font-medium">124</span>
          </div>
          <div className="w-full h-2 mt-2 rounded-md bg-cart-flecha">
            <div className="h-full w-2/4 bg-porcentaje3 rounded-md"></div>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex justify-between">
            <p className="text-xs text-gray-500 font-normal">Investement</p>
            <span className="text-sm font-medium">74</span>
          </div>
          <div className="w-full h-2 mt-2 rounded-md bg-cart-flecha">
            <div className="h-full w-2/4 bg-porcentaje4 rounded-md"></div>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex justify-between">
            <p className="text-xs text-gray-500 font-normal">Progress</p>
            <span className="text-sm font-medium">89</span>
          </div>
          <div className="w-full h-2 mt-2 rounded-md bg-cart-flecha">
            <div className="h-full w-2/4 bg-porcentaje3 rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxCredit;
