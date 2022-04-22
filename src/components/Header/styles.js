import styled from 'styled-components';

export const HeaderBr = styled.header`
    box-sizing: border-box;
    width: 100%;
    height: 15vh;
    background-color: var(--yellowColor);
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 15px;

    @media screen and (max-width: 560px){
        height: 12vh;
    }
`;

export const HeaderDivision = styled.div`
    box-sizing: border-box;
    width: 95%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    img{
        height: 100%;
    }
`;

export const HeaderIcon = styled.div`
    box-sizing: border-box;
    width: 10%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    a{
        height: 100%;

        img{
            height: 100%;
        }
    }

    @media screen and (max-width: 800px){
        a{
            width: 100%;
            height: auto;
            img{
                width: 100%;
                height: auto;
            }
        }
    }
`;
export const HeaderTitle = styled.h1`
    width: 70%;
    display: flex;
    justify-content: center;
    font-weight: 1000;
    font-size: 30px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    
    a{
        color: var(--greenColor);
    }

    @media screen and (max-width: 560px){
        font-size: 15px;
    }
`;