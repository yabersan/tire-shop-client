import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setClearCategotyFilter,
  setClearCarFilter,
} from "../../features/filterProductSlice";
import styles from "./Filter.module.css";
import FilterByCar from "./FilterByCar/FilterByCar";
import FilterByCategory from "./FilterByCategory/FilterByCategory";

const Filter = ({ products, handleFilter, loading, tires }) => {
  const [block1Visible, setBlock1Visible] = useState(true);
  const dispatch = useDispatch();

  function handleBtnCategory() {
    dispatch(setClearCarFilter());
    setBlock1Visible(true);
  }

  function handleBtnCars() {
    dispatch(setClearCategotyFilter());
    setBlock1Visible(false);
  }

  return (
    <div className={styles.filter_container}>
      <div className={styles.filter_title_box}>
        <button
          className={
            block1Visible
              ? `${styles.yellowBtn} ${styles.filter_title_category}`
              : styles.filter_title_category
          }
          onClick={handleBtnCategory}
        >
          Подбор шин по типоразмеру
        </button>
        <button
          className={
            !block1Visible
              ? `${styles.yellowBtn} ${styles.filter_title_car}`
              : styles.filter_title_car
          }
          onClick={handleBtnCars}
        >
          По авто
        </button>
      </div>

      {block1Visible ? (
        <div className={styles.text}>
          <FilterByCategory
            products={products}
            handleFilter={handleFilter}
            loading={loading}
            tires={tires}
          />
        </div>
      ) : (
        <FilterByCar handleFilter={handleFilter} />
      )}
    </div>
  );
};

export default Filter;
