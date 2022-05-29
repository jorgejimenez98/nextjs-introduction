import React from "react";
import ActiveLink from "./ActiveLink";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles["menu-container"]}>
      <ActiveLink href="/" text={"Home"} />
      <ActiveLink href="/about" text={"About"} />
      <ActiveLink href="/contact" text={"Contact"} />
    </nav>
  );
}

export default Navbar;
