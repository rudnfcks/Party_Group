import React, { useEffect, useState } from "react";
import { useStore } from "../../Api";
import MainLogo from "../../components/Logo/MainLogo";
import MonthSelect from "../../components/Select/MonthSelect";
import loading from "../../asset/img/loading.gif";
import { getCookie } from "../../cookie";
import List from "../../template/List/List";
import { HomeConteiner } from "./HomeConteiner";
import { dateToString } from "../../Util";

function Home({setPage}) {
  const store = useStore()
  const { year, month, day, week, date } = dateToString(new Date())

  const [selectMonth, setSelectMonth] = useState(month)
  const onSelectMonthChange = (value) => {
    setSelectMonth(value)
    store.getPartysInfo(year, value)
  };

  const [scrollEvent, setScrollEvent] = useState(0)

  const getToWeekCount = () => {
    let now = new Date()
    let firstDay = day - now.getDay()
    let lastDay = parseInt(day) + (6 - now.getDay())

    if (store.partys !== null) {
      let temp = store.partys.filter(item => {
        let itemDay = new Date(item.dateTime).getDate()
        if (itemDay >= firstDay && itemDay <= lastDay) {
          return true
        } else {
          return false
        }
      })
      return temp.length
    }
  }

  const getToMonthCount = () => {
    let now = new Date()
    if (store.partys !== null) {
      let temp = store.partys.filter(item => new Date(item.dateTime).getMonth() === now.getMonth());
      return temp.length
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {setScrollEvent(window.scrollY)})
    store.getPartysInfo(year, selectMonth)
  }, [year, selectMonth])

  return (
    <HomeConteiner scroll={scrollEvent}>
      <header id="fixHeader">
        <MainLogo color="#ffffff" />
        <MonthSelect value={selectMonth} onChange={onSelectMonthChange} />

        <div id="date">
          <span>
            {year}. {month}. {day}
          </span>
          <span>{week}</span>
        </div>
      </header>

      <header id="header">
        <MainLogo color="#501E6F" />
        <MonthSelect value={selectMonth} onChange={onSelectMonthChange} />
      </header>

      <section id="top">
        <p>Today</p>
        <div id="date">
          <span>
            {year}. {month}. {day}
          </span>
          <span>{week}</span>
        </div>
        <div id="count">
          <p>
            이번 달의 파티
            <span>
              <b>{getToMonthCount()}</b> 회
            </span>
          </p>
          <p>
            이번 주의 파티
            <span>
              <b>{getToWeekCount()}</b> 회
            </span>
          </p>
        </div>
      </section>

      <section id="content">
        {
          // 기간이 남은 리스트
          store.partys !== null ? (
            store.partys
              .filter((item) => new Date(item.dateTime) >= date && !item.cancel)
              .map((item) => (
                <List
                  key={item.id}
                  listId={item.id}
                  info={item}
                  name={getCookie("name")}
                  code={getCookie("code")}
                  setPage={setPage}
                />
              ))
          ) : (
            <img src={loading} alt="loading..." />
          )
        }
      </section>
    </HomeConteiner>
  );
}

export default Home;
