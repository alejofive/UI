import React from "react";
import LayoutAdmin from "../../components/layouts/Admin";
import Hello from "../../components/Hello";
import MenuUser from "../../components/MenuUser";
import Left from "../../components/Left";
import Half from "../../components/Half";
import Right from "../../components/Right";

function User() {
  return (
    <LayoutAdmin>
      <section className="col-span-10 bg-fondo pb-10">
        <Hello />

        <MenuUser />

        <section className="grid grid-cols-8 gap-10 px-10">
          <Left />

          <Half />

          <Right />
        </section>
      </section>
    </LayoutAdmin>
  );
}

export default User;
