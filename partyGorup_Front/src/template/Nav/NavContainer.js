import styled from "@emotion/styled";

export const NavContainer = styled.div`
    position: fixed;
    z-index: 10;

    left: 0;
    bottom: 0;

    width: 100%;
    height: 54px;

    background: #ffffff;
    border-radius: 24px 24px 0 0;
    box-shadow: 0 -4px 8px rgba(0,0,0,0.25);

    #main {
        position: relative;
        margin: 0 auto;

        width: 284px;
        height: 54px;
        
        display: flex;
        justify-content: space-between;

        .bar {
            position: absolute;
            bottom: 4px;
            left: ${(prop) => (18 + 106 * prop.page)}px;

            width: 36px;
            height: 4px;

            background: #501E6F;
            border-radius: 2px;

            transition: left 500ms;
        }

        a {
            margin: 0;
            padding: 0;

            width: 72px;
            height: 54px;

            background: none;
            border: none;
            -webkit-tap-highlight-color: rgba(0,0,0,0.25);

            transition: background 500ms;

            img {
                display: block;

                margin: 8px 18px;

                width: 36px;
                height: 36px;
            }
        }
    }
`