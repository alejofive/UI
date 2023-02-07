import React from "react";

const WorkedToday = (props) => {
  const { title, color, hour } = props;
  return (
    <div
      className={`col-span-1 bg-white p-3 rounded-lg flex items-center justify-between border-abajo${color}`}
    >
      <div className="flex justify-between w-full ">
        <h3 className="text-xs font-normal  text-gray-500">{title}</h3>
        <span className="text-xs font-normal text-gray-500 ">{hour} Hr</span>
      </div>
    </div>
  );
};

export default WorkedToday;
