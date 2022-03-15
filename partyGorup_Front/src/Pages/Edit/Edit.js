import React, { useState } from "react";
import TextButton from "../../components/Button/TextButton";
import InputContainer from "../../components/Container/InputContainer";

import backIcon from "../../asset/img/backIcon.svg";
import BackgroundGray from "../../components/Background/BackgroundGray";
import { Link, useNavigate, useParams } from "react-router-dom";
import Input from "../../components/Input/Input";
import DateInput from "../../components/Input/DateInput";
import { useStore } from "../../Api";
import { dateToString } from "../../Util";
import { getCookie } from "../../cookie";
import Swal from "sweetalert2";

function Edit({ setPage }) {
  const { strId } = useParams();
    
  const navigate = useNavigate()
  const store = useStore()
  const viewValue = store.partys.filter((item) => (item.id == atob(strId)))

  const [inputInfo, setInputInfo] = useState({
    place: viewValue[0].place,
    dateTime: new Date(viewValue[0].dateTime),
    count: viewValue[0].memberCount,
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

    const { year, month, day, hours, minutes, second } = dateToString(dateTime)

    store.editParty(strId, {
      dateTime: `${year}-${month}-${day}T${hours}:${minutes}:${second}`,
      place: place,
      memberCount: count,
      isCancel: false
    }).then(navigate("/home", { replace: true }))    
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
          <h1>파티 수정하기</h1>
          <TextButton onClick={submitParty}>수정</TextButton>
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

export default Edit;
