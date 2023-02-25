import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProduct } from "../../features/productsSlice";
import Navigation from "./Navigation/Navigation";
import styles from "./Product.module.css";
import ProductContainer from "./ProductContainer/ProductContainer";
import Reviews from "./Reviews/Reviews";
import SimilarProducts from "./SimilarProducts/SimilarProducts";

const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productsReducer.product);

  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, id]);

  return (
    <div className={styles.product_container}>
      <Navigation product={product} />
      <ProductContainer product={product} />
      <SimilarProducts />
      <Reviews />
    </div>
  );
};

export default Product;
