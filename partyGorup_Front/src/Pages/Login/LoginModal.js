import styled from "@emotion/styled";

const LoginModal = styled.div`
    @keyframes anime {
        0% {
            bottom: -50px;
            opacity: 0;
        }

        100% {
            bottom: 0;
            opacity: 1;
        }
    }

    position: absolute;
    bottom: 0;

    width: 100%;
    height: calc(100% - 269px);

    background: #ffffff;
    border-radius: 36px 36px 0 0;

    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    align-items: center;

    animation: anime 1s;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;

        input {
            flex-shrink: 0;
            margin-top: 60px;
        }
        button {
            flex-shrink: 0;
            margin-top: 28px;
        }
    }

    h3 {
        margin-top: 24px;

        font-size: 24px;
        font-family: "logo";
        color: #501E6F;
    }

    p {
        font-family: "gothic";
        line-height: 24px;
        text-align: center;

        margin-top: 20px;
        span {
            font-size: 14px;
            font-family: "logo";
            color: #501E6F;
        }
        b {
            font-weight: bold;
        }
    }
`

export default LoginModal