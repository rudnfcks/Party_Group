import styled from "styled-components";

function Input({label, placeholder, type, value, onChange}) {
    const onInputChange = (e) => {
        onChange(e.target.value)
    }

    return (
        <InputContainer>
            <span>{label}</span>
            <input value={value} placeholder={placeholder} type={type} onChange={onInputChange} ></input>
        </InputContainer>
    )
}

const InputContainer = styled.div`
    width: 100%;
    height: 56px;

    background-color: #ffffff;
    border: none;
    border-top: 1px solid #DDDDDD;
    border-bottom: 1px solid #DDDDDD;

    font-family: "gothic";
    display: flex;

    &:focus {
        outline: none;
    }

    span {
        width: 100px;
        height: 54px;

        padding-left: 15px;
        box-sizing: border-box;

        font-size: 18px;
        line-height: 54px;
        text-align: left;
    }

    input {
        width: calc(100% - 115px);
        height: 54px;

        border: none;
        box-sizing: border-box;

        font-size: 20px;
        color: #333333;
        text-align: left;
    }
    input:focus {
        outline: none;
    }
`

export default Input;