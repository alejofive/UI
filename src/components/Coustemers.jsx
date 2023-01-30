import React from "react";

const Coustemers = () => {
  return (
    <section className="grid grid-cols-4 gap-10 px-10 mt-10">
      <div className="col-span-1 bg-white p-6 rounded-lg flex items-center justify-between">
        <div className="bg-porcentaje2 w-[53px] h-[53px] rounded-2xl flex items-center justify-center">
          <img
            className="w-[36px] h-[20px]"
            src="/image/Group-user.png"
            alt=""
          />
        </div>
        <div className="text-end">
          <span className="text-xs font-normal text-gray-500 ">Coustemers</span>
          <h3 className="text-3xl font-medium text-color-1">75</h3>
        </div>
      </div>
    </section>
  );
};

export default Coustemers;
