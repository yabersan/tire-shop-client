import styles from "../Shops/Shops.module.css";
import call from "../Shops/images/installer.svg";
import car from "../Shops/images/mobile.svg";
import favorite from "../Shops/images/top_rated.svg";
import Fav from "../Shops/images/Favorite.svg";
import Fav2 from "../Shops/images/Favorite2.svg";
import { useState } from "react";
const Shops = () => {
  const [value, setValue] = useState("");

  function chengeSelect(event) {
    setValue(event.target.value);
  }
  return (
    <>
      <div className={styles.mainText}>Фирменные магазины Шины Мигом</div>

      <div className={styles.shopsBody}>
        <div className={styles.firstBlock}>
          <div className={styles.firstBlockText}>Выбор пункта выдачи</div>
          <div className={styles.choise}>
            <select value={value} onChange={chengeSelect}>
              <option value="Два">Санкт-Петербург</option>
              <option value="Один">Грозный</option>
            </select>
          </div>
          <div className={styles.groupImages}>
            <img src={call} alt="" />
            <img src={car} alt="" />
            <img src={favorite} alt="" />
          </div>
        </div>
        {value == "Один" ? (
          <div className={styles.secondBlock}>
            <div className={styles.groupFavorite}>
              <img src={Fav} alt="" />
              <img src={Fav} alt="" />
              <img src={Fav} alt="" />
              <img src={Fav} alt="" />
              <img src={Fav2} alt="" />
              <span className={styles.colorGrey}>(77)</span>
            </div>
            <div className={styles.secondAdress}>
              ул. Трошева 7 лит.А (Юг){" "}
              <div className={styles.number}>8 (938) 020-16-96 </div>
              <div className={styles.data}>Пн-Вс с 10:00-21:00</div>
            </div>
          </div>
        ) : (
          <>
            {" "}
            <div className={styles.secondBlock}>
              <div className={styles.groupFavorite}>
                <img src={Fav} alt="" />
                <img src={Fav} alt="" />
                <img src={Fav} alt="" />
                <img src={Fav} alt="" />
                <img src={Fav2} alt="" />
                <span className={styles.colorGrey}>(87)</span>
              </div>
              <div className={styles.secondAdress}>
                ул. Салова 45 лит.А (Юг){" "}
                <div className={styles.number}>8 (800) 555-13-26 </div>
                <div className={styles.data}>Пн-Вс с 09:00-20:00</div>
              </div>
            </div>{" "}
            <div className={styles.thirdBlock}>
              {" "}
              <div className={styles.groupFavorite}>
                <img src={Fav} alt="" />
                <img src={Fav} alt="" />
                <img src={Fav} alt="" />
                <img src={Fav} alt="" />
                <img src={Fav2} alt="" />
                <span className={styles.colorGrey}>(24)</span>
              </div>
              <div className={styles.secondAdress}>
                ул. Суздальское шоссе д. 65 (Север){" "}
                <div className={styles.number}>8 (800) 555-13-26 </div>
                <div className={styles.data}>Пн-Вс с 09:00-20:00</div>
              </div>
            </div>{" "}
          </>
        )}
        {value == "Один" ? (
          <div className={styles.maps}>
            <section сlassName={styles.maps}>
              <div сlassName={styles.maps}>
                <iframe
                  title="myFrame"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2902.458034357776!2d45.69040835027679!3d43.32560357903146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4051d1602b158ffd%3A0xad6cb8a3b8dcca97!2z0YPQuy4g0JMg0J0g0KLRgNC-0YjQtdCy0LAsIDcsINCT0YDQvtC30L3Ri9C5LCDQp9C10YfQtdC90YHQutCw0Y8g0KDQtdGB0L8uLCAzNjQwNTE!5e0!3m2!1sru!2sru!4v1677427822626!5m2!1sru!2sru"
                  width="100%"
                  height="632"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </section>
          </div>
        ) : (
          <div className={styles.maps}>
            <section сlassName={styles.maps}>
              <div сlassName={styles.maps}>
                <iframe
                  title="myFrame"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2001.5536723496439!2d30.37683222695312!3d59.88975890000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696311e176ea7a1%3A0x23f9ac5bc6d0806d!2z0J7QntCeICLQkNCi0JvQkNCd0KLQkCI!5e0!3m2!1sru!2sru!4v1677420386144!5m2!1sru!2sru"
                  width="100%"
                  height="632"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </section>
          </div>
        )}
      </div>
    </>
  );
};
export default Shops;
