import styled from "styled-components";

export const AllPlayersBr = styled.div`
    width: 95%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: #F0F0F0;
    border-radius: 10px;
    border: 2px solid var(--greenColor);
    box-shadow: 1px 1px 5px var(--greenColor);

    a{
        color: #000;
    }

    @media screen and (max-width: 580px){
        width: 100%;
        border: none;
        box-shadow: none;
        background-color: #FFF;
    }
`;