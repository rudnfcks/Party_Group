import React, { useEffect, useState } from "react";
import BackgroundPurple from "../../components/Background/BackgroundPurple";
import JoinInput from "../../components/Input/JoinInput";
import JoinButton from "../../components/Button/JoinButton";
import Logo from "../../components/Logo/Logo";
import LoginModal from "./LoginModal";
import { setCookie, getCookie } from "../../cookie";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Login() {
    const navigate = useNavigate()

    const [name, setName] = useState("");

    const nameChangeHandler = (e) => {
        setName(e.target.value)
    }
    const onSubmitHandler = (e) => {
        e.preventDefault()

        if (name == null || name === "") {
            Swal.fire({
                title: "이름을 입력해주세요!",
                confirmButtonText: "확인",
                confirmButtonColor: "#9E40D7",
            });
            return
        }
        
        const code = new Date().getTime();
        
        setCookie("name", name);
        setCookie("code", code);

        navigate("/page", {replace: true})
    }
    
    useEffect(() => {
        if (getCookie("name") && getCookie("code")) {
            navigate("/page", {replace: true})
        }
    }, [])

    return(
        <BackgroundPurple>
            <Logo isCenter={true}/>
            <LoginModal>
                <form onSubmit={onSubmitHandler}>
                    <JoinInput id="name" placeholder="이름을 입력하세요." value={name} onChange={nameChangeHandler} />
                    <JoinButton>입장하기</JoinButton>
                </form>
                <h3>Party Group</h3>
                <p>
                    <span>Party Group</span>은 <b>약속을 잡기 쉽게</b> 도와줘요!<br />
                    <br />
                    날짜, 시간, 장소, 인원으로 공지를 올리면<br />
                    <span>Party Group</span>을 사용하는 모두에게 알람이 가요!<br />
                    <br />
                    올라오는 공지에서 가고 싶은 파티가 있다면?<br />
                    <b>“참여”</b> 버튼을 눌러 참여하세요!<br />
                    참여는 오후 10시에서 12시에만 가능해요!<br />
                </p>
            </LoginModal>
        </BackgroundPurple>
    )
}

export default Login