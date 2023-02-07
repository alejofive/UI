import React from "react";

const Customers = (props) => {
  const { title, color, cant } = props;
  return (
    <div className="col-span-1 bg-white p-6 rounded-lg flex items-center justify-between">
      <div
        className={`bg-porcentaje${color} w-[53px] h-[53px] rounded-2xl flex items-center justify-center`}
      >
        <img className="w-[36px] h-[20px]" src="/image/Group-user.png" alt="" />
      </div>
      <div className="text-end">
        <span className="text-xs font-normal text-gray-500 ">{title}</span>
        <h3 className="text-3xl font-medium text-color-1">{cant}</h3>
      </div>
    </div>
  );
};

export default Customers;
