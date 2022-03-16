import styled from "@emotion/styled";
import React from "react";

function MainLogo({color}) {
    return (
        <LogoSpan color={color}>Party Group</LogoSpan>
    )
}

const LogoSpan = styled.span`
    width: 250px;
    height: 52px;

    font-size: 42px;
    font-family: "logo";
    line-height: 52px;
    color: ${(props) => (props.color)};
`

export default MainLogo