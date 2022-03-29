import styled from "styled-components";

export const SectionBr = styled.section`
    width: 95%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ButtonBr = styled.button`
    width: 450px;
    height: 100px;
    margin: 15px 0 15px;
    border-radius: 20px;
    border: 2px solid var(--greenColor);
    background-color: var(--greenColor);
    color: var(--whiteColor);
    font-size: 25px;
    font-weight: 1000;
    cursor: pointer;

    @media screen and (max-width: 520px){
        width: 80%;
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