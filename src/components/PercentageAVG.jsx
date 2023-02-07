import React from "react";

const PercentageAVG = (props) => {
  const { title, cant, percentage, color } = props;
  return (
    <div className="col-span-1 bg-white p-6 rounded-lg -mt-10 z-10">
      <p className="text-xs font-normal text-gray-500 text-center">{title}</p>
      <div className="flex items-center justify-between mt-4">
        <div>
          <h3 className="text-black text-3xl font-medium">{cant}</h3>
          <span className="text-xs font-normal text-gray-500">
            {percentage}%
          </span>
        </div>
        <div
          className={`w-[59px] h-[59px] bg-cart-${color} flex items-center justify-center rounded-lg`}
        >
          <img
            className="w-[30px] h-[30px]"
            src="/image/Arrow - Up Square.png"
            alt=""
          />
        </div>
      </div>

      <div className={`w-full h-2 mt-6 rounded-md bg-cart-${color}`}>
        <div className={`h-full w-2/4 rounded-md bg-percentage-${color}`}></div>
      </div>
    </div>
  );
};

export default PercentageAVG;
