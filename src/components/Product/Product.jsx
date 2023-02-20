import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getProduct } from "../../features/productsSlice";
import styles from "./Product.module.css";

const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productsReducer.product);
  console.log(product);

  useEffect(() => {
    dispatch(getProduct(id));
  }, []);

  return (
    <div className={styles.product_container}>
      <div className={styles.links}>
        <NavLink className={styles.home_link} to="/">
          Главная
        </NavLink>
        /<NavLink className={styles.home_link}>{product.tireCompany}</NavLink>/
        <div className={styles.model_link}>{product.tireModel}</div>
      </div>
      <div className={styles.product_box}>
        <div className={styles.product_image_container}>
          <img
            className={styles.product_image}
            src={product.productPicture}
            alt=""
          />
        </div>
        <div className={styles.product_info_container}>
          <div>
            <div className={styles.tire_name}>{product.productName}</div>
            <div></div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Product;
