import styled from "styled-components";

const Button = styled.button`
    width: 68px;
    height: 34px;

    background-color: #9E40D7;
    color: #ffffff;

    font-family: "gothic";
    font-weight: bold;
    font-size: 18px;

    border: none;
    border-radius: 12px;

    &:active {
        background-color: #501E6F;
    }
`;

export default Button;