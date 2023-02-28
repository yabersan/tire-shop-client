import React from "react";
import styles from "./SpecsAndPrice.module.css";
import Specs from "./Specs/Specs";
import BuyContainer from "./BuyContainer/BuyContainer";

const SpecsAndPrice = ({ product }) => {
  return (
    <div className={styles.specs_and_price_container}>
      <Specs product={product} />
      <BuyContainer product={product} />
    </div>
  );
};

export default SpecsAndPrice;
