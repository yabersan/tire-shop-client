import React from "react";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import Footer from "../Footer/Footer";
import MainHeader from "../mainHeader/mainHeader";

const Layout = () => {
  return (
    <div className={styles.body}>
      <MainHeader />
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;  
