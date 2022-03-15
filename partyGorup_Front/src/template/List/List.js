import React from "react";
import { ListContainer } from "./ListContainer";
import ImgButton from "../../components/Button/ImgButton";

import modify from "../../asset/img/modify.svg";
import trashCan from "../../asset/img/trashCan.svg";
import Button from "../../components/Button/Button";
import { useStore } from "../../Api";
import Swal from "sweetalert2";

function List({ listId, info, name, code }) {
  const store = useStore();

  const date = new Date(info.dateTime);
  const now = new Date();

  const isJoin = info.members.filter((item) => item.name === name && !item.secession).length > 0;

  const onButtonClick = async () => {
    if (!isJoin) {
      store.joinParty(listId, {
        name: name,
        secession_why: "",
        code: code,
      });
    } else {
      const { value: secessionWhy } = await Swal.fire({
        title: "취소사유를 알려주세요!",
        input: "text",
        showCancelButton: true,
        confirmButtonColor: "#9E40D7",
        inputPlaceholder: "사유를 입력하세요...",
        cancelButtonText: "취소",
        confirmButtonText: "확인",
      });
      if (secessionWhy) {
        store.leaveParty(listId, code, {
          name: name,
          secession_why: secessionWhy,
          code: code,
        });
      }
    }
  };

  return (
    <ListContainer>
      <div className="top">
        <span>{info.place}</span>
        {info.members[0].name === name ? (
          <div>
            <ImgButton url={modify} alt="수정" size={20} />
            <ImgButton url={trashCan} alt="삭제" size={20} />
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="middle">
        <span>{`${date.getDate()}일 ${date.getHours()}:${date.getMinutes()}`}</span>
        <span>{`${info.members.filter((item)=>(!item.secession)).length}/${info.memberCount}`}</span>
      </div>
      <div className="bottom">
        <p>
          {info.members.map((item, key) => !item.secession && (
            <span key={key} className={key === 0 ? "owner" : ""}>
              {item.name}{" "}
            </span>
          ))}
        </p>
        {info.members[0].name !== name && (
          <Button onClick={onButtonClick}>{isJoin ? "취소" : "참여"}</Button>
        )}
      </div>
      {date < now && <div className="disable"></div>}
    </ListContainer>
  );
}

export default List;
