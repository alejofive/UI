import React from "react";

const Leads = () => {
  return (
    <div className="col-span-6">
      <div className="grid grid-cols-6 gap-10">
        <div className="col-span-3 bg-white p-6 rounded-lg  z-10">
          <div className="flex items-center justify-between">
            <p className="text-base font-bold text-gray-500 ">Leads</p>
            <div className="bg-primary px-2 py-1 rounded">
              <p className="text-white">Monthly</p>
            </div>
          </div>
          <div className="flex items-center justify-between mt-4">
            <div>
              <h3 className="text-black text-3xl font-medium"> $35000</h3>
            </div>
          </div>

          <div className="mt-2">
            <div className="flex justify-between">
              <p className="text-base text-gray-500 font-normal">Insurance</p>
              <span className="text-base font-medium">18%</span>
            </div>
            <div className="w-full h-2 mt-2 rounded-md bg-cart-flecha">
              <div className="h-full w-2/4 bg-primary rounded-md"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leads;
