import React from "react";

import logout from "../../assets/svg/logout.svg"
import MonthSelect from "../../components/monthSelect/MonthSelect";
import styles from "./Main.module.css";

interface member {
  name: string;
  secession: boolean;
  secession_shy: string;
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
}

function Main({ partyData, setPartyDataApi }: prop) {
  // const Setting
  const week = ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'];

  // function Setting
  const weekCount = (partyData: partyData[]) => {
    const today = new Date();

    return partyData.filter(data => 
      data.day >= (today.getDate()-today.getDay()) &&
      data.day <= (today.getDate()+(6 - today.getDay()))
    )
  }

  return (
   <div id="main">
    <div className={styles.header}>
      {/* header > top */}
      <div className={styles.top}>
        <h1 className={styles.logo}>Party Group</h1>
        <button>
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
  </div>);
}

export default Main;
