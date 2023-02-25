import React from "react";
import SpecsAndPrice from "./SpecsAndPrice/SpecsAndPrice";
import styles from "./ProductInfo.module.css";

const ProductInfo = ({ product }) => {
  return (
    <div className={styles.product_info_container}>
      <div className={styles.title_product}>
        <div className={styles.tire_name}>{product.productName}</div>
        <div className={styles.reviews_questions_compare}>
          <div>Какой-то текст</div>
          <div>Какой-то текст</div>
          <div>Какой-то текст</div>
        </div>
      </div>
      <SpecsAndPrice product={product} />
    </div>
  );
};

export default ProductInfo;
