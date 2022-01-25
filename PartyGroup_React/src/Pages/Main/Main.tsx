import React from "react";
import { Route, useHistory } from "react-router-dom";

import logout from "../../assets/svg/logout.svg";
import Card from "../../components/card/Card";
import MonthSelect from "../../components/monthSelect/MonthSelect";
import styles from "./Main.module.css";

interface member {
  name: string;
  secession: boolean;
  secession_shy: string;
  code: number;
}

interface partyData {
  id: number;
  year: number;
  month: number;
  day: number;
  time: string;
  place: string;
  cancel: boolean;
  member: member[];
}

interface prop {
  partyData: partyData[];
  setPartyDataApi: Function;
  userLogout: Function;
}

function Main({ partyData, setPartyDataApi, userLogout }: prop) {
  // const Setting
  const history = useHistory();
  const week = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];

  history.push("/main/upload");

  // function Setting
  const weekCount = (partyData: partyData[]) => {
    const today = new Date();

    return partyData.filter(
      (data) =>
        data.day >= today.getDate() - today.getDay() &&
        data.day <= today.getDate() + (6 - today.getDay())
    );
  };
  const logoutClick = () => {
    userLogout();
  };

  return (
    <div id="main">
      <div className={styles.header}>
        {/* header > top */}
        <div className={styles.top}>
          <h1 className={styles.logo}>Party Group</h1>
          <button onClick={logoutClick}>
            <img src={logout} />
          </button>
        </div>
        {/* header > middle */}
        <div className={styles.middle}>
          <div className={styles.monthPartys}>
            <div className={styles.title}>
              <span>이번달의 약속 개수</span>
              <span>이번주의 약속 개수</span>
            </div>
            <div className={styles.value}>
              <span>{partyData.length}회</span>
              <span>{weekCount(partyData).length}회</span>
            </div>
          </div>
          <MonthSelect setPartyDataApi={setPartyDataApi} />
        </div>
        {/* header > bottom */}
        <div className={styles.bottom}>
          <div className={styles.date}>
            <span>{week[new Date().getDay()]}</span>
            <span>{new Date().getDate()}일</span>
          </div>
        </div>
      </div>
      {/* header > nav */}
      <div className={styles.nav}>
        <button>공지 올리기</button>
      </div>
      {/* header > section */}
      <div className={styles.section}>
        {partyData.map((data: any, key: number) => (
          <Card partyData={data} key={key} />
        ))}
      </div>
    </div>
  );
}

export default Main;
