import React from "react";
import styled from "styled-components";

function ImgButton({size, onClick, url, alt}) {
    return(
        <ButtonContainer size={size} onClick={onClick}>
            <img src={url} alt={alt}/>
        </ButtonContainer>
    )
}

const ButtonContainer = styled.button`
    padding: 0;

    width: ${(props) => (props.size)}px;
    height: ${(props) => (props.size)}px;

    background: none;

    border: none;

    img {
        display: block;

        width: ${(props) => (props.size)}px;
        height: ${(props) => (props.size)}px;
    }
`

export default ImgButton;