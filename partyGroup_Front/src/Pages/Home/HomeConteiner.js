import styled from "@emotion/styled";

export const HomeConteiner = styled.div`
    #fixHeader {
        position: fixed;
        z-index: 15;
        
        box-sizing: border-box;
        padding: 16px;

        width: 100%;
        height: 132px;

        background: #9E40D7;
        border-radius: 0 0 16px 16px;

        opacity: ${(props) => (props.scroll/100)};

        span {
            float: left;
        }
        select {
            margin-top: 18px;
            float: right;
            background-color: #ffffff;
        }

        #date {
            margin-top: 64px;

            width: 100%;
            height: 40px;

            span:nth-of-type(1) {
                float: left;

                width: 248px;
                height: 40px;

                font-size: 40px;
                font-family: "sans";
                color: #ffffff;
            }

            span:nth-of-type(2) {
                float: right;

                display: block;
                margin-top: 12px;

                width: 68px;
                height: 28px;

                background: #ffffff;
                border-radius: 8px;

                font-size: 20px;
                font-family: "sans";
                line-height: 28px;
                text-align: center;
                color: #501E6F;
            }
        }
    }
    #header {
        width: 100%;
        height: 84px;

        box-sizing: border-box;
        padding: 16px;

        span {
            float: left;
        }
        select {
            margin-top: 18px;
            float: right;
        }
    }

    #top {
        margin: 14px 8px 0 8px;

        width: calc(100% - 16px);
        height: 160px;

        padding: 14px;
        box-sizing: border-box;

        background: #9E40D7;
        border-radius: 16px;

        box-shadow: 0px 4px 8px rgba(0,0,0,0.25);

        opacity: ${(props) => (1 - props.scroll/80)};

        p {
            height: 18px;

            font-size: 18px;
            font-family: "sans";
            color: #ffffff;
        }
        #date {
            width: 100%;
            height: 40px;

            span:nth-of-type(1) {
                float: left;

                width: 248px;
                height: 40px;

                font-size: 40px;
                font-family: "sans";
                color: #ffffff;
            }

            span:nth-of-type(2) {
                float: right;

                display: block;
                margin-top: 12px;

                width: 68px;
                height: 28px;

                background: #ffffff;
                border-radius: 8px;

                font-size: 20px;
                font-family: "sans";
                line-height: 28px;
                text-align: center;
                color: #501E6F;
            }
        }

        #count {
            margin-top: 20px;

            p {
                margin-top: 12px;

                width: 100%;
                height: 20px;
    
                font-size: 20px;
                font-family: "gothic";
                font-weight: bold;
                color: #ffffff;

                span {
                    float: right;
                    
                    b {
                        font-family: "sans";
                    }
                }
            }
        }
    }

    #content {
        margin: 42px 10px 0 10px;
        padding-bottom: 100px;

        width: calc(100% - 20px);

        & > img {
            display: block;

            position: relative;
            left: 50%;
            transform: translate(-50%, 0);

            width: 40px;
            height: 40px;
        }
    }
`

