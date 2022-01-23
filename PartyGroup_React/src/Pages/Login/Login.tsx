import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Logo from "../../components/logo/Logo";

import styles from "./Login.module.css";

interface prop {
  userLogin: Function;
  cookies: any;
}

function Login({ userLogin, cookies }: prop) {
  // const Setting
  const history = useHistory();

  // state Setting
  const [name, setName] = useState("");

  // effect Setting
  useEffect(() => {
    if (cookies.infoName) {
      history.replace("/main");
    }
  }, [history, cookies]);

  // function Setting
  const onNameChange = (event: any) => {
    setName(event.target.value);
  };

  const onSubmit = (event: any) => {
    event.preventDefault();
    userLogin(name);

    history.replace("/main");
  };

  return (
    <div id="lobby">
      <div className={styles.logo}>
        <Logo />
      </div>

      <div className={styles.loginForm}>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            value={name}
            placeholder="이름을 입력해주세요."
            onChange={onNameChange}
          />
          <button>입장하기</button>
          <span>Party Group</span>
          <p>
            <span>Party Group</span>은 <b>약속을 잡기 쉽게 도와줘요!</b>
            <br />
            <br />
            날짜, 시간, 장소, 인원으로 공지를 올리면
            <br />
            <span>Party Group</span>을 사용하는 모두에게 알림이 가요!
            <br />
            <br />
            올라오는 공지에서 가고 싶은 파티가 있다면? <br />
            <b>"참여"</b> 버튼을 눌러 참여하세요.
            <br />
            <br />
            <span>참여는 오후 10시에서 12시에만 가능해요!</span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
