import React from "react";

import pen from "../../assets/svg/pen.svg";
import trashCan from "../../assets/svg/trashCan.svg";
import sun from "../../assets/svg/sun.svg";
import moon from "../../assets/svg/moon.svg";

import styles from "./Card.module.css";
import { useCookies } from "react-cookie";

interface member {
  name: string;
  secession: boolean;
  secession_why: string;
  code: number;
}

interface partyData {
  year: number;
  month: number;
  day: number;
  time: string;
  place: string;
  count: number;
  member: member[];
}

interface prop {
  partyData: partyData;
}

function Card({ partyData }: prop) {
  // cookies Setting
  const [cookies, setCookie, delCookie] = useCookies(["infoName", "infoCode"]);

  // function Setting
  const getDate = () => {
    return `${partyData.year}.${partyData.month}.${partyData.day}`;
  };
  const getTime = () => {
    const ampm: string =
      parseInt(partyData.time.split(":")[0]) >= 12 ? "오후" : "오전";
    let hour: number = parseInt(partyData.time.split(":")[0]);
    const minute: number = parseInt(partyData.time.split(":")[1]);

    hour = hour >= 13 ? hour - 12 : hour;

    return `${ampm} ${hour}시 ${minute}분`;
  };
  const getImg = () => {
    const hour = parseInt(partyData.time.split(":")[0]);

    if (hour >= 6 && hour <= 17) {
      return sun;
    } else {
      return moon;
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <div>
          <span>날짜</span>
          <span>{getDate()}</span>
        </div>
        <div>
          <span>시간</span>
          <span>{getTime()}</span>
        </div>
        <div>
          <span>장소</span>
          <span>{partyData.place}</span>
        </div>
        <div>
          <span>인원</span>
          <p>
            {partyData.member.map((data) => (
              <span>{data.name} </span>
            ))}
          </p>
        </div>
      </div>
      <div className={styles.form}>
        <div className={styles.buttons}>
          <button>
            <img src={pen} />
          </button>
          <button>
            <img src={trashCan} />
          </button>
        </div>
        <div className={styles.img}>
          <img src={getImg()} />
        </div>
        <div className={styles.button}>
          <span>
            {partyData.member.length}/{partyData.count} 명
          </span>
          <button>참여</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
