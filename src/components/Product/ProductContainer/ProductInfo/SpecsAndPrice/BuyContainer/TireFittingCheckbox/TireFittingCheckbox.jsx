import React from "react";
import styles from "./TireFittingCheckbox.module.css";

const TireFittingCheckbox = () => {
  return (
    <div className={styles.switch_container}>
      <label className={styles.switch}>
        <input className={styles.checkbox1} type="checkbox" />
        <span className={styles.slider}></span>
      </label>
      <div>
        Выездной монтаж - <strong>500 ₽</strong>{" "}
      </div>
    </div>
  );
};

export default TireFittingCheckbox;
