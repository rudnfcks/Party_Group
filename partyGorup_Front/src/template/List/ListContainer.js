import styled from "@emotion/styled";

export const ListContainer = styled.div`
    position: relative;
    margin-top: 16px;

    width: 100%;
    height: 120px;

    box-sizing: border-box;
    padding: 12px 10px 0 12px;

    background: #ffffff;
    border-left: 4px solid #9E40D7;
    
    box-shadow: 0px 4px 8px rgba(0,0,0,0.25);

    .top {
        width: 100%;
        height: 24px;

        span {
            float: left;
            display: block;

            width: calc(100% - 54px);
            height: 24px;

            font-size: 24px;
            font-family: "sans";
        }

        div {
            float: right;
            width: 54px;

            button {
                width: 24px;
                height: 24px;

                box-sizing: border-box;
                padding: 2px;
            }
            button:nth-of-type(1) {
                margin-right: 6px;
            }
        }
    }

    .middle {
        margin-top: 6px;

        width: 100%;
        height: 26px;

        border-bottom: 1px solid #aaaaaa;

        span {
            display: block;
            
            height: 16px;

            font-size: 16px;
            font-family: "sans";
        }
        span:nth-of-type(1) {
            float: left;
        }
        span:nth-of-type(2) {
            float: right;
        }
    }

    .bottom {
        margin-top: 8px;

        width: 100%;
        height: 34px;

        p {
            float: left;

            width: calc(100% - 80px);
            height: 34px;

            span {
                font-size: 14px;
                font-family: "sans";
                line-height: 18px;

                word-break: keep-all;
            }
            span.owner {
                color: #9E40D7;
            }
        }
        button {
            float: right;
        }
    }

    .disable {
        position: absolute;
        z-index: 2;
        top: 0;
        left: 0;

        width: 100%;
        height: 100%;

        background: rgba(0,0,0,0.25);
    }
`