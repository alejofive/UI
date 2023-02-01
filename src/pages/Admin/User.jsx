import React from "react";
import Hello from "../../components/Hello";
import MenuUser from "../../components/MenuUser";
import Left from "../../components/Left";
import Mitad from "../../components/Mitad";
import Right from "../../components/Right";

function User() {
  return (
    <section className="col-span-10 bg-fondo pb-10">
      <Hello />

      <MenuUser />

      <section className="grid grid-cols-8 gap-10 px-10">
        <Left />

        <Mitad />

        <Right />
      </section>
    </section>
  );
}

export default User;
