import Link from "next/link";
import Styles from "./header.module.css";
import Navbar from "./Navbar";

function HeaderComponent() {
  return (
    <header className={Styles.header}>
      <Navbar />
      <div className={Styles.right} >
        <Link className="text-blue-500 mr-8 hover:text-blue-700 font-bold" href="/login">Login</Link>
        <Link className="text-blue-500 hover:text-blue-700 font-bold" href="/register">Register</Link>
      </div>
    </header>
  );
}

export default HeaderComponent;
