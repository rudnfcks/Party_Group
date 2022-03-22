import React, { useState } from "react";
import TextButton from "../../components/Button/TextButton";
import InputContainer from "../../components/Container/InputContainer";

import backIcon from "../../asset/img/backIcon.svg";
import BackgroundGray from "../../components/Background/BackgroundGray";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/Input/Input";
import DateInput from "../../components/Input/DateInput";
import { useStore } from "../../Api";
import { dateToString } from "../../Util";
import { getCookie } from "../../cookie";
import Swal from "sweetalert2";

function Add({ setPage }) {
  const navigate = useNavigate();
  const store = useStore();

  const [inputInfo, setInputInfo] = useState({
    place: "",
    dateTime: undefined,
    count: undefined,
  });
  const inputChange = (name, value) => {
    setInputInfo((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const submitParty = () => {
    const { place, dateTime, count } = inputInfo;
    if (place === "" || dateTime === undefined || count === undefined || count <= 0) {
      Swal.fire({
        title: "모두 입력해주세요!",
        confirmButtonText: "확인",
        confirmButtonColor: "#9E40D7",
      });
      return;
    }

    const { year, month, day, hours, minutes, second, date } = dateToString(dateTime);

    if (date < new Date()) {
      Swal.fire({
        title: "날짜가 과거에요!",
        confirmButtonText: "확인",
        confirmButtonColor: "#9E40D7",
      });
      return;
    }

    store.addParty({
      id: 0,
      dateTime: `${year}-${month}-${day}T${hours}:${minutes}:${second}`,
      date: `${year}`,
      place: place,
      memberCount: count,
      isCancel: false,
      members: [
        {
          name: getCookie("name"),
          secession: false,
          secession_why: "",
          code: getCookie("code"),
        },
      ],
    })
    
    navigate("/home", { replace: true })
  };

  return (
    <BackgroundGray>
      <InputContainer>
        <div id="header">
          <Link
            to="/page/home"
            replace
            onClick={() => {
              setPage("home");
            }}
          >
            <img src={backIcon} alt="돌아가기" />
          </Link>
          <h1>파티 만들기</h1>
          <TextButton onClick={submitParty}>저장</TextButton>
        </div>

        <div id="section">
          <Input
            label="장소/제목"
            placeholder="장소/제목 입력"
            type="text"
            value={inputInfo.place}
            onChange={(value) => {
              inputChange("place", value);
            }}
          />
          <DateInput
            value={inputInfo.dateTime}
            onChange={(value) => {
              inputChange("dateTime", value);
            }}
          />
          <Input
            label="인원"
            placeholder="인원 입력"
            type="number"
            value={inputInfo.count}
            onChange={(value) => {
              inputChange("count", value);
            }}
          />
        </div>
      </InputContainer>
    </BackgroundGray>
  );
}

export default Add;
