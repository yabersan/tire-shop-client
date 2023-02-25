import React from "react";
import styles from "./Specs.module.css";

const Specs = ({ product }) => {
  return (
    <div className={styles.specs}>
      <div>Характеристики:</div>
      <div className={styles.specs_text}>
        <ul className={styles.specs_title}>
          <li>Ширина:</li>
          <li>Высота:</li>
          <li>Диаметр:</li>
          <li>Производитель:</li>
          <li>Модель:</li>
          <li>Сезон:</li>
          <li>Тип:</li>
        </ul>
        <ul className={styles.specs_desc}>
          <li>{product.tireWidth}</li>
          <li>{product.tireHeight}</li>
          <li>{product.tireDiameter}</li>
          <li>{product.tireCompany}</li>
          <li>{product.tireModel}</li>
          <li>{product.season}</li>
          <li>{product.tireType}</li>
        </ul>
      </div>
    </div>
  );
};

export default Specs;
