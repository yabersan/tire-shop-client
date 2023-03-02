import React from "react";
import { useDispatch } from "react-redux";
import styles from "./FilterByCategory.module.css";
import {
  setSeason,
  setTireCompany,
  setTireDiameter,
  setTireHeight,
  setTireWidth,
} from "../../../features/filterProductSlice";

const FilterByCategory = ({ products, handleFilter, loading, tires }) => {
  const dispatch = useDispatch();
  const tireWidthObj = {};
  const tireHeightObj = {};
  const tireDiameterObj = {};
  const tireCompanyObj = {};
  const seasonObj = {};

  const tireCompanyArr = products.filter((item) => {
    if (!tireCompanyObj[item.tireCompany]) {
      tireCompanyObj[item.tireCompany] = true;
      return true;
    } else {
      return false;
    }
  });

  const seasonArr = products.filter((item) => {
    if (!seasonObj[item.season]) {
      seasonObj[item.season] = true;
      return true;
    } else {
      return false;
    }
  });

  const tireWidthArr = products.filter((item) => {
    if (!tireWidthObj[item.tireWidth]) {
      tireWidthObj[item.tireWidth] = true;
      return true;
    } else {
      return false;
    }
  });

  const tireHeightArr = products.filter((item) => {
    if (!tireHeightObj[item.tireHeight]) {
      tireHeightObj[item.tireHeight] = true;
      return true;
    } else {
      return false;
    }
  });

  const tireDiameterArr = products.filter((item) => {
    if (!tireDiameterObj[item.tireDiameter]) {
      tireDiameterObj[item.tireDiameter] = true;
      return true;
    } else {
      return false;
    }
  });

  return (
    <div className={styles.filter_box}>
      <div className={styles.row_1}>
        <div className={styles.cell}>
          <select
            className={styles.tire_width}
            defaultValue="tire_title"
            name="tire1"
            id="tire1"
            onChange={(e) => dispatch(setTireWidth(e.target.value))}
          >
            <option
              className={styles.tire_width_title}
              value="tire_title"
              disabled
            >
              Ширина
            </option>
            {tireWidthArr.map((item) => {
              return (
                <option key={item._id} value={item.tireWidth}>
                  {item.tireWidth}
                </option>
              );
            })}
          </select>
        </div>

        <div className={styles.cell}>
          <select
            defaultValue="tire_title"
            name="tire2"
            id="tire2"
            onChange={(e) => dispatch(setTireHeight(e.target.value))}
          >
            <option value="tire_title" disabled>
              Высота
            </option>
            {tireHeightArr.map((item) => {
              return (
                <option key={item._id} value={item.tireHeight}>
                  {item.tireHeight}
                </option>
              );
            })}
          </select>
        </div>

        <div className={styles.cell}>
          {" "}
          <select
            className={styles.tire_diameter}
            defaultValue="tire_title"
            name="tire3"
            id="tire3"
            onChange={(e) => dispatch(setTireDiameter(e.target.value))}
          >
            <option
              className={styles.tire_width_title}
              value="tire_title"
              disabled
            >
              Диаметр
            </option>
            {tireDiameterArr.map((item) => {
              return (
                <option key={item._id} value={item.tireDiameter}>
                  {item.tireDiameter}
                </option>
              );
            })}
          </select>
        </div>
      </div>

      <div className={styles.row_2}>
        <div className={styles.cell}>
          <select
            className={styles.tire_width}
            defaultValue="tire_title"
            name="tire4"
            id="tire4"
            onChange={(e) => dispatch(setTireCompany(e.target.value))}
          >
            <option
              className={styles.tire_width_title}
              value="tire_title"
              disabled
            >
              Производитель
            </option>
            {tireCompanyArr.map((item) => {
              return (
                <option key={item._id} value={item.tireCompany}>
                  {item.tireCompany}
                </option>
              );
            })}
          </select>
        </div>
        <div className={styles.cell}>
          <select
            className={styles.tire_width}
            defaultValue="tire_title"
            name="tire5"
            id="tire5"
            onChange={(e) => dispatch(setSeason(e.target.value))}
          >
            <option
              className={styles.tire_width_title}
              value="tire_title"
              disabled
            >
              Сезон
            </option>
            {seasonArr.map((item) => {
              return (
                <option key={item._id} value={item.season}>
                  {item.season}
                </option>
              );
            })}
          </select>
        </div>

        <div className={styles.cell}>
          <button
            className={styles.btn_submit}
            onClick={() => handleFilter(tires)}
          >
            Подобрать
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterByCategory;
