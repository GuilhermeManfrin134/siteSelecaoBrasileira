import styled from "styled-components";

export const ButtonBrDisabled = styled.button`
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
    opacity: 0.5;
    cursor: not-allowed;

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
`;

export const Alert = styled.div`
    box-sizing: border-box;
    width: 200px;
    height: 100px;
    padding: 15px;
    border-radius: 4px;
    background-color: var(--whiteColor);
    border: 2px solid var(--greenColor);
    font-weight: 700;
    text-align: justify;
    opacity: 1;
    position: fixed;
    top: 70%;
    left: 15%;

    :active{
        transition: all 5s;
        -webkit-transition: all 1s;
        -moz-transition: all 1s;
    }

    @media screen and (max-width: 400px){
        width: 150px;
        height: 80px;
        font-size: 10px;
    }
`;