import styles from "../mainHeader/mainHeader.module.css";
import lupa from "../mainHeader/Lupa.png";
import group from "../mainHeader/Group.svg";
import entrance from "../mainHeader/Entrance.png";
const MainHeader = () => {
  return (
    <div className={styles.body}>
      <div className={styles.list}>
        <select className={styles.select}>
          <option>Грозный</option>
          <option>Санкт-Петербург</option>
        </select>
        <div>Доставка</div>
        <div>Отзывы</div>
        <div>Покупателям</div>
      </div>
      <div className={styles.inputDiv}>
        <input
          className={styles.inputSearch}
          placeholder="Поиск по сайту"
          type="text"
          name=""
          id=""
        />
        <img className={styles.imgLupa} src={lupa} alt="" />
      </div>
      <div className={styles.extranceDiv}>
        <img src={group} alt="" />
      </div>
      <div className={styles.entrance}>
        <img src={entrance} alt="" />
      </div>
    </div>
  );
};
export default MainHeader;
