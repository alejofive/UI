import React from "react";

const BoxCustomer = () => {
  return (
    <section className="col-span-2">
      <div className="grid grid-cols-2 gap-10">
        <div className="col-span-1 bg-white p-8 rounded-lg">
          <div className="bg-porcentaje4 w-[53px] h-[53px] rounded-2xl flex items-center justify-center">
            <img
              className="w-[36px] h-[20px]"
              src="/image/Group-user.png"
              alt=""
            />
          </div>

          <div className="mt-11 flex flex-col items-start">
            <p className="text-xs font-normal text-gray-500">CUSTOMRE</p>
            <span className="text-2xl text-color-1 font-normal">60,586</span>
            <span className="bg-porcentaje4 p-1 rounded-lg flex items-center mt-6">
              <img
                className="w-[15px] h-[15px]"
                src="/image/Arrow - Up.png"
                alt=""
              />
              <p className="text-white text-[13px] ">3.48%</p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoxCustomer;
