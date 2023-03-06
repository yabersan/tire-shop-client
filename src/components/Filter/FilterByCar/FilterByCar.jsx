import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCarModel,
  getCarModification,
  getCars,
  getCarYear,
  setCar,
  setModel,
  setModification,
  setYear,
} from "../../../features/filterProductSlice";
import styles from "./FilterByCar.module.css";

const FilterByCar = ({ handleFilter }) => {
  const dispatch = useDispatch();
  const carCompany = useSelector((state) => state.filterReducer.cars);
  const filter = useSelector((state) => state.filterReducer);

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  function handleChangeCarModel(event) {
    dispatch(getCarModel(event.target.value));
    dispatch(setCar(event.target.value));
  }
  function handleChangeYear(event) {
    dispatch(
      getCarYear({
        carCompany: filter.car,
        carModel: event.target.value,
      })
    );
    dispatch(setModel(event.target.value));
  }

  function handleChangeModification(event) {
    dispatch(
      getCarModification({
        carCompany: filter.car,
        carModel: filter.model,
        year: event.target.value,
      })
    );
    dispatch(setYear(event.target.value));
  }

  return (
    <div className={styles.filter_box}>
      <div className={styles.row_1}>
        <div className={styles.cell}>
          <select
            className={styles.tire_width}
            defaultValue="tire_title"
            name="tire1"
            id="tire1"
            onChange={handleChangeCarModel}
          >
            <option className={styles.tire_width_title} value="tire_title">
              Марка
            </option>
            {carCompany.map((item) => {
              return (
                <option key={item + 1} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>

        <div className={styles.cell}>
          <select
            defaultValue={filter.modelValue}
            name="tire2"
            id="tire2"
            onChange={handleChangeYear}
          >
            {filter.models.length > 0 ? (
              <option value="tire_title" className={styles.tire_width_title}>
                Модель
              </option>
            ) : null}
            {filter.models.map((item) => {
              return (
                <option key={item} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>

        <div className={styles.cell}>
          {" "}
          <select
            className={styles.tire_diameter}
            defaultValue={filter.yearValue}
            name="tire3"
            id="tire3"
            onChange={handleChangeModification}
          >
            {filter.years.length > 0 ? (
              <option className={styles.tire_width_title} value="tire_title">
                Год
              </option>
            ) : null}
            {filter.years.map((item) => {
              return (
                <option key={item} value={item}>
                  {item}
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
            defaultValue={filter.modificationValue}
            name="tire4"
            id="tire4"
            onChange={(e) => dispatch(setModification(e.target.value))}
          >
            {filter.modifications.length > 0 ? (
              <option className={styles.tire_width_title} value="tire_title">
                Модификация
              </option>
            ) : null}
            {filter.modifications.map((item) => {
              return (
                <option key={item} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>

        <div className={styles.cell}>
          <button className={styles.btn_submit} onClick={handleFilter}>
            Подобрать
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterByCar;
