import React from "react";

const OrderServed = () => {
  return (
    <section className="grid grid-cols-6 gap-10 px-10 mt-10">
      <div className="col-span-2 bg-white p-6 rounded-lg flex items-center justify-between w-full ">
        <div className="bg-liner-box w-[53px] h-[53px] rounded-2xl flex items-center justify-center">
          <img
            className="w-[23px] h-[30px]"
            src="/image/Profile-liner.png"
            alt=""
          />
        </div>
        <div>
          <h3 className="text-black text-[40px] font-medium">21k</h3>
          <p className="text-xs font-normal  text-gray-500">Order Served</p>
        </div>

        <div className="flex h-full items-start">
          <span className="bg-primary p-1 rounded-lg flex items-center">
            <img
              className="w-[15px] h-[15px]"
              src="/image/Arrow - Up.png"
              alt=""
            />
            <p className="text-white text-[13px]">3.48%</p>
          </span>
        </div>
      </div>

      <div className="col-span-2 bg-white p-6 rounded-lg flex items-center justify-between w-full ">
        <div className="bg-liner-box2 w-[53px] h-[53px] rounded-2xl flex items-center justify-center">
          <img
            className="w-[30px] h-[30px]"
            src="/image/Group 33873.png"
            alt=""
          />
        </div>
        <div className="flex flex-col items-end">
          <h3 className="color-liner1-text text-[33px] font-medium">250M</h3>
          <p className="text-xs font-normal  color-liner1-text">
            Total Earning
          </p>
        </div>
      </div>

      <div className="col-span-2 bg-white p-6 rounded-lg flex items-center justify-between w-full ">
        <div className="bg-liner-box2 w-[53px] h-[53px] rounded-2xl flex items-center justify-center">
          <img
            className="w-[30px] h-[30px]"
            src="/image/Group 33621.png"
            alt=""
          />
        </div>
        <div>
          <p className="text-black font-medium text-[19px]">Positive Reviews</p>
          <div className="flex items-center">
            <img
              className="w-[15px] h-[15px] object-contain "
              src="/image/Star 1.png"
              alt=""
            />
            <img
              className="w-[15px] h-[15px] object-contain "
              src="/image/Star 1.png"
              alt=""
            />
            <img
              className="w-[15px] h-[15px] object-contain "
              src="/image/Star 1.png"
              alt=""
            />
            <img
              className="w-[15px] h-[15px] object-contain "
              src="/image/Star 1.png"
              alt=""
            />
            <img
              className="w-[15px] h-[15px] object-contain "
              src="/image/Star 1.png"
              alt=""
            />
          </div>
          <span className="color-liner2-text text-base font-medium">4.5/5</span>
        </div>
      </div>
    </section>
  );
};

export default OrderServed;
