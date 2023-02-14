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
      <div className={styles.divFlex}>
        <div className={styles.container}>
          <div className={styles.text}>
            <b>Вход</b>
          </div>
          <div className={styles.mainDiv}>
            <input
              onChange={(e) => loginValue(e)}
              value={login}
              placeholder="Номер телефона или email"
              className={err === "login" ? styles.input1Error : styles.input1}
              type="text"
            />

            <div>
              <input
                onChange={passwordValue}
                value={password}
                placeholder="Пароль"
                className={
                  err === "password" ? styles.input2Error : styles.input2
                }
                type={glaz ? "text" : "password"}
                name=""
                id=""
              />

              <button className={styles.button2}>
                {glaz ? (
                  <img
                    onClick={clickGlaz}
                    className={styles.glaz2}
                    src={glaz2}
                    alt=""
                  />
                ) : (
                  <img
                    onClick={clickGlaz}
                    className={styles.glaz}
                    src={glaz1}
                    alt=""
                  />
                )}
              </button>
            </div>
            {error && (
              <div className={styles.errDiv}>Неверный логин или пароль</div>
            )}
            <button
              onClick={(e) => {
                login.length > 0 && password.length > 0
                  ? handleClick(e)
                  : handleErr(e);
              }}
              className={styles.button}
            >
              Войти
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
