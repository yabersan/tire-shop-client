import React from "react";
import styles from "./TireFittingCheckbox.module.css";

const TireFittingCheckbox2 = () => {
  return (
    <div className={styles.switch_container}>
      <label className={styles.switch}>
        <input className={styles.checkbox1} type="checkbox" />
        <span className={styles.slider}></span>
      </label>
      <div>Стационарный монтаж</div>
    </div>
  );
};

export default TireFittingCheckbox2;
