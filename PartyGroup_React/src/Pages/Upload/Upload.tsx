import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import styles from "./Upload.module.css";

interface formData {
  year: number;
  month: number;
  day: number;
  time: string;
  place: string;
  count: number;
}

interface prop {
  postPartyDataApi: Function
}

function Upload({postPartyDataApi}: prop) {
  // const Setting
  const history = useHistory();
  const toDay = new Date();

  // state Setting
  const [formData, setFormData] = useState<formData>(
    {
      year: toDay.getFullYear(),
      month: toDay.getMonth() + 1,
      day: toDay.getDate(),
      time: `${toDay.getHours()}:${toDay.getMinutes()}`,
      place: "",
      count: 2
    }
  );
  const [active, setActive] = useState(false);

  // effect Setting
  useEffect(() => {
    setActive(true);
  }, []);

  // function Setting
  const onBackClick = () => {
    setActive(false);

    setTimeout(() => {
      history.goBack();  
    }, 700);
  }
  const onChangeInput = (event: any) => {
    const changed = {
      ...formData,
      [event.target.name]: event.target.value
    };

    setFormData(changed);
  }
  const memberButtonClick = (event: any) => {
    event.preventDefault();

    const changed = {
      ...formData,
      count: parseInt(event.target.value)
    }
    console.log(changed);
    setFormData(changed);
  }
  const submitButtonClick = (event: any) => {
    event.preventDefault();

    postPartyDataApi(formData);
    onBackClick();
  }

  return (
    <div className={styles.upload} id={active?styles.active:""}>
      <h1>
        공지 작성하기 <span onClick={onBackClick}>X</span>
      </h1>
      <form>
        <span>날짜</span>
        <div>
          <input name="year" value={formData.year} onChange={onChangeInput}/>년 
          <input name="month" value={formData.month} onChange={onChangeInput} />월
          <input name="day" value={formData.day} onChange={onChangeInput} />일
        </div>
        <span>시간</span>
        <input name="time" value={formData.time} onChange={onChangeInput} />
        <span>장소</span>
        <input name="place" value={formData.place} onChange={onChangeInput} />
        <span>인원</span>
        <div className={styles.buttons}>
          <button 
            value={2}
            className={formData.count === 2 ? styles.active : ""}
            onClick={memberButtonClick}
          >2명</button>
          <button 
            value={4}
            className={formData.count === 4 ? styles.active : ""}
            onClick={memberButtonClick}
          >4명</button>
          <button 
            value={6}
            className={formData.count === 6 ? styles.active : ""}
            onClick={memberButtonClick}
          >6명</button>
          <button 
            value={8}
            className={formData.count === 8 ? styles.active : ""}
            onClick={memberButtonClick}
          >8명</button>
        </div>

        <button onClick={submitButtonClick}>등록하기</button>
      </form>
    </div>
  );
}

export default Upload;
