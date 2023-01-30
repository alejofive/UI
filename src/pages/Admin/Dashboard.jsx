import React from "react";
import Hello from "../../components/Hello";
import PorcentajeAVG from "../../components/PorcentajeAVG";

const Dashboard = () => {
  return (
    <section className="col-span-10 bg-fondo pb-10">
      <Hello />

      <PorcentajeAVG />
      <section className="grid grid-cols-4 gap-10 px-10 mt-10">
        <div className="col-span-1 bg-car-big1 p-6 rounded-lg flex items-center justify-between">
          <div className="bg-cart-flecha2 w-[53px] h-[53px] rounded-2xl flex items-center justify-center">
            <img
              className="w-[23px] h-[30px]"
              src="/image/Profile.png"
              alt=""
            />
          </div>
          <div className="text-end">
            <h3 className="text-3xl font-medium text-color-1">5600</h3>
            <span className="color-text1 font-normal text-xs ">Doctors</span>
          </div>
        </div>

        <div className="col-span-1 bg-car-big2 p-6 rounded-lg flex items-center justify-between">
          <div className="bg-cart-user w-[53px] h-[53px] rounded-2xl flex items-center justify-center">
            <img
              className="w-[23px] h-[30px] "
              src="/image/Profile2.png"
              alt=""
            />
          </div>
          <div className="text-end">
            <h3 className="text-3xl font-medium text-color-1">5600</h3>
            <span className="color-text2 font-normal text-xs ">Doctors</span>
          </div>
        </div>

        <div className="col-span-1  bg-car-big3 p-6 rounded-lg flex items-center justify-between">
          <div className="bg-cart-user2 w-[53px] h-[53px] rounded-2xl flex items-center justify-center">
            <img
              className="w-[33px] h-[30px] "
              src="/image/Profile3.png"
              alt=""
            />
          </div>
          <div className="text-end">
            <h3 className="text-3xl font-medium text-color-1">3500</h3>
            <span className="color-text2 font-normal text-xs ">Patients</span>
          </div>
        </div>

        <div className="col-span-1  bg-car-big4 p-6 rounded-lg flex items-center justify-between">
          <div className="bg-cart-user4 w-[53px] h-[53px] rounded-2xl flex items-center justify-center">
            <img
              className="w-[23px] h-[30px] "
              src="/image/Profile4.png"
              alt=""
            />
          </div>
          <div className="text-end">
            <h3 className="text-3xl font-medium text-color-1">4500</h3>
            <span className="color-text4 font-normal text-xs ">Doctors</span>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-4 gap-10 px-10 mt-10">
        <div className="col-span-1 bg-white p-6 rounded-lg flex items-center justify-between">
          <div className="bg-porcentaje2 w-[53px] h-[53px] rounded-2xl flex items-center justify-center">
            <img
              className="w-[36px] h-[20px]"
              src="/image/Group-user.png"
              alt=""
            />
          </div>
          <div className="text-end">
            <span className="text-xs font-normal text-gray-500 ">
              Coustemers
            </span>
            <h3 className="text-3xl font-medium text-color-1">75</h3>
          </div>
        </div>

        <div className="col-span-1 bg-white p-6 rounded-lg flex items-center justify-between">
          <div className="bg-user-box2 w-[53px] h-[53px] rounded-2xl flex items-center justify-center">
            <img
              className="w-[23px] h-[30px]"
              src="/image/user-white1.png"
              alt=""
            />
          </div>
          <div className="text-end">
            <span className="text-xs font-normal text-gray-500 ">
              Coustemers
            </span>
            <h3 className="text-3xl font-medium text-color-1">75</h3>
          </div>
        </div>

        <div className="col-span-1 bg-white p-6 rounded-lg flex items-center justify-between">
          <div className="bg-user-box3 w-[53px] h-[53px] rounded-2xl flex items-center justify-center">
            <img
              className="w-[23px] h-[30px]"
              src="/image/user-white1.png"
              alt=""
            />
          </div>
          <div className="text-end">
            <span className="text-xs font-normal text-gray-500 ">
              Coustemers
            </span>
            <h3 className="text-3xl font-medium text-color-1">75</h3>
          </div>
        </div>

        <div className="col-span-1 bg-white p-6 rounded-lg flex items-center justify-between">
          <div className="bg-user-box4 w-[53px] h-[53px] rounded-2xl flex items-center justify-center">
            <img
              className="w-[23px] h-[30px]"
              src="/image/user-white1.png"
              alt=""
            />
          </div>
          <div className="text-end">
            <span className="text-xs font-normal text-gray-500 ">
              Coustemers
            </span>
            <h3 className="text-3xl font-medium text-color-1">75</h3>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-4 gap-10 px-10 mt-10">
        <div className="col-span-1 bg-white p-3 rounded-lg flex items-center justify-between border-abajo">
          <div className="flex justify-between w-full ">
            <h3 className="text-xs font-normal  text-gray-500">Worked Today</h3>
            <span className="text-xs font-normal text-gray-500 ">08:00 Hr</span>
          </div>
        </div>

        <div className="col-span-1 bg-white p-3 rounded-lg flex items-center justify-between border-abajo2">
          <div className="flex justify-between w-full ">
            <h3 className="text-xs font-normal  text-gray-500">Worked Today</h3>
            <span className="text-xs font-normal text-gray-500 ">08:00 Hr</span>
          </div>
        </div>

        <div className="col-span-1 bg-white p-3 rounded-lg flex items-center justify-between border-abajo3">
          <div className="flex justify-between w-full ">
            <h3 className="text-xs font-normal  text-gray-500">Worked Today</h3>
            <span className="text-xs font-normal text-gray-500 ">08:00 Hr</span>
          </div>
        </div>

        <div className="col-span-1 bg-white p-3 rounded-lg flex items-center justify-between border-abajo4">
          <div className="flex justify-between w-full ">
            <h3 className="text-xs font-normal  text-gray-500">Worked Today</h3>
            <span className="text-xs font-normal text-gray-500 ">08:00 Hr</span>
          </div>
        </div>
      </section>

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
            <p className="text-black font-medium text-[19px]">
              Positive Reviews
            </p>
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
            <span className="color-liner2-text text-base font-medium">
              4.5/5
            </span>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-6 gap-10 px-10 mt-10">
        <div className="col-span-2 bg-white p-6 rounded-lg flex flex-col w-full ">
          <h1 className="text-3xl text-black font-medium">$3450</h1>

          <div className="mt-10">
            <span className="text-xs text-gray-500 font-normal">
              Young Current Balance
            </span>
            <p className="text-xs font-medium text-color-1">20% ($520)</p>
          </div>

          <button className="py-2 rounded bg-porcentaje w-full text-white text-xs font-normal mt-10">
            Add Credit
          </button>

          <div className="mt-10">
            <div>
              <div className="flex justify-between">
                <p className="text-xs text-gray-500 font-normal">Insurance</p>
                <span className="text-sm font-medium">18</span>
              </div>
              <div className="w-full h-2 mt-2 rounded-md bg-cart-flecha">
                <div className="h-full w-2/4 bg-porcentaje2 rounded-md"></div>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex justify-between">
                <p className="text-xs text-gray-500 font-normal">Savings</p>
                <span className="text-sm font-medium">124</span>
              </div>
              <div className="w-full h-2 mt-2 rounded-md bg-cart-flecha">
                <div className="h-full w-2/4 bg-porcentaje3 rounded-md"></div>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex justify-between">
                <p className="text-xs text-gray-500 font-normal">Investement</p>
                <span className="text-sm font-medium">74</span>
              </div>
              <div className="w-full h-2 mt-2 rounded-md bg-cart-flecha">
                <div className="h-full w-2/4 bg-porcentaje4 rounded-md"></div>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex justify-between">
                <p className="text-xs text-gray-500 font-normal">Progress</p>
                <span className="text-sm font-medium">89</span>
              </div>
              <div className="w-full h-2 mt-2 rounded-md bg-cart-flecha">
                <div className="h-full w-2/4 bg-porcentaje3 rounded-md"></div>
              </div>
            </div>
          </div>
        </div>

        <section className="col-span-2">
          <div className="grid grid-cols-2 gap-10">
            <div className="col-span-1 bg-white p-8 rounded-lg">
              <div className="bg-porcentaje4 w-[53px] h-[53px] rounded-2xl flex items-center justify-center">
                <img
                  className="w-[36px] h-[20px]"
                  src="/image/Group-user.png"
                  alt=""
                />
              </div>

              <div className="mt-11 flex flex-col items-start">
                <p className="text-xs font-normal text-gray-500">CUSTOMRE</p>
                <span className="text-2xl text-color-1 font-normal">
                  60,586
                </span>
                <span className="bg-porcentaje4 p-1 rounded-lg flex items-center mt-6">
                  <img
                    className="w-[15px] h-[15px]"
                    src="/image/Arrow - Up.png"
                    alt=""
                  />
                  <p className="text-white text-[13px] ">3.48%</p>
                </span>
              </div>
            </div>

            <div className="col-span-1 bg-white p-8 rounded-lg">
              <div className="bg-user-box2 w-[53px] h-[53px] rounded-2xl flex items-center justify-center">
                <img
                  className="w-[23px] h-[20px] object-contain"
                  src="/image/Group 33872.png"
                  alt=""
                />
              </div>

              <div className="mt-11 flex flex-col items-start">
                <p className="text-xs font-normal text-gray-500">CUSTOMRE</p>
                <span className="text-2xl text-color-1 font-normal">
                  60,586
                </span>
                <span className="bg-user-box2  p-1 rounded-lg flex items-center mt-6">
                  <img
                    className="w-[15px] h-[15px]"
                    src="/image/Arrow - Up.png"
                    alt=""
                  />
                  <p className="text-white text-[13px] ">3.48%</p>
                </span>
              </div>
            </div>

            <div className="col-span-1 bg-white p-8 rounded-lg">
              <div className="bg-box-plus w-[53px] h-[53px] rounded-2xl flex items-center justify-center">
                <img
                  className="w-[25px] h-[25px] object-contain"
                  src="/image/Group 338694.png"
                  alt=""
                />
              </div>

              <div className="mt-11 flex flex-col items-start">
                <p className="text-xs font-normal text-gray-500">CUSTOMRE</p>
                <span className="text-2xl text-color-1 font-normal">
                  60,586
                </span>
                <span className="bg-box-plus  p-1 rounded-lg flex items-center mt-6">
                  <img
                    className="w-[15px] h-[15px]"
                    src="/image/Arrow - Up.png"
                    alt=""
                  />
                  <p className="text-white text-[13px] ">3.48%</p>
                </span>
              </div>
            </div>

            <div className="col-span-1 bg-white p-8 rounded-lg">
              <div className="bg-porcentaje w-[53px] h-[53px] rounded-2xl flex items-center justify-center">
                <img
                  className="w-[25px] h-[25px] object-contain"
                  src="/image/Group 338695.png"
                  alt=""
                />
              </div>

              <div className="mt-11 flex flex-col items-start">
                <p className="text-xs font-normal text-gray-500">CUSTOMRE</p>
                <span className="text-2xl text-color-1 font-normal">
                  60,586
                </span>
                <span className="bg-porcentaje  p-1 rounded-lg flex items-center mt-6">
                  <img
                    className="w-[15px] h-[15px]"
                    src="/image/Arrow - Up.png"
                    alt=""
                  />
                  <p className="text-white text-[13px] ">3.48%</p>
                </span>
              </div>
            </div>
          </div>
        </section>

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
      </section>

      <section className="grid grid-cols-12 gap-10 px-10 mt-10">
        <div className="col-span-6">
          <div className="grid grid-cols-6 gap-10">
            <div className="col-span-3 bg-white p-6 rounded-lg  z-10">
              <div className="flex items-center justify-between">
                <p className="text-base font-bold text-gray-500 ">Leads</p>
                <div className="bg-primary px-2 py-1 rounded">
                  <p className="text-white">Monthly</p>
                </div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <h3 className="text-black text-3xl font-medium"> $35000</h3>
                </div>
              </div>

              <div className="mt-2">
                <div className="flex justify-between">
                  <p className="text-base text-gray-500 font-normal">
                    Insurance
                  </p>
                  <span className="text-base font-medium">18%</span>
                </div>
                <div className="w-full h-2 mt-2 rounded-md bg-cart-flecha">
                  <div className="h-full w-2/4 bg-primary rounded-md"></div>
                </div>
              </div>
            </div>

            <div className="col-span-3 bg-white p-6 rounded-lg  z-10">
              <div className="flex items-center justify-between">
                <p className="text-base font-bold text-gray-500 ">Leads</p>
                <div className="bg-user-box2 px-2 py-1 rounded">
                  <p className="text-white">Monthly</p>
                </div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <h3 className="text-black text-3xl font-medium"> $35000</h3>
                </div>
              </div>

              <div className="mt-2">
                <div className="flex justify-between">
                  <p className="text-base text-gray-500 font-normal">
                    Insurance
                  </p>
                  <span className="text-base font-medium">18%</span>
                </div>
                <div className="w-full h-2 mt-2 rounded-md bg-cart-flecha">
                  <div className="h-full w-2/4 bg-user-box2 rounded-md"></div>
                </div>
              </div>
            </div>

            <div className="col-span-3 bg-white p-6 rounded-lg  z-10">
              <div className="flex items-center justify-between">
                <p className="text-base font-bold text-gray-500 ">Leads</p>
                <div className="bg-user-box4 px-2 py-1 rounded">
                  <p className="text-white">Monthly</p>
                </div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <h3 className="text-black text-3xl font-medium"> $35000</h3>
                </div>
              </div>

              <div className="mt-2">
                <div className="flex justify-between">
                  <p className="text-base text-gray-500 font-normal">
                    Insurance
                  </p>
                  <span className="text-base font-medium">18%</span>
                </div>
                <div className="w-full h-2 mt-2 rounded-md bg-cart-flecha">
                  <div className="h-full w-2/4 bg-user-box4 rounded-md"></div>
                </div>
              </div>
            </div>

            <div className="col-span-3 bg-white p-6 rounded-lg  z-10">
              <div className="flex items-center justify-between">
                <p className="text-base font-bold text-gray-500 ">Leads</p>
                <div className="bg-box-plus px-2 py-1 rounded">
                  <p className="text-white">Monthly</p>
                </div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <h3 className="text-black text-3xl font-medium"> $35000</h3>
                </div>
              </div>

              <div className="mt-2">
                <div className="flex justify-between">
                  <p className="text-base text-gray-500 font-normal">
                    Insurance
                  </p>
                  <span className="text-base font-medium">18%</span>
                </div>
                <div className="w-full h-2 mt-2 rounded-md bg-cart-flecha">
                  <div className="h-full w-2/4 bg-box-plus rounded-md"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-6 bg-white p-6">
          <div className="flex justify-center items-center flex-col">
            <div className="w-[80px] h-[80px] ">
              <img
                className="w-full h-full rounded-full object-cover"
                src="image/miniatura.png"
                alt=""
              />
            </div>

            <h1 className="text-sm font-medium text-black mt-6 mb-4">
              Bini Jets
            </h1>
            <p className="text-base text-gray-500 font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in
              arcu turpis. Nunc
            </p>

            <button className="bg-box-plus text-white text-base font-normal py-2 px-6 mt-4">
              Assign
            </button>

            <div className="flex w-full justify-between linea3 mt-5 pt-5">
              <div>
                <h1 className="text-black text-3xl">4500</h1>
                <p className="text-base text-gray-500 font-normal">
                  Operations
                </p>
              </div>
              <div>
                <h1 className="text-black text-3xl">3.9</h1>
                <p className="text-base text-gray-500 font-normal">
                  Medical Rating
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Dashboard;
