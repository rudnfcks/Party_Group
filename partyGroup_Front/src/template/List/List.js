import React from "react";
import { ListContainer } from "./ListContainer";
import ImgButton from "../../components/Button/ImgButton";

import modify from "../../asset/img/modify.svg";
import trashCan from "../../asset/img/trashCan.svg";
import Button from "../../components/Button/Button";
import { useStore } from "../../Api";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function List({ listId, info, name, code, disable, setPage }) {
  const navigate = useNavigate()
  const store = useStore();

  const date = new Date(info.dateTime);

  const isJoin = info.members.filter((item) => item.name === name && !item.secession).length > 0;

  const toast = Swal.mixin({
    toast: true, 
    position: 'center-center', 
    showConfirmButton: false, 
    timer: 1500, 
    timerProgressBar: true, 
    didOpen: (toast) => { 
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  const onButtonClick = async () => {
    if (!isJoin) {
      if (info.members.filter((item)=>(!item.secession)).length >= info.memberCount) {
        toast.fire({
          icon: 'warning',
          title: "이미 파티가 모두 찼어요!"
        })
      } else {
        store.joinParty(listId, {
          name: name,
          secession_why: "",
          code: code,
        })
      }
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
  }

  const onEditClick = () => {
    setPage("edit")
    navigate(`../edit/${btoa(listId)}`, {replace: true});
  }

  const onDelClick = () => {
    Swal.fire({
      title: "정말 취소 할까요?",
      showCancelButton: true,
      confirmButtonColor: "#9E40D7",
      cancelButtonText: "취소",
      confirmButtonText: "확인",
    }).then(result => {
      if (result.isConfirmed) {
        store.delParty(info.id)
      }
    })
  }

  return (
    <ListContainer>
      <div className="top">
        <span>{info.place}</span>
        {info.members[0].name === name ? (
          <div>
            <ImgButton url={modify} alt="수정" size={20} onClick={onEditClick} />
            <ImgButton url={trashCan} alt="삭제" size={20} onClick={onDelClick} />
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
      {disable && <div className="disable"></div>}
    </ListContainer>
  );
}

export default List;
