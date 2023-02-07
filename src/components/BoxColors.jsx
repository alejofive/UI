import React from "react";

const BoxColors = (props) => {
  const { title, color, cant } = props;
  return (
    <div
      className={`col-span-1 bg-car-big${color} p-6 rounded-lg flex items-center justify-between`}
    >
      <div
        className={`bg-cart-u${color} w-[53px] h-[53px] rounded-2xl flex items-center justify-center`}
      >
        <img
          className="w-[23px] h-[30px]"
          src={`/image/Profile${color}.png`}
          alt=""
        />
      </div>
      <div className="text-end">
        <h3 className="text-3xl font-medium text-color-1">{cant}</h3>
        <span className={`color-text${color} font-normal text-xs `}>
          {title}
        </span>
      </div>
    </div>
  );
};

export default BoxColors;
