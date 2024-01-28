import styles from "./navbar.module.css";
import React from "react";
import Links from "./links/Links";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href={"/"} className={styles.logo}>
        Sayidi
      </Link>
      <div className="">
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
