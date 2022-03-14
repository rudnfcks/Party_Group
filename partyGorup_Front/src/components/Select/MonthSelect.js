import React from "react";
import styled from "@emotion/styled";

import img from "../../asset/img/selectArrow.svg"

function MonthSelect({value, onChange}) {
    const onSelectChange = (e) => {
        onChange(e.target.value)
    }

    return (
        <Select value={value} onChange={onSelectChange}>
            <option value="01">1월</option>
            <option value="02">2월</option>
            <option value="03">3월</option>
            <option value="04">4월</option>
            <option value="05">5월</option>
            <option value="06">6월</option>
            <option value="07">7월</option>
            <option value="08">8월</option>
            <option value="09">9월</option>
            <option value="10">10월</option>
            <option value="11">11월</option>
            <option value="12">12월</option>
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