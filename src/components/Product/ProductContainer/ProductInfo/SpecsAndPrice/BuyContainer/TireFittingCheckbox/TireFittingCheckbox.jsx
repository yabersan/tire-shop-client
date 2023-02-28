import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { check } from "../../../../../../../features/productSlice";
import styles from "./TireFittingCheckbox.module.css";

const TireFittingCheckbox = () => {

  const isCheck = useSelector(state => state.productReducer.checked[0])
 const dispatch = useDispatch()
function handleCheck(){
  dispatch(check(0))
}

  return (
    <div className={styles.switch_container}>
      <label className={styles.switch}>
        <input className={styles.checkbox1} onChange={handleCheck} checked={isCheck} type="checkbox" />
        <span className={styles.slider}></span>
      </label>
      <div>
        Выездной монтаж - <strong>500 ₽</strong>{" "}
      </div>
    </div>
  );
};

export default TireFittingCheckbox;
