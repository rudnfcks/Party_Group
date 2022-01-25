import React from "react";

import styles from "./Upload.module.css";

function Upload() {
  return (
    <div className={styles.upload}>
      <h1>
        공지 작성하기 <span>X</span>
      </h1>
      <form>
        <span>날짜</span>
        <div>
          <input />년 <input />월 <input />일
        </div>
        <span>시간</span>
        <input />
        <span>장소</span>
        <input />
        <span>인원</span>
        <div className={styles.buttons}>
          <button>2명</button>
          <button>4명</button>
          <button>6명</button>
          <button>8명</button>
        </div>

        <button>등록하기</button>
      </form>
    </div>
  );
}

export default Upload;
