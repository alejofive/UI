import React from "react";

const WorkedToday = () => {
  return (
    <section className="grid grid-cols-4 gap-10 px-10 mt-10">
      <div className="col-span-1 bg-white p-3 rounded-lg flex items-center justify-between border-abajo">
        <div className="flex justify-between w-full ">
          <h3 className="text-xs font-normal  text-gray-500">Worked Today</h3>
          <span className="text-xs font-normal text-gray-500 ">08:00 Hr</span>
        </div>
      </div>
    </section>
  );
};

export default WorkedToday;
