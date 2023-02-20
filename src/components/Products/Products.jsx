import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Products.module.css";

const Products = ({ filter, loading }) => {
  const [prod, setLocalProducts] = useState()



  function addProduct(product) {
    if (true) {
      let products = JSON.parse(localStorage.getItem("cart"));
      if(products.indexOf(product._id) === -1){
      products.push(product._id);
      setLocalProducts(products);
      localStorage.setItem("cart", JSON.stringify(products));
      }

    } else {
    }
  }



  if (loading) {
    return <div className={styles.loader}></div>;
  }

  return (
    <div className={styles.product_conteiner}>
      {filter.length === 0 ? (
        <div className={styles.product_not_found}>Товар не найден</div>
      ) : (
        filter.map((item) => {
          return (
            <div className={styles.product_card}>
              <div className={styles.product_image}>
                <img src={item.productPicture} alt="Product Image" />
              </div>
              <div className={styles.product_details}>
                <NavLink to={"/product/"+item._id} className={styles.product_name}>
                  <h3>{item.productName}</h3>
                </NavLink>
                <span className={styles.product_price}>{item.price} руб.</span>
                <div className={styles.product_actions}>
                  <button className={styles.add_to_cart} onClick={() => { addProduct(item)}} >Add to Cart</button>
                  <button className={styles.buy_now}>Buy Now</button>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Products;
