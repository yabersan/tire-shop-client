import img from "../img3.png";
import styles from "../two/tireStorage.module.css";
import ellips from "../ellips.svg";
const tireStorage = () => {
  return (
    <>
      <div className={styles.firstBlock}>
        <div className={styles.test}>
          <img className={styles.test} src={img} alt="" />
        </div>
        <div className={styles.content}>
          <div className={styles.mainText}>Содержание:</div>
          <div className={styles.content1}>
            <img src={ellips} alt="" />
            <div className={styles.text}>Условия акции</div>
          </div>
          <div className={styles.content1}>
            <img src={ellips} alt="" />
            <div className={styles.text}>Стоимость</div>
          </div>
        </div>
      </div>
      <div className={styles.text2}>Хранение шин 7 месяцев</div>
      <div className={styles.text3}>
        <div className={styles.text33}>Условия акции</div>
        <div className={styles.text34}>
          Акция! При покупке комплекта шин - вы можете оставить свой второй
          комплект шин на хранение на 7 месяцев по адресу г.Санкт-Петербург, ул.
          Салова 45 лит.А
        </div>
      </div>
      <div className={styles.text3}>
      <div className={styles.text33}>Стоимость</div>
      <div className={styles.text4}>2000р за 7 месяцев!</div>
        <div className={styles.text6}>
        Подробности уточняйте у менеджеров 
        <div className={styles.d}> 8 (800) 555-13-26</div>
        </div>
        
      </div>
    </>
  );
};
export default tireStorage;
