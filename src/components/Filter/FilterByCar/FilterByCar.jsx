import styles from "./FilterByCar.module.css";

const FilterByCar = () => {
  return (
    <div className={styles.filter_box}>
      <div className={styles.row_1}>
        <div className={styles.cell}>
          <select
            className={styles.tire_width}
            defaultValue="tire_title"
            name="tire1"
            id="tire1"
        /*     onChange={(e) => dispatch(setTireWidth(e.target.value))} */
          >
            <option
              className={styles.tire_width_title}
              value="tire_title"
              disabled
            >
              Марка
            </option>
            {/* {tireWidthArr.map((item) => {
              return (
                <option key={item._id} value={item.tireWidth}>
                  {item.tireWidth}
                </option>
              );
            })} */}
          </select>
        </div>

        <div className={styles.cell}>
          <select
            defaultValue="tire_title"
            name="tire2"
            id="tire2"
            /* onChange={(e) => dispatch(setTireHeight(e.target.value))} */
          >
            <option value="tire_title" disabled>
              Модель
            </option>
            {/* {tireHeightArr.map((item) => {
              return (
                <option key={item._id} value={item.tireHeight}>
                  {item.tireHeight}
                </option>
              );
            })} */}
          </select>
        </div>

        <div className={styles.cell}>
          {" "}
          <select
            className={styles.tire_diameter}
            defaultValue="tire_title"
            name="tire3"
            id="tire3"
           /*  onChange={(e) => dispatch(setTireDiameter(e.target.value))} */
          >
            <option
              className={styles.tire_width_title}
              value="tire_title"
              disabled
            >
              Год
            </option>
            {/* {tireDiameterArr.map((item) => {
              return (
                <option key={item._id} value={item.tireDiameter}>
                  {item.tireDiameter}
                </option>
              );
            })} */}
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
            /* onChange={(e) => dispatch(setTireCompany(e.target.value))} */
          >
            <option
              className={styles.tire_width_title}
              value="tire_title"
              disabled
            >
             Модификация
            </option>
           {/*  {tireCompanyArr.map((item) => {
              return (
                <option key={item._id} value={item.tireCompany}>
                  {item.tireCompany}
                </option>
              );
            })} */}
          </select>
        </div>


        <div className={styles.cell}>
          <button
            className={styles.btn_submit}
            /* onClick={() => handleFilter(tires)} */
          >
            Подобрать
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterByCar;
