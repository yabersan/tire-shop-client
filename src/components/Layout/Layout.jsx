import React from "react";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <div className={styles.body}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
