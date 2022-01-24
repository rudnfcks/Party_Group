import React from "react";

import logout from "../../assets/svg/logout.svg"
import MonthSelect from "../../components/monthSelect/MonthSelect";
import styles from "./Main.module.css";

function Main() {
  return (
   <div id="main">
    <div className={styles.header}>
      <div className={styles.top}>
        <h1 className={styles.logo}>Party Group</h1>
        <button>
          <img src={logout} />
        </button>
      </div>
      <div className={styles.middle}>
        <div className={styles.monthPartys}>
          <div className={styles.title}>
            <span>이번달의 약속 개수</span>
            <span>이번주의 약속 개수</span>
          </div>
          <div className={styles.value}>
            <span>15회</span>
            <span>5회</span>
          </div>
        </div>
        <MonthSelect />
      </div>
    </div>
  </div>);
}

export default Main;
