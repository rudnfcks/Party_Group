import React, { useState } from "react";

import styles from "./MonthSelect.module.css"
import triangle from "../../assets/svg/triangle.svg"
import axios from "axios";

interface prop {
    setPartyDataApi: Function
}

function MonthSelect({ setPartyDataApi }: prop) {
    // satate Setting
    const [value, setValue] = useState(new Date().getMonth() + 1);
    const [isDrop, setIsDrop] = useState(false);

    // function Setting
    const onSelectClick = (event: any) => {
        let year = new Date().getFullYear();
        let month = event.target.id;

        if (value != month) {
            setPartyDataApi(year, month);
            setValue(event.target.id);
        }
    }
    const onSelectBoxClick = () => {
        setIsDrop(current => !current);
    }

    return (
        <div className={styles.selectBox} onClick={onSelectBoxClick}>
            <div className={styles.box}>
                <span>{value}월</span>
                <div className={styles.dropBtn}>
                    <img src={triangle} />
                </div>
            </div>

            {isDrop && (
            <div className={styles.dropDown}>
                <div id="1" onClick={onSelectClick}>1월</div>
                <div id="2" onClick={onSelectClick}>2월</div>
                <div id="3" onClick={onSelectClick}>3월</div>
                <div id="4" onClick={onSelectClick}>4월</div>
                <div id="5" onClick={onSelectClick}>5월</div>
                <div id="6" onClick={onSelectClick}>6월</div>
                <div id="7" onClick={onSelectClick}>7월</div>
                <div id="8" onClick={onSelectClick}>8월</div>
                <div id="9" onClick={onSelectClick}>9월</div>
                <div id="10" onClick={onSelectClick}>10월</div>
                <div id="11" onClick={onSelectClick}>11월</div>
                <div id="12" onClick={onSelectClick}>12월</div>
            </div>
            )}
        </div>
    )
}

export default MonthSelect;