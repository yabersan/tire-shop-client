import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { check } from "../../../../../../../features/productSlice";
import styles from './KeepingCheckbox.module.css'

const KeepingCheckbox = () => {

  const isCheck = useSelector(state => state.productReducer.checked[2])
 const dispatch = useDispatch()
function handleCheck(){
  dispatch(check(2))
}


  return (
    <div className={styles.switch_container}>
      <label className={styles.switch}>
        <input onChange={handleCheck} className={styles.checkbox1} checked={isCheck} type="checkbox" />
        <span className={styles.slider}></span>
      </label>
      <div>
        Хранение - <strong>1000 ₽</strong>{" "}
      </div>
    </div>
  );
};

export default KeepingCheckbox;
