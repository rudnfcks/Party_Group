import styled from "styled-components";

const JoinInput = styled.input`
    width: 300px;
    height: 64px;

    background-color: #ffffff;
    border: 10px solid #501E6F;
    border-radius: 8px;

    font-family: "gothic";
    font-size: 24px;
    color: #333333;
    text-align: center;

    &::placeholder {
        color: #aaaaaa;
        text-align: left;
    }
`

export default JoinInput;