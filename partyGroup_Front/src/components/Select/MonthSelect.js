import React from "react";
import styled from "@emotion/styled";

import img from "../../asset/img/selectArrow.svg"

function MonthSelect({value, onChange}) {
    const onSelectChange = (e) => {
        onChange(e.target.value)
    }

    const now = new Date()

    return (
        <Select value={value} onChange={onSelectChange}>
            <option value={now.getFullYear()}>올해</option>
            <option value={now.getFullYear() + 1}>내년</option>
        </Select>
    )
}

const Select = styled.select`
    width: 74px;
    height: 32px;

    background: #ffffff;
    border: none;
    border-radius: 4px;
    box-shadow: 0px 4px 8px rgba(0,0,0,0.25);
    
    padding-right: 26px;
    box-sizing: border-box;

    font-size: 18px;
    font-family: "sans";
    line-height: 32px;
    text-align: right;

    background:url(${img}) no-repeat 90% 50%/15px auto;
    appearance:none;

    &::-ms-expand{
        display:none;/*for IE10,11*/
    }

    &:focus {
        outline: none;
    }
`

export default MonthSelect