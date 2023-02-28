import styles from "../mainHeader/mainHeader.module.css";
import lupa from "../mainHeader/Lupa.png";
import group from "../mainHeader/Group.svg";
import entrance from "../mainHeader/Entrance.png";
import group2 from "../mainHeader/Group2.png";
import yandex from "../mainHeader/Yandex.png";
import heart from "../mainHeader/Heart.png";
import setting from "../mainHeader/Setting.png";
import Bascet1 from "../mainHeader/Bascet1.png";
import Bascet from "../mainHeader/Basket.png";
import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <>
      <div className={styles.body}>
        <div className={styles.list}>
          <select className={styles.select}>
            <option>Грозный</option>
            <option>Санкт-Петербург</option>
          </select>
          <Link className={styles.delivery} to="/delivery">
            Доставка
          </Link>
          <Link className={styles.delivery} to="/reviews">
            Отзывы
          </Link>
          <Link className={styles.delivery} to="/buyers">
            Покупателям
          </Link>
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
      {/* Вторая строка */}
      <div className={styles.body2}>
        <div className={styles.group2}>
          <img className={styles.imgGropr2} src={group2} alt="" />
        </div>
        <div className={styles.yandex}>
          {" "}
          <img className={styles.yandexImg} src={yandex} alt="" />
        </div>
        <div className={styles.textDiv}>
          <div className={styles.workingTime}>Режим работы:</div>
          <div className={styles.workingTime2}>Пн-Вс: c 09:00-20:00</div>
        </div>
        <div className={styles.callDiv}>
          <div className={styles.numberPhone}>8 (938) 020-16-96</div>
          <Link to="tel:89380201696" className={styles.call}>
            Заказать звонок
          </Link>
        </div>
        <div className={styles.heart}>
          <img src={heart} alt="" />
        </div>
        <div className={styles.setting}>
          <img src={setting} alt="" />
        </div>
        <div className={styles.basketDiv}>
          <img src={Bascet1} alt="" />
          <div className={styles.basketDiv2}>
            <img src={Bascet} alt="" />
          </div>
        </div>
        <div className={styles.infBasketDiv}>
          <div className={styles.bask}> Корзина</div>
          <div className={styles.bask2}> 0 товаров</div>
        </div>
      </div>
    </>
  );
};
export default MainHeader;
