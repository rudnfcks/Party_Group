import styled from "@emotion/styled";
import React from "react";

function ToggleButton({value, onClick}) {
    return (
        <ToggleConteiner isActive={value} onClick={() => {onClick(!value)}}>
            <div className="line"></div>
            <div className="button"></div>
        </ToggleConteiner>
    )
}

const ToggleConteiner = styled.button`
    position: relative;
    margin: 0;
    padding: 0;

    display: block;

    width: 56px;
    height: 28px;

    border: none;
    background: none;

    .line {
        position: absolute;
        top: 4px;
        left: 4px;

        width: 48px;
        height: 20px;

        background: ${(props) => (props.isActive?"#03A800":"#aaaaaa")};
        border-radius: 10px;
    }

    .button {
        transition: left 0.2s;
        position: absolute;
        top: 0;
        left: ${(props) => (props.isActive?"28px":"0px")};

        width: 28px;
        height: 28px;

        background: #ffffff;
        border-radius: 50%;
        box-shadow: 0px 2px 2px rgba(0,0,0,0.25);
    }
`

export default ToggleButton