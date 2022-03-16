import styled from "styled-components";

const JoinButton = styled.button`
    width: 250px;
    height: 64px;

    background-color: #9E40D7;
    color: #ffffff;

    font-family: "gothic";
    font-weight: bold;
    font-size: 32px;

    border: none;
    border-radius: 12px;

    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.25);

    &:active {
        background-color: #501E6F;
    }
`;

export default JoinButton;