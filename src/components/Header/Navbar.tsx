"use client";
import Link from "next/link";
import { GrTechnology } from "react-icons/gr";
import Styles from "./header.module.css";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={Styles.navbar}>
      <div>
        <Link className={Styles.logo}  href="/">
          CLOUD
          <GrTechnology />
          HOSTING
        </Link>
        <div className={Styles.menu}
          >
          {toggle ? (
            <IoMdClose onClick={() => setToggle(!toggle)} />
          ) : (
            <CiMenuFries onClick={() => setToggle(!toggle)} />
          )}
        </div>
      </div>
      <div className={Styles.navLinksWrapper}
      style={{ clipPath: toggle && "polygon(0 0, 100% 0, 100% 100%, 0 100%)" || ""}}>
        <ul className={Styles.navLinks}>
          <Link onClick={() => setToggle(!toggle)} className={Styles.navLink} href="/">
            Home
          </Link>
          <Link onClick={() => setToggle(!toggle)} className={Styles.navLink} href="/about">
            About
          </Link>
          <Link onClick={() => setToggle(!toggle)} className={Styles.navLink} href="/articles">
            Articles
          </Link>
          <Link onClick={() => setToggle(!toggle)} className={Styles.navLink} href="/admin">
            Admin Dashboard
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
