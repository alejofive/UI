import React from "react";

const BoxColors = () => {
  return (
    <section className="grid grid-cols-4 gap-10 px-10 mt-10">
      <div className="col-span-1 bg-car-big1 p-6 rounded-lg flex items-center justify-between">
        <div className="bg-cart-flecha2 w-[53px] h-[53px] rounded-2xl flex items-center justify-center">
          <img className="w-[23px] h-[30px]" src="/image/Profile.png" alt="" />
        </div>
        <div className="text-end">
          <h3 className="text-3xl font-medium text-color-1">5600</h3>
          <span className="color-text1 font-normal text-xs ">Doctors</span>
        </div>
      </div>
    </section>
  );
};

export default BoxColors;
