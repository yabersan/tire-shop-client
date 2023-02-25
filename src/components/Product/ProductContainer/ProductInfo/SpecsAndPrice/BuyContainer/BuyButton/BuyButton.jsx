import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseQty } from "../../../../../../../features/productSlice";
import styles from "./BuyButton.module.css";

const BuyButton = () => {
  // const [qty, setQty] = useState(1);
const dispatch = useDispatch()
const qty = useSelector(state => state.productReducer.qty)

  function incQty(params) {
    dispatch(increaseQty())
  }

  function decreaseQty() {
    // if (qty > 1) {
    //   setQty(qty - 1);
    // }
  }
  function addProd (){
    console.log(qty);
  }

  return (
    <div className={styles.buy_btn_container}>
      <button onClick={decreaseQty} className={styles.decrease}>-</button>
      <div className={styles.qty}>{qty}</div>
      <button onClick={incQty} className={styles.increase}>
        +
      </button>
      <button onClick={addProd}  className={styles.buy_btn}>В корзину</button>
    </div>
  );
};

export default BuyButton;
