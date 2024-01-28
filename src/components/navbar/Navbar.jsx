import Link from "next/link";
import React from "react";
import Links from "./links/Links";

const Navbar = () => {
  return (
    <div>
      <div className="">Sayidi</div>
      <div className="">
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
