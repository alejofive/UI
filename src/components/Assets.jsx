import React from "react";

const Assets = () => {
  return (
    <section className="col-span-2">
      <div className="grid grid-cols-1 gap-10">
        <div className="col-span-1 bg-white  p-6 rounded-lg">
          <h1 className="text-color-1 text-3xl font-medium">Assets</h1>
          <div className="flex flex-col w-full items-end">
            <span className="text-[40px] font-medium text-color-1">
              -108.56k
            </span>
            <p className="text-xs font-normal  text-gray-500">
              Lorem ipsum dolor sit amet
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Assets;
