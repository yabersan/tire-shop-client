import { useDispatch, useSelector } from "react-redux";
import { decreaseQty, increaseQty } from "../../../../../../../features/productSlice";
import styles from "./BuyButton.module.css";

const BuyButton = () => {

const dispatch = useDispatch()
const qty = useSelector(state => state.productReducer.qty)

  function incQty() {
    dispatch(increaseQty())
  }

  function decQty() {
    dispatch(decreaseQty())
  }
  function addProd (){
    console.log(qty);
  }

  return (
    <div className={styles.buy_btn_container}>
      <button onClick={decQty} className={styles.decrease}>-</button>
      <div className={styles.qty}>{qty}</div>
      <button onClick={incQty} className={styles.increase}>
        +
      </button>
      <button onClick={addProd}  className={styles.buy_btn}>В корзину</button>
    </div>
  );
};

export default BuyButton;
