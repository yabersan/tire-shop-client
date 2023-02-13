import React from "react";
import styles from "./Products.module.css";

const Products = ({ filter, loading }) => {
  if (loading) {
    return <div>Загрузка</div>;
  }

  return (
    <div className={styles.product_conteiner}>
      {filter.length === 0 ? (
        <div className={styles.product_not_found} >Товар не найден</div>
      ) : (
        filter.map((item) => {
          return (
            <div className={styles.imgProduct} key={item._id}>
              <img src={item.productPicture} alt="" />
            </div>
          );
        })
      )}
    </div>
  );
};

export default Products;
