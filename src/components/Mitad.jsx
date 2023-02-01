import React from "react";

const Mitad = () => {
  return (
    <div className="col-span-4 rounded-lg mt-10">
      <div className="grid grid-cols-6 gap-10">
        <div className="col-span-6 p-6 bg-white rounded-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-[76px] h-[76px] text-dark-primary-border rounded-full flex items-center justify-center">
                <img
                  className="w-[64px] h-[64px] object-contain"
                  src="image/Cube-min.png"
                  alt=""
                />
              </div>

              <div className="ml-6">
                <h3 className="text-black text-xl font-medium">Wade Warren</h3>
                <p className="text-dark-primary text-base">colleages</p>
              </div>
            </div>

            <div className="flex items-center">
              <span className="text-base font-normal text-gray-500">
                29 mins
              </span>
              <button className="ml-2">
                <img src="image/Polygon 5.png" alt="" />
              </button>
            </div>
          </div>

          <div className="mt-8">
            <img
              className="w-full h-[405px] object-contain"
              src="/image/Staged Scene02 1.png"
              alt=""
            />

            <div className="flex items-center justify-between linea4 pb-6">
              <div className="px-7 flex items-center">
                <div className="flex items-center ">
                  <button>
                    <img
                      className="w-[18px] h-[17px] object-contain mr-2"
                      src="/image/corazon.png"
                      alt=""
                    />
                  </button>
                  <p className="text-base font-normal text-gray-500 ">Like</p>
                </div>
                <div className="flex items-center ml-4">
                  <button>
                    <img
                      className="w-[18px] h-[17px] object-contain mr-2"
                      src="/image/chat.png"
                      alt=""
                    />
                  </button>
                  <p className="text-base font-normal text-gray-500 ">Like</p>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  className="w-[24px] h-[24px] object-contain"
                  src="/image/Group 33549.png"
                  alt=""
                />
                <span className="text-dark-primary ml-3">99 Share</span>
              </div>
            </div>

            <div className="px-7 linea4 py-6">
              <p className=" text-base font-normal text-gray-500 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id quam
                tortor nec arcu. Euismod neque ultricies eget adipiscing
                condimentum.Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Id quam tortor nec arcu. Euismod neque ultricies eget
                adipiscing condimentum.
              </p>
            </div>

            <div className="px-7 mt-6">
              <div className="flex">
                <div className="w-[56px] h-[56px] text-dark-primary-border2 rounded-full flex items-center justify-center mr-6">
                  <img
                    className="w-[50px] h-[50px] object-contain"
                    src="/image/Sphere-min.png"
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="text-xl text-black font-medium">
                    Paul Molive
                  </h3>
                  <p className=" text-base font-normal text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur elit.
                  </p>
                  <div className="flex items-center">
                    <div className="flex">
                      <button>
                        <img
                          className="w-[18px] h-[17px] object-contain mr-2"
                          src="/image/corazon.png"
                          alt=""
                        />
                      </button>

                      <p className="text-base font-normal text-dark-primary">
                        Like
                      </p>
                    </div>

                    <div className="flex ml-5">
                      <button>
                        <img
                          className="w-[18px] h-[17px] object-contain mr-2"
                          src="/image/layer1.png"
                          alt=""
                        />
                      </button>

                      <p className="text-base font-normal text-dark-primary">
                        Reply
                      </p>
                    </div>

                    <div className="flex ml-5">
                      <p className="text-dark-primary">Translate</p>
                    </div>

                    <div className="flex ml-5">
                      <p className=" text-base font-normal text-gray-500">
                        5 min
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex mt-10">
                <div className="w-[56px] h-[56px] text-dark-primary-border2 rounded-full flex items-center justify-center mr-6">
                  <img
                    className="w-[50px] h-[50px] object-contain"
                    src="/image/Sphere-min.png"
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="text-xl text-black font-medium">
                    Paul Molive
                  </h3>
                  <p className=" text-base font-normal text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur elit.
                  </p>
                  <div className="flex items-center">
                    <div className="flex">
                      <button>
                        <img
                          className="w-[18px] h-[17px] object-contain mr-2"
                          src="/image/corazon.png"
                          alt=""
                        />
                      </button>

                      <p className="text-base font-normal text-dark-primary">
                        Like
                      </p>
                    </div>

                    <div className="flex ml-5">
                      <button>
                        <img
                          className="w-[18px] h-[17px] object-contain mr-2"
                          src="/image/layer1.png"
                          alt=""
                        />
                      </button>

                      <p className="text-base font-normal text-dark-primary">
                        Reply
                      </p>
                    </div>

                    <div className="flex ml-5">
                      <p className="text-dark-primary">Translate</p>
                    </div>

                    <div className="flex ml-5">
                      <p className=" text-base font-normal text-gray-500">
                        5 min
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 border rounded-lg w-full relative">
              <input
                type="text"
                placeholder="Lovely!"
                className="py-4 px-6 w-full"
              />
              <div className="flex items-center absolute top-4 right-4">
                <button>
                  <img
                    className="w-[15px] h-[15px] object-contain"
                    src="/image/Group 336212.png"
                    alt=""
                  />
                </button>
                <button className="ml-8">
                  <img
                    className="w-[24px] h-[24px] object-contain"
                    src="/image/Frame 35624.png"
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-6 p-6 bg-white rounded-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-[76px] h-[76px] text-dark-primary-border2 rounded-full flex items-center justify-center">
                <img
                  className="w-[64px] h-[64px] object-contain"
                  src="image/Wordpress.png"
                  alt=""
                />
              </div>

              <div className="ml-6">
                <h3 className="text-black text-xl font-medium">Wade Warren</h3>
                <p className="text-dark-primary text-base">colleages</p>
              </div>
            </div>

            <div className="flex items-center">
              <span className="text-base font-normal text-gray-500">
                29 mins
              </span>
              <button className="ml-2">
                <img src="image/Polygon 5.png" alt="" />
              </button>
            </div>
          </div>

          <div className=" text-base font-normal text-gray-500 mt-10 linea4 ">
            <p className="pb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id quam
              tortor nec arcu. Euismod neque ultricies eget adipiscing
              condimentum.Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Id quam tortor nec arcu. Euismod neque ultricies eget
              adipiscing condimentum.
            </p>
          </div>

          <div className="flex items-center justify-between pb-6 mt-2">
            <div className="px-7 flex items-center">
              <div className="flex items-center ">
                <button>
                  <img
                    className="w-[18px] h-[17px] object-contain mr-2"
                    src="/image/corazon.png"
                    alt=""
                  />
                </button>
                <p className="text-base font-normal text-gray-500 ">Like</p>
              </div>
              <div className="flex items-center ml-4">
                <button>
                  <img
                    className="w-[18px] h-[17px] object-contain mr-2"
                    src="/image/chat.png"
                    alt=""
                  />
                </button>
                <p className="text-base font-normal text-gray-500 ">Like</p>
              </div>
            </div>
            <div className="flex items-center">
              <img
                className="w-[24px] h-[24px] object-contain"
                src="/image/Group 33549.png"
                alt=""
              />
              <span className="text-dark-primary ml-3">99 Share</span>
            </div>
          </div>

          <div className="border rounded-lg w-full relative mt-4">
            <input
              type="text"
              placeholder="Lovely!"
              className="py-4 px-6 w-full"
            />
            <div className="flex items-center absolute top-4 right-4">
              <button>
                <img
                  className="w-[15px] h-[15px] object-contain"
                  src="/image/Group 336212.png"
                  alt=""
                />
              </button>
              <button className="ml-8">
                <img
                  className="w-[24px] h-[24px] object-contain"
                  src="/image/Frame 35624.png"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mitad;
