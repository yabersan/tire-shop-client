import styles from "../Login/Login.module.scss";
import glaz1 from "../Login/Glaz.png";
import glaz2 from "../Login/Glaz2.png";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authSingIn, onChange } from "../../features/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {
  const [glaz, setGlaz] = useState(false);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const error = useSelector((state) => state.authReducer.error);
  const token = useSelector((state) => state.authReducer.token);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [dispatch, navigate, token]);

  const loginValue = (e) => {
    setLogin(e.target.value);
    dispatch(onChange());
  };

  const passwordValue = (e) => {
    setPassword(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(authSingIn({ login, password }));
    setLogin("");
    setPassword("");
    setErr("");
  };
  const handleErr = (e) => {
    e.preventDefault();
    if (login.length === 0) {
      setErr("login");
    } else if (password.length === 0) {
      setErr("password");
    }
  };

  const clickGlaz = () => {
    setGlaz(!glaz);
  };

  return (
    <>
      
      <div className={styles.container}>
      {error === true && <div className={styles.error}>Неверный логин или пароль</div>}
        <div className={styles.bigText}>
          <h3>Пожалуйста, авторизуйтесь</h3>
        </div>

        <div className={styles.div}>
          <div className={styles.text}>Логин</div>
          <input onChange={loginValue} className={styles.input} type="text" />
        </div>
        <div className={styles.div}>
          <div className={styles.text}>Пароль</div>
          <div  className={styles.t3}>
          
          <input
            onChange={passwordValue}
            className={styles.input3}
            type="text"
          /></div>
        </div>
        <div>
          <input className={styles.input2} type="checkbox" name="" id="" />{" "}
          <div className={styles.div2}>Запомнить меня на этом компьютере</div>
        </div>
        <button onClick={handleClick} className={styles.button}>
          Войти
        </button>
        <hr className={styles.hr} />
        <Link  className={styles.link}>Забыли свое пароль?</Link>
        <div className={styles.helpDiv}>
          <div  className={styles.helpDiv2}>Если вы впервые на сайте, заполните, пожалуйста, регистрационную форму.</div>
          <Link to='/auth'  className={styles.helpDiv3}>Зарегистрироваться</Link>
        </div>
      </div>
    </>
  );
};
export default Login;
