import React from "react";
import styles from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

const Navigation = ({ product }) => {
  return (
    <div className={styles.links}>
      <NavLink className={styles.home_link} to="/">
        Главная
      </NavLink>
      /<NavLink className={styles.home_link}>{product.tireCompany}</NavLink>/
      <div className={styles.model_link}>{product.tireModel}</div>
    </div>
  );
};

export default Navigation;
