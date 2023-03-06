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
      carCompany: setFilters.car,
      carModel: setFilters.model,
      year: setFilters.year,
      modification: setFilters.modification,
    },
  ];

  function handleFilter() {
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
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const arrayParams = new Array(params);
      dispatch(getProducts());
      dispatch(filterProducts(arrayParams));
    }
  }, [dispatch]);

  useEffect(() => {
    if (!window.location.search) {
      dispatch(filterProducts(tireArray));
      dispatch(getProducts());
    }
  }, [dispatch]);

  return (
    <div className={styles.main_conteiner}>
      <Filter
        products={products}
        handleFilter={handleFilter}
        loading={loading}
      />
      <Products products={products} filter={filter} loading={loading} />
    </div>
  );
};

export default Main;
