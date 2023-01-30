import React from "react";

function User() {
  return (
    <section className="col-span-10 bg-fondo pb-10">
      <div className="w-full h-[200px] relative ">
        <img
          className="w-full h-full object-cover rounded-b-2xl"
          src="/image/Graphic Side.png"
          alt=""
        />

        <div className="absolute top-4 left-9">
          <h1 className="text-white font-bold text-4xl">Hello Devs !</h1>
          <p className="text-white font-medium text-base mt-2">
            We are on a mission to help developers like you to build beautiful
            projects for free.
          </p>
        </div>

        <button className="bg-voice rounded py-3 px-6 absolute top-4 right-9 flex items-center">
          <img
            className="w-[24px] h-[24px] object-contain mr-2"
            src="/image/Voice 3.png"
            alt=""
          />
          <p className="text-white text-base">Announcments</p>
        </button>
      </div>

      <section className="grid grid-cols-4 gap-10 px-10">
        <div className="col-span-4 bg-white p-6 rounded-lg -mt-10 z-10">
          <div className="-mt-20">
            <img
              className="w-[120px] h-[120px] rounded-full object-contain"
              src="/image/user-logo.png"
              alt=""
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center ml-40">
              <h1 className="text-black text-2xl font-medium mr-8">
                Austin Robertson
              </h1>
              <p className="text-base font-normal text-gray-500">
                Web Designer
              </p>
            </div>

            <nav>
              <a
                href=""
                className="px-4 py-2 text-base font-medium rounded-3xl bg-primary text-white"
              >
                Feed
              </a>
              <a
                href=""
                className="px-4 py-2 text-base font-medium rounded-3xl text-primary"
              >
                Activity
              </a>
              <a
                href=""
                className="px-4 py-2 text-base font-medium rounded-3xl text-primary"
              >
                Freinds
              </a>
              <a
                href=""
                className="px-4 py-2 text-base font-medium rounded-3xl text-primary"
              >
                Profile
              </a>
            </nav>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-8 gap-10 px-10">
        <div className="col-span-2  rounded-lg mt-10">
          <div className="grid grid-cols-6 gap-10">
            <div className="col-span-6 p-6 bg-white rounded-lg">
              <h1 className="text-2xl text-black font-medium">News</h1>
              <div className="flex items-start mt-6">
                <img
                  className="w-[20px] h-[20px] object-contain mr-8 mt-1"
                  src="/image/chat.png"
                  alt=""
                />

                <p className="text-base font-normal text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
                  ipsum dolor sit amet
                </p>
              </div>

              <div className="flex items-start mt-4">
                <img
                  className="w-[20px] h-[20px] object-contain mr-8 mt-1"
                  src="/image/chat.png"
                  alt=""
                />

                <p className="text-base font-normal text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
                  ipsum dolor sit amet
                </p>
              </div>
            </div>

            <div className="col-span-6 p-6 bg-white rounded-lg">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl text-black font-medium">Gallery</h1>
                <span className="text-base font-normal text-gray-500">
                  132 pics
                </span>
              </div>

              <section className="grid grid-cols-6 gap-8 mt-6">
                <div className="col-span-2 bg-box-gallery1 flex items-center justify-center rounded-lg">
                  <img
                    className="w-[84px] h-[84px] object-contain"
                    src="/image/Flutter.png"
                    alt=""
                  />
                </div>

                <div className="col-span-2 bg-box-gallery1 flex items-center justify-center rounded-lg">
                  <img
                    className="w-[84px] h-[84px] object-contain"
                    src="/image/Flutter.png"
                    alt=""
                  />
                </div>

                <div className="col-span-2 bg-box-gallery1 flex items-center justify-center rounded-lg">
                  <img
                    className="w-[84px] h-[84px] object-contain"
                    src="/image/Flutter.png"
                    alt=""
                  />
                </div>

                <div className="col-span-2 bg-box-gallery1 flex items-center justify-center rounded-lg">
                  <img
                    className="w-[84px] h-[84px] object-contain"
                    src="/image/Flutter.png"
                    alt=""
                  />
                </div>
                <div className="col-span-2 bg-box-gallery1 flex items-center justify-center rounded-lg">
                  <img
                    className="w-[84px] h-[84px] object-contain"
                    src="/image/Flutter.png"
                    alt=""
                  />
                </div>
                <div className="col-span-2 bg-box-gallery1 flex items-center justify-center rounded-lg">
                  <img
                    className="w-[84px] h-[84px] object-contain"
                    src="/image/Flutter.png"
                    alt=""
                  />
                </div>
                <div className="col-span-2 bg-box-gallery1 flex items-center justify-center rounded-lg">
                  <img
                    className="w-[84px] h-[84px] object-contain"
                    src="/image/Flutter.png"
                    alt=""
                  />
                </div>
                <div className="col-span-2 bg-box-gallery1 flex items-center justify-center rounded-lg">
                  <img
                    className="w-[84px] h-[84px] object-contain"
                    src="/image/Flutter.png"
                    alt=""
                  />
                </div>
                <div className="col-span-2 bg-box-gallery1 flex items-center justify-center rounded-lg">
                  <img
                    className="w-[84px] h-[84px] object-contain"
                    src="/image/Flutter.png"
                    alt=""
                  />
                </div>
              </section>
            </div>

            <div className="col-span-6 p-6 bg-white rounded-lg">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl text-black font-medium">
                  Twitter Feeds
                </h1>
              </div>

              <div className="mt-7 linea4 pb-6">
                <div className="flex items-center">
                  <div className="bg-box-gallery1 flex items-center justify-center rounded-full w-[64px] h-[64px]">
                    <img
                      className="w-[84px] h-[84px] object-contain"
                      src="/image/Flutter.png"
                      alt=""
                    />
                  </div>
                  <div className="ml-4 ">
                    <h2 className="text-base font-medium text-black">
                      Figma Community
                    </h2>
                    <p className="text-base font-normal text-gray-500 flex items-center">
                      @figma20{" "}
                      <img
                        className="w-[12px] h-[12px] rounded-full ml-2"
                        src="/image/Orion_checkmark 1.png"
                        alt=""
                      />
                    </p>
                  </div>
                </div>

                <div className="mt-4">
                  <p className="text-base font-normal text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.Lorem ipsum dolor sit amet
                  </p>

                  <div className="mt-2 mb-2">
                    <a
                      href=""
                      className="text-base font-normal text-dark-primary ml-1"
                    >
                      #Html
                    </a>
                    <a
                      href=""
                      className="text-base font-normal text-dark-primary ml-1"
                    >
                      #Bootstrp
                    </a>
                  </div>

                  <span className="text-base font-normal text-gray-500">
                    07 Jan 2020
                  </span>
                </div>
              </div>

              <div className="mt-7 linea4 pb-6">
                <div className="flex items-center">
                  <div className="bg-box-gallery1 flex items-center justify-center rounded-full w-[64px] h-[64px]">
                    <img
                      className="w-[84px] h-[84px] object-contain"
                      src="/image/Flutter.png"
                      alt=""
                    />
                  </div>
                  <div className="ml-4 ">
                    <h2 className="text-base font-medium text-black">
                      Figma Community
                    </h2>
                    <p className="text-base font-normal text-gray-500 flex items-center">
                      @figma20{" "}
                      <img
                        className="w-[12px] h-[12px] rounded-full ml-2"
                        src="/image/Orion_checkmark 1.png"
                        alt=""
                      />
                    </p>
                  </div>
                </div>

                <div className="mt-4">
                  <p className="text-base font-normal text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.Lorem ipsum dolor sit amet
                  </p>

                  <div className="mt-2 mb-2">
                    <a
                      href=""
                      className="text-base font-normal text-dark-primary ml-1"
                    >
                      #Html
                    </a>
                    <a
                      href=""
                      className="text-base font-normal text-dark-primary ml-1"
                    >
                      #Bootstrp
                    </a>
                  </div>

                  <span className="text-base font-normal text-gray-500">
                    07 Jan 2020
                  </span>
                </div>
              </div>

              <div className="mt-7 pb-6">
                <div className="flex items-center">
                  <div className="bg-box-gallery1 flex items-center justify-center rounded-full w-[64px] h-[64px]">
                    <img
                      className="w-[84px] h-[84px] object-contain"
                      src="/image/Flutter.png"
                      alt=""
                    />
                  </div>
                  <div className="ml-4 ">
                    <h2 className="text-base font-medium text-black">
                      Figma Community
                    </h2>
                    <p className="text-base font-normal text-gray-500 flex items-center">
                      @figma20{" "}
                      <img
                        className="w-[12px] h-[12px] rounded-full ml-2"
                        src="/image/Orion_checkmark 1.png"
                        alt=""
                      />
                    </p>
                  </div>
                </div>

                <div className="mt-4">
                  <p className="text-base font-normal text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.Lorem ipsum dolor sit amet
                  </p>

                  <div className="mt-2 mb-2">
                    <a
                      href=""
                      className="text-base font-normal text-dark-primary ml-1"
                    >
                      #Html
                    </a>
                    <a
                      href=""
                      className="text-base font-normal text-dark-primary ml-1"
                    >
                      #Bootstrp
                    </a>
                  </div>

                  <span className="text-base font-normal text-gray-500">
                    07 Jan 2020
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

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
                    <h3 className="text-black text-xl font-medium">
                      Wade Warren
                    </h3>
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
                      <p className="text-base font-normal text-gray-500 ">
                        Like
                      </p>
                    </div>
                    <div className="flex items-center ml-4">
                      <button>
                        <img
                          className="w-[18px] h-[17px] object-contain mr-2"
                          src="/image/chat.png"
                          alt=""
                        />
                      </button>
                      <p className="text-base font-normal text-gray-500 ">
                        Like
                      </p>
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                    quam tortor nec arcu. Euismod neque ultricies eget
                    adipiscing condimentum.Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Id quam tortor nec arcu.
                    Euismod neque ultricies eget adipiscing condimentum.
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
                    <h3 className="text-black text-xl font-medium">
                      Wade Warren
                    </h3>
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                  quam tortor nec arcu. Euismod neque ultricies eget adipiscing
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

        <div className="col-span-2 rounded-lg mt-10">
          <div className="grid grid-cols-6 gap-10">
            <div className="col-span-6 p-6 bg-white rounded-lg">
              <h1 className="text-2xl text-black font-medium">About</h1>
              <p className="text-base font-normal text-gray-500 mt-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
                ipsum dolor sit amet
              </p>
              <div className="mt-4">
                <div className="mt-2">
                  <p className="text-base font-normal text-gray-500">
                    Email:
                    <a href="" className=" text-dark-primary ml-2">
                      nikjone@demoo.com
                    </a>
                  </p>
                </div>

                <div className="mt-2">
                  <p className="text-base font-normal text-gray-500">
                    Email:
                    <a href="" className=" text-dark-primary ml-2">
                      nikjone@demoo.com
                    </a>
                  </p>
                </div>

                <div className="mt-2">
                  <p className="text-base font-normal text-gray-500">
                    Email:
                    <a href="" className=" text-dark-primary ml-2">
                      nikjone@demoo.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-span-6 p-6 bg-white rounded-lg">
              <h1 className="text-2xl text-black font-medium">Stories</h1>

              <div className="flex items-center mt-7">
                <div className="bg-box-gallery1 flex items-center justify-center rounded-full w-[88px] h-[88px]">
                  <img
                    className="w-[84px] h-[84px] object-contain"
                    src="/image/Flutter.png"
                    alt=""
                  />
                </div>
                <div className="ml-4">
                  <h2 className="text-xl font-medium text-black">Web Design</h2>
                  <p className="text-base font-normal text-gray-500 flex items-center">
                    1 hour ago
                  </p>
                </div>
              </div>

              <div className="flex items-center mt-7">
                <div className="bg-box-gallery1 flex items-center justify-center rounded-full w-[88px] h-[88px]">
                  <img
                    className="w-[84px] h-[84px] object-contain"
                    src="/image/Flutter.png"
                    alt=""
                  />
                </div>
                <div className="ml-4">
                  <h2 className="text-xl font-medium text-black">Web Design</h2>
                  <p className="text-base font-normal text-gray-500 flex items-center">
                    1 hour ago
                  </p>
                </div>
              </div>

              <div className="flex items-center mt-7">
                <div className="bg-box-gallery1 flex items-center justify-center rounded-full w-[88px] h-[88px]">
                  <img
                    className="w-[84px] h-[84px] object-contain"
                    src="/image/Flutter.png"
                    alt=""
                  />
                </div>
                <div className="ml-4">
                  <h2 className="text-xl font-medium text-black">Web Design</h2>
                  <p className="text-base font-normal text-gray-500 flex items-center">
                    1 hour ago
                  </p>
                </div>
              </div>
            </div>

            <div className="col-span-6 p-6 bg-white rounded-lg">
              <h1 className="text-2xl text-black font-medium">Suggestions</h1>

              <div className="flex items-center mt-7">
                <div className="flex items-center justify-between w-full">
                  <div className="flex">
                    <div className="w-[56px] h-[56px] text-dark-primary-border2 rounded-full flex items-center justify-center mr-6">
                      <img
                        className="w-[50px] h-[50px] object-contain"
                        src="/image/Flutter.png"
                        alt=""
                      />
                    </div>
                    <div className="">
                      <h2 className="text-base font-medium text-black">
                        Web Design
                      </h2>
                      <p className="text-sm font-normal text-gray-500 flex items-center">
                        1 hour ago
                      </p>
                    </div>
                  </div>
                  <button className="w-[40px] h-[40px] text-dark-primary-border rounded-full">
                    <img
                      className="w-[16px] h-[16px]"
                      src="/img/Add User.png"
                      alt=""
                    />
                  </button>
                </div>
              </div>

              <div className="flex items-center mt-7">
                <div className="flex items-center justify-between w-full">
                  <div className="flex">
                    <div className="w-[56px] h-[56px] text-dark-primary-border2 rounded-full flex items-center justify-center mr-6">
                      <img
                        className="w-[50px] h-[50px] object-contain"
                        src="/image/Flutter.png"
                        alt=""
                      />
                    </div>
                    <div className="">
                      <h2 className="text-base font-medium text-black">
                        Web Design
                      </h2>
                      <p className="text-sm font-normal text-gray-500 flex items-center">
                        1 hour ago
                      </p>
                    </div>
                  </div>
                  <button className="w-[40px] h-[40px] text-dark-primary-border rounded-full">
                    <img
                      className="w-[16px] h-[16px]"
                      src="/img/Add User.png"
                      alt=""
                    />
                  </button>
                </div>
              </div>

              <div className="flex items-center mt-7">
                <div className="flex items-center justify-between w-full">
                  <div className="flex">
                    <div className="w-[56px] h-[56px] text-dark-primary-border2 rounded-full flex items-center justify-center mr-6">
                      <img
                        className="w-[50px] h-[50px] object-contain"
                        src="/image/Flutter.png"
                        alt=""
                      />
                    </div>
                    <div className="">
                      <h2 className="text-base font-medium text-black">
                        Web Design
                      </h2>
                      <p className="text-sm font-normal text-gray-500 flex items-center">
                        1 hour ago
                      </p>
                    </div>
                  </div>
                  <button className="w-[40px] h-[40px] text-dark-primary-border rounded-full">
                    <img
                      className="w-[16px] h-[16px]"
                      src="/img/Add User.png"
                      alt=""
                    />
                  </button>
                </div>
              </div>

              <div className="flex items-center mt-7">
                <div className="flex items-center justify-between w-full">
                  <div className="flex">
                    <div className="w-[56px] h-[56px] text-dark-primary-border2 rounded-full flex items-center justify-center mr-6">
                      <img
                        className="w-[50px] h-[50px] object-contain"
                        src="/image/Flutter.png"
                        alt=""
                      />
                    </div>
                    <div className="">
                      <h2 className="text-base font-medium text-black">
                        Web Design
                      </h2>
                      <p className="text-sm font-normal text-gray-500 flex items-center">
                        1 hour ago
                      </p>
                    </div>
                  </div>
                  <button className="w-[40px] h-[40px] text-dark-primary-border rounded-full">
                    <img
                      className="w-[16px] h-[16px]"
                      src="/img/Add User.png"
                      alt=""
                    />
                  </button>
                </div>
              </div>

              <div className="flex items-center mt-7">
                <div className="flex items-center justify-between w-full">
                  <div className="flex">
                    <div className="w-[56px] h-[56px] text-dark-primary-border2 rounded-full flex items-center justify-center mr-6">
                      <img
                        className="w-[50px] h-[50px] object-contain"
                        src="/image/Flutter.png"
                        alt=""
                      />
                    </div>
                    <div className="">
                      <h2 className="text-base font-medium text-black">
                        Web Design
                      </h2>
                      <p className="text-sm font-normal text-gray-500 flex items-center">
                        1 hour ago
                      </p>
                    </div>
                  </div>
                  <button className="w-[40px] h-[40px] text-dark-primary-border rounded-full">
                    <img
                      className="w-[16px] h-[16px]"
                      src="/img/Add User.png"
                      alt=""
                    />
                  </button>
                </div>
              </div>

              <div className="flex items-center mt-7">
                <div className="flex items-center justify-between w-full">
                  <div className="flex">
                    <div className="w-[56px] h-[56px] text-dark-primary-border2 rounded-full flex items-center justify-center mr-6">
                      <img
                        className="w-[50px] h-[50px] object-contain"
                        src="/image/Flutter.png"
                        alt=""
                      />
                    </div>
                    <div className="">
                      <h2 className="text-base font-medium text-black">
                        Web Design
                      </h2>
                      <p className="text-sm font-normal text-gray-500 flex items-center">
                        1 hour ago
                      </p>
                    </div>
                  </div>
                  <button className="w-[40px] h-[40px] text-dark-primary-border rounded-full">
                    <img
                      className="w-[16px] h-[16px]"
                      src="/img/Add User.png"
                      alt=""
                    />
                  </button>
                </div>
              </div>

              <div className="flex items-center mt-7">
                <div className="flex items-center justify-between w-full">
                  <div className="flex">
                    <div className="w-[56px] h-[56px] text-dark-primary-border2 rounded-full flex items-center justify-center mr-6">
                      <img
                        className="w-[50px] h-[50px] object-contain"
                        src="/image/Flutter.png"
                        alt=""
                      />
                    </div>
                    <div className="">
                      <h2 className="text-base font-medium text-black">
                        Web Design
                      </h2>
                      <p className="text-sm font-normal text-gray-500 flex items-center">
                        1 hour ago
                      </p>
                    </div>
                  </div>
                  <button className="w-[40px] h-[40px] text-dark-primary-border rounded-full">
                    <img
                      className="w-[16px] h-[16px]"
                      src="/img/Add User.png"
                      alt=""
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default User;
