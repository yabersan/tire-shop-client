import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header_list}>
        <div>
          <Link>Шины</Link>
        </div>
        <div>
          <Link>Грузовые Шины</Link>
        </div>
        <div>
          <Link>Мотошины</Link>
        </div>
        <div>
          <Link>Пункт выдачи</Link>
        </div>
        <div>
          <Link>Акции</Link>
        </div>
        <div>
          <Link>Контакты</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
