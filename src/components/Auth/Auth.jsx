import styles from "../Auth/Auth.module.css";
import { Link } from "react-router-dom";
const Auth = () => {
  return (
    <>
    
      <div className={styles.authBody}>
        <div className={styles.div}>
          <div className={styles.text}>Имя</div>
          <input className={styles.input} type="text" />
        </div>
        <div className={styles.div}>
          <div className={styles.text}>Логин (минимум 5 символа)</div>
          <input className={styles.input} type="text" />
        </div>
        <div className={styles.div}>
          <div className={styles.text}>Пароль</div>
          <input className={styles.input} type="text" />
        </div>
        <div className={styles.div}>
          <div className={styles.text}>Подтверждение пароля</div>
          <input className={styles.input} type="text" />
        </div>
        <div className={styles.div}>
          <div className={styles.text}> E-mail</div>
          <input className={styles.input} type="text" />
        </div>
        <div className={styles.div2}>
          <input className={styles.input2} type="checkbox" name="" id="" />
          <div>
            Нажимая кнопку «Регистрация», я даю свое согласие на обработку моих
            персональных данных, в соответствии с Федеральным законом от
            27.07.2006 года №152-ФЗ «О персональных данных», на условиях и для
            целей, определенных в Согласии на обработку персональных данных
          </div>
        </div>
       <div> <button className={styles.button}>Регистрация</button></div>
        <Link  to='/login' className={styles.auth}>Авторизация</Link>
      </div>
    </>
  );
};
export default Auth;
