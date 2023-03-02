import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { check } from "../../../../../../../features/productSlice";
import styles from "./TireFittingCheckbox.module.css";

const TireFittingCheckbox2 = () => {

  const isCheck = useSelector(state => state.productReducer.checked[1])
  const dispatch = useDispatch()

  function handleCheck(){
    dispatch(check(1))
  }
  return (
    <div className={styles.switch_container}>
      <label className={styles.switch}>
        <input className={styles.checkbox1} onChange={handleCheck} checked={isCheck} type="checkbox" />
        <span className={styles.slider}></span>
      </label>
      <div>Стационарный монтаж</div>
    </div>
  );
};

export default TireFittingCheckbox2;
