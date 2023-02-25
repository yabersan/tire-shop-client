import React from "react";
import { useSelector } from "react-redux";
import styles from './KeepingCheckbox.module.css'

const KeepingCheckbox = () => {

  const qty = useSelector(state => state.productReducer.qty)
 
function handleQty(event){
  console.log(event.target.checked);
}


  return (
    <div className={styles.switch_container}>
      <label className={styles.switch}>
        <input onChange={handleQty} className={styles.checkbox1} type="checkbox" />
        <span className={styles.slider}></span>
      </label>
      <div>
        Хранение - <strong>1000 ₽</strong>{" "}
      </div>
    </div>
  );
};

export default KeepingCheckbox;
