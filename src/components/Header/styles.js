import styled from 'styled-components';

export const HeaderBr = styled.header`
    width: 100vw;
    height: 15vh;
    background-color: var(--yellowColor);
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 15px;
    box-sizing: border-box;
`;

export const HeaderDivision = styled.div`
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
    width: 10%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    img{
        height: 100%;
    }

    @media screen and (max-width: 750px){
        img{
            width: 100%;
            height: auto;
        }
    }
`;
export const HeaderTitle = styled.h1`
    width: 80%;
    display: flex;
    justify-content: center;
    color: var(--greenColor);
    font-weight: bold;
    font-size: 30px;

    @media screen and (max-width: 560px){
        font-size: 15px;
    }
`;