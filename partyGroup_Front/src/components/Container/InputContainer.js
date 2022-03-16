import styled from "@emotion/styled";

const InputContainer = styled.div`
    #header {
        position: relative;

        width: 100%;
        height: 60px;

        box-sizing: border-box;

        background: #ffffff;
        border-bottom: 1px solid #dddddd;

        a {
            position: absolute;
            display: block;

            width: 24px;
            height: 24px;

            padding: 18px 12px;

            img {
                display: block;

                width: 24px;
                height: 24px;
            }
        }

        h1 {
            width: 100%;
            height: 60px;

            font-size: 28px;
            font-family: "sans";
            text-align: center;
            line-height: 60px;
        }
        
        button {
            position: absolute;
            top: 13px;
            right: 0;
        }
    }

    #section {
        margin-top: 40px;

        width: 100%;
    }
`

export default InputContainer