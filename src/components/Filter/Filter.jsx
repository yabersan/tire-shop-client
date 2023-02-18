import { useState } from "react";
import styles from "./Filter.module.css";
import FilterByCar from "./FilterByCar/FilterByCar";
import FilterByCategory from "./FilterByCategory/FilterByCategory";
import { CSSTransition } from "react-transition-group";

const Filter = ({ products, handleFilter, loading, tires }) => {
  const [block1Visible, setBlock1Visible] = useState(true);

  function handleBtnCategory() {
    setBlock1Visible(true);
  }

  function handleBtnCars() {
    setBlock1Visible(false);
  }

  return (
    <div className={styles.filter_container}>
      <div className={styles.filter_title_box}>
        <button
          className={
            block1Visible ? styles.yellowBtn : styles.filter_title_category
          }
          onClick={handleBtnCategory}
        >
          Подбор шин по типоразмеру
        </button>
        <button className={!block1Visible ? styles.yellowBtn : styles.filter_title_car} onClick={handleBtnCars}>
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
        <FilterByCar />
      )}
    </div>
  );
};

export default Filter;
