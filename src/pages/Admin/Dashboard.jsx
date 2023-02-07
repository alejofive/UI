import React, { useState } from "react";
import LayoutAdmin from "../../components/layouts/Admin";
import Hello from "../../components/Hello";
import PercentageAVG from "../../components/PercentageAVG";
import BoxColors from "../../components/BoxColors";
import Customers from "../../components/Customers";
import WorkedToday from "../../components/WorkedToday";
import OrderServed from "../../components/OrderServed";
import BoxCredit from "../../components/BoxCredit";
import BoxCustomer from "../../components/BoxCustomer";
import Assets from "../../components/Assets";
import BoxUser from "../../components/BoxUser";
import Leads from "../../components/Leads";

const Dashboard = () => {
  const [percentages, setPercentages] = useState([
    {
      id: 1,
      title: "Title 1",
      cant: 2042,
      percentage: 20,
      color: 1,
    },
    {
      id: 2,
      title: "Title 1",
      cant: 2042,
      percentage: 20,
      color: 2,
    },
    {
      id: 3,
      title: "Title 1",
      cant: 2042,
      percentage: 20,
      color: 3,
    },
    {
      id: 4,
      title: "Title 1",
      cant: 2042,
      percentage: 20,
      color: 4,
    },
  ]);

  const [boxColors, setBoxColors] = useState([
    {
      id: 1,
      title: "Title 1",
      cant: 5600,
      color: 1,
    },
    {
      id: 2,
      title: "Title 1",
      cant: 5600,
      color: 2,
    },
    {
      id: 3,
      title: "Title 1",
      cant: 5600,
      color: 3,
    },
    {
      id: 4,
      title: "Title 1",
      cant: 5600,
      color: 4,
    },
  ]);

  const [customers, setCustomers] = useState([
    {
      id: 1,
      title: "Title 1",
      cant: 75,
      color: 1,
    },
    {
      id: 2,
      title: "Title 1",
      cant: 75,
      color: 2,
    },
    {
      id: 3,
      title: "Title 1",
      cant: 75,
      color: 3,
    },
    {
      id: 4,
      title: "Title 1",
      cant: 75,
      color: 4,
    },
  ]);

  const [workedTodays, setWorkedTodays] = useState([
    {
      id: 1,
      title: "Title 1",
      hour: 75,
      color: 1,
    },
    {
      id: 2,
      title: "Title 1",
      hour: 75,
      color: 2,
    },
    {
      id: 3,
      title: "Title 1",
      hour: 75,
      color: 3,
    },
    {
      id: 4,
      title: "Title 1",
      hour: 75,
      color: 4,
    },
  ]);
  return (
    <LayoutAdmin>
      <section className="col-span-10 bg-fondo pb-10">
        <Hello />

        <div className="grid grid-cols-4 gap-10 px-10">
          {percentages.map((item) => (
            <PercentageAVG key={item.id} {...item} />
          ))}
        </div>

        <div className="grid grid-cols-4 gap-10 px-10 mt-10">
          {boxColors.map((item) => (
            <BoxColors key={item.id} {...item} />
          ))}
        </div>

        <div className="grid grid-cols-4 gap-10 px-10 mt-10">
          {customers.map((item) => (
            <Customers key={item.id} {...item} />
          ))}
        </div>

        <div className="grid grid-cols-4 gap-10 px-10 mt-10">
          {workedTodays.map((item) => (
            <WorkedToday key={item.id} {...item} />
          ))}
        </div>

        <OrderServed />

        <section className="grid grid-cols-6 gap-10 px-10 mt-10">
          <BoxCredit />
          <BoxCustomer />
          <Assets />
        </section>

        <section className="grid grid-cols-12 gap-10 px-10 mt-10">
          <Leads />
          <BoxUser />
        </section>
      </section>
    </LayoutAdmin>
  );
};

export default Dashboard;
