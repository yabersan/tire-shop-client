import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filter from "../../components/Filter/Filter";
import Products from "../../components/Products/Products";
import { filterProducts, getProducts } from "../../features/productsSlice";
import qs from "qs";
import { useNavigate } from "react-router-dom";
import styles from "./Main.module.css";

const Main = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.productsReducer.products);
  const loading = useSelector((state) => state.productsReducer.loading);
  const filter = useSelector((state) => state.productsReducer.filterProducts); //Отфильтрованный массив
  const setFilters = useSelector((state) => state.filterReducer);

  const tireArray = [
    {
      tireWidth: setFilters.tireWidth,
      tireHeight: setFilters.tireHeight,
      tireDiameter: setFilters.tireDiameter,
      tireCompany: setFilters.tireCompany,
      season: setFilters.season,
    },
  ];

  const tires = [
    setFilters.tireWidth,
    setFilters.tireHeight,
    setFilters.tireDiameter,
    setFilters.tireCompany,
    setFilters.season,
  ]; //Массив, который формируется после фильрации на фронте, после чего отправляется на бэк для филтрации там. Нужно

  function handleFilter(tires) {
    const query = {};
    for (const key in tireArray[0]) {
      if (tireArray[0][key] !== false && tireArray[0][key] !== 0) {
        query[key] = tireArray[0][key];
      }
    }

    const queryStr = qs.stringify(query);
    navigate(`?${queryStr}`);
    dispatch(filterProducts(tireArray));
  }

  useEffect(() => {
    dispatch(filterProducts(tireArray));
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className={styles.main_conteiner}>
      <Filter
        products={products}
        handleFilter={handleFilter}
        loading={loading}
      />
      <Products
        tires={tires}
        products={products}
        filter={filter}
        loading={loading}
      />
    </div>
  );
};

export default Main;
