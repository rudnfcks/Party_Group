import { useState } from "react";
import styled from "styled-components";
import { LocalizationProvider, StaticDateTimePicker } from "@mui/lab";
import AdapterDateFns from '@mui/lab/AdapterDateFns';

import calendarImg from "../../asset/img/calendar.svg";
import TextButton from "../../components/Button/TextButton";
import { dateToString } from "../../Util";

function DateInput({value, onChange}) {
    const [DateTimeModal, setDateTimeModal] = useState(false);

    const viewDate = (date) => {
        if(date !== undefined) {
            let {year, month, day, hours, minutes} = dateToString(date)

            return `${year}-${month}-${day} ${hours}:${minutes}`
        }
    }

    const setModal = (value) => {
        setDateTimeModal(value)
    }

    return (
        <>
        <InputContainer isView={DateTimeModal}>
            <span>날짜 시간</span>
            <button onClick={() => {setModal(true)}}>
                <input value={viewDate(value)} placeholder="날짜 입력" readOnly></input>
                <img src={calendarImg} />
            </button>
        </InputContainer>

        <DateTimePickerModal isView={DateTimeModal}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <StaticDateTimePicker
                    displayStaticWrapperAs="desktop"
                    value={value}
                    onChange={(datetime) => {onChange(datetime)}}
                    renderInput={(props)=><></>}
                />
            </LocalizationProvider>
            <TextButton onClick={() => {setModal(false)}}>확인</TextButton>
        </DateTimePickerModal>
        </>
    )
}

const InputContainer = styled.div`
    width: 100%;
    height: 56px;

    background-color: #ffffff;
    border: none;
    border-top: 1px solid #DDDDDD;
    border-bottom: 1px solid #DDDDDD;

    font-family: "gothic";
    display: flex;

    &:focus {
        outline: none;
    }

    &::after {
        position: fixed;
        top: 0;
        left: 0;

        display: ${(props) => (props.isView?"block":"none")};
        content: "";

        width: 100%;
        height: 100%;

        background: rgba(0,0,0,0.25);
        z-index: 10;
    }

    span {
        width: 100px;
        height: 54px;

        padding-left: 15px;
        box-sizing: border-box;

        font-size: 18px;
        line-height: 54px;
        text-align: left;
    }

    button {
        width: calc(100% - 115px);
        height: 54px;

        display: flex;
        justify-content: space-between;

        border: none;
        padding: 0;
        box-sizing: border-box;
        
        background-color: #ffffff;
        font-size: 20px;
        color: #333333;
        text-align: left;

        input {
            height: 54px;
            width: 180px;

            box-sizing: border-box;

            background: #ffffff;
            border: none;

            font-family: "gothic";
            font-size: 20px;
            color: #333333;
            line-height: 54px;
        }

        img {
            display: block;

            margin-top: 14px;
            margin-right: 14px;

            width: 24px;
            height: 24px;
        }
    }
    input:focus {
        outline: none;
    }
`

const DateTimePickerModal = styled.div`
    display: ${(props) => (props.isView?"block":"none")};
    
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;

    width: 320px;
    height: 450px;

    background: #ffffff;
    box-shadow: 0px 0px 8px rgba(0,0,0,0.25);

    &>button {
        position: absolute;
        right: 14px;
        bottom: 10px;
    }
`

export default DateInput;