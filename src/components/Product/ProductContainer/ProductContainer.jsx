import React from "react";
import styles from "./ProductContainer.module.css";
import ProductInfo from "./ProductInfo/ProductInfo";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { yellow } from "@mui/material/colors";

const ProductContainer = ({ product }) => {
  return (
    <div className={styles.product_box}>
      <div className={styles.product_image_container}>
        <img
          className={styles.product_image}
          src={product.productPicture}
          alt=""
        />
        {product.season === "Зима" ? (
          <div className={styles.season_icon}>
            <AcUnitIcon color="primary" />
          </div>
        ) : (
          <div className={styles.season_icon}>
            <WbSunnyOutlinedIcon sx={{ color: yellow[700] }} />
          </div>
        )}
      </div>
      <ProductInfo product={product} />
    </div>
  );
};

export default ProductContainer;
