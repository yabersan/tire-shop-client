import styles from "../Footer/Footer.module.css";
import contact from "../Footer/Contact.png";
import mail from "../Footer/Mail.png";
import instagram from "../Footer/Instagram.png";
import { Link } from "react-router-dom";
import policy from '../Footer/policy.png'

const Footer = () => {
  return (
    <div>
    <div className={styles.footerBody}>
      <div className={styles.catalog}>
        <div className={styles.text1}>Каталог</div>
        <div className={styles.text2}>Шины</div>
        <div className={styles.text2}>Диски</div>
        <div className={styles.text2}>Пункты выдачи</div>
      </div>

      <div className={styles.aboutStore}>
        <div className={styles.text1}>О магазине</div>
        <div className={styles.text2}>Оплата и доставка</div>
        <div className={styles.text2}>Гарантия</div>
        <div className={styles.text3}>Акции</div>
        <div className={styles.text2}>Блог</div>
      </div>

      <div className={styles.contacts}>
        <div className={styles.text1}>Контакты</div>
        <div className={styles.contacts2}>
          <div className={styles.contacts2img}>
            <img className={styles.contactImg} src={contact} alt="" />
          </div>
          <div className={styles.contacts2text}>
            <div className={styles.text4}> 8 (938) 020-16-96</div>
          </div>
        </div>
        <div className={styles.contacts3}>
          <div className={styles.contacts3img}>
            <img src={mail} alt="" />
          </div>
          <div className={styles.text4}>gadaevduk@gmail.com</div>
        </div>
        <div className={styles.contacts4}>
          <div className={styles.contacts4img}>
            <img className={styles.InstImg} src={instagram} alt="" />
          </div>
          <div className={styles.text4}>Мы в инстаграм</div>
        </div>
      </div>
    

      <div className={styles.policy}>
        <div><Link className={styles.text6}>Политика конфиденциальности</Link></div>
        <div><Link className={styles.text6}>Договор оферты</Link></div>
       <div> <Link className={styles.text6}>Карта сайта</Link></div>
        <Link className={styles.text6}>DATSKY-создание и продвижение сайтов</Link>
        <div className={styles.policyImages}>
        <img src={policy} alt="" />
        </div>
      </div>
      
    </div>
    
    </div>
  );
};

export default Footer;
