import styled from "@emotion/styled";

const ModalContainer = styled.div`
    position: fixed;
    z-index: 15;
    top: 0;
    left: 0;
    
    width: 100%;
    height: 100%;

    background: rgba(0,0,0,0.25);

    .content {
        position: absolute;
        z-index: 5;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        width: 300px;
        height: 200px;

        background: #ffffff;
        border-radius: 16px;
        box-shadow: 0px 4px 8px rgba(0,0,0,0.25);

        h1 {   
            margin-top: 16px;
            margin-bottom: 14px;

            width: 100%;
            height: 20px;
            
            font-size: 20px;
            font-family: "sans";
            text-align: center;
        }

        .buttons {
            margin: 40px auto 0 auto;

            width: 150px;
            height: 34px;

            button:nth-of-type(1) {
                margin-right: 10px;
            }
        }
    }
`

export default ModalContainer