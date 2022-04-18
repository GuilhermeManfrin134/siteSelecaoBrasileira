import styled from "styled-components";

export const SectionBr = styled.section`
    width: 95%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    .home-buttons{
        width: 100%;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
`;

export const ButtonBr = styled.button`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 250px;
    height: 60px;
    margin: 15px 0 15px;
    padding: 20px;
    border-radius: 20px;
    border: 2px solid var(--greenColor);
    background-color: var(--greenColor);
    color: var(--whiteColor);
    font-size: 15px;
    font-weight: 1000;
    cursor: pointer;

    svg{
        margin-right: 10px;
    }
    
    @media screen and (max-width: 620px){
        width: 150px;
        font-size: 10px;
    }

    transition: ease-in-out .1s;
    -webkit-transition: ease-in-out .1s;
    -moz-transition: ease-in-out .1s;

    :active{
        transform: scale(0.9);
        -webkit-transform: scale(0.9);
        -moz-transform: scale(0.9);
        background-color: var(--yellowColor);
        color: var(--greenColor);
    }
`;

export const MainBr = styled.main`
    margin-top: 25px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

export const TitleBr = styled.h1`
    text-align: center;
`;