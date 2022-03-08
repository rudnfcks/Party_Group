import React from "react";
import styled from "styled-components";

function ImgButton({onClick, url, alt}) {
    return(
        <ButtonContainer onClick={onClick}>
            <img src={url} alt={alt}/>
        </ButtonContainer>
    )
}

const ButtonContainer = styled.button`
    padding: 0;

    width: 20px;
    height: 20px;

    background: none;

    border: none;

    img {
        display: block;

        width: 20px;
        height: 20px;
    }
`

export default ImgButton;