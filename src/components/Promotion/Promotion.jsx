import { Link } from 'react-router-dom';
import img1 from '../Promotion/img1.png';
import img2 from '../Promotion/img3.png';

import styles from "../Promotion/Promotion.module.css";
const Promotion = () => {
  return (
    <div className={styles.promotionBody}>
      <div className={styles.mainText}>Акции на шины и диски</div>
      <div className={styles.divGroup}>
        <div className={styles.divOne}>
            <img className={styles.test} src={img1} alt="" />
            <div className={styles.test2}>Бесплатный шиномонтаж при покупке комплекта ЗИМНИХ шин!</div>
        </div>
        <div className={styles.divTwo}>
            <img className={styles.test} src={img1} alt="" />
            <div className={styles.test2}>Бесплатный шиномонтаж при покупке комплекта ЛЕТНИХ шин!</div>
        </div>
        <Link to='/promotion2' className={styles.divThree}>
            <img className={styles.test} src={img2} alt="" />
            <div className={styles.test2}>Хранение шин 7 месяцев</div>
            
        </Link>
      </div>
    </div>
  );
};
export default Promotion;
