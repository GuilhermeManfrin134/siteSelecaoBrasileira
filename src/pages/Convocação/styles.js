import styled from "styled-components";

export const DescriptionSite = styled.section`
    width: 95%;
    box-sizing: border-box;
    border-radius: 10px;
    border: 2px solid var(--greenColor);
    margin: 20px auto;
    padding: 20px 40px;
    background-color: #f0f0f0;
    box-shadow: 1px 1px 5px var(--greenColor);
    font-size: 18px;

    strong{
        font-size: 20px;
    }

    li{
        list-style: none;
    }

    .alignCenter{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .alignRight{
       text-align: right;
    }

    @media screen and (max-width: 600px){
        font-size: 14px;

        strong{
            font-size: 16px;
        }

        .alignRight{
            text-align: center;
        }
    }

`;

export const Psite = styled.p`
    text-align: justify;
`;

export const ButtonInit = styled.button`
    width: 30%;
    height: 60px;
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
        font-size: 15px;
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