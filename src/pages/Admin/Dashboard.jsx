import React from "react";
import Hello from "../../components/Hello";
import PorcentajeAVG from "../../components/PorcentajeAVG";
import BoxColors from "../../components/BoxColors";
import Coustemers from "../../components/Coustemers";
import WorkedToday from "../../components/WorkedToday";
import OrderServed from "../../components/OrderServed";
import BoxCredit from "../../components/BoxCredit";
import BoxCustomre from "../../components/BoxCustomre";
import Assets from "../../components/Assets";
import BoxUser from "../../components/BoxUser";
import Leads from "../../components/Leads";

const Dashboard = () => {
  return (
    <section className="col-span-10 bg-fondo pb-10">
      <Hello />

      <PorcentajeAVG />
      <BoxColors />
      <Coustemers />
      <WorkedToday />
      <OrderServed />

      <section className="grid grid-cols-6 gap-10 px-10 mt-10">
        <BoxCredit />
        <BoxCustomre />
        <Assets />
      </section>

      <section className="grid grid-cols-12 gap-10 px-10 mt-10">
        <Leads />
        <BoxUser />
      </section>
    </section>
  );
};

export default Dashboard;
