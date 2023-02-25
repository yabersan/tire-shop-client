import React from "react";
import BuyButton from "./BuyButton/BuyButton";
import styles from "./BuyContainer.module.css";
import KeepingCheckbox from "./KeepingCheckbox/KeepingCheckbox";
import TireFittingCheckbox from "./TireFittingCheckbox/TireFittingCheckbox";
import TireFittingCheckbox2 from "./TireFittingCheckbox2/TireFittingCheckbox2";

const BuyContainer = ({ product }) => {
  return (
    <div className={styles.price_container}>
      <div>Скидка</div>
      <div className={styles.price}>{product.price} ₽</div>
      <TireFittingCheckbox />
      <TireFittingCheckbox2 />
      <KeepingCheckbox />
      <BuyButton />
      
      {/* <div>КНОПКА КУПИТЬ В КРЕДИТ</div>
      <div>Самовывоз сегодня бесплатно</div> */}
    </div>
  );
};

export default BuyContainer;
