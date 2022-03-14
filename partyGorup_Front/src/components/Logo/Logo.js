import styled from "@emotion/styled";
import React from "react";
import "../../App";

function Logo({isCenter}) {
    return (
        <Container isCenter={isCenter}>
            <span>Party</span>
            <span>Group</span>
        </Container>
    )
}

const Container = styled.div`
    ${(props) => (props.isCenter && `
    @keyframes logo {
        0% {
            top: 186px;
            left: 40px;
            transform: translate(0,0);
        }

        100% {
            top: 64px;
            left: 50%;
            transform: translate(-50%,0);
        }
    }
    `)}

    position: absolute;
    left: ${(props) => (props.isCenter?"50%":"40px")};
    top: ${(props) => (props.isCenter?"64px":"186px")};
    transform: ${(props) => (props.isCenter?"translate(-50%,0);":"translate(0,0);")};
    animation: logo 1s;

    width: 220px;
    height: 140px;

    span {
        display: block;
        width: 220px;
        height: 70px;

        font-family: "logo";
        font-size: 64px;
        color: #ffffff;
    }
    span:nth-of-type(1) {
        text-align: left;
    }
    span:nth-of-type(2) {
        text-align: right;
    }
`

export default Logo