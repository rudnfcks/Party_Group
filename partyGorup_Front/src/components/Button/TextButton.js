import styled from "styled-components";

const TextButton = styled.button`
    width: 70px;
    height: 34px;

    background: none;
    color: #9E40D7;

    font-family: "gothic";
    font-weight: bold;
    font-size: 18px;

    border: none;

    &:active {
        color: #501E6F;
    }
`;

export default TextButton;