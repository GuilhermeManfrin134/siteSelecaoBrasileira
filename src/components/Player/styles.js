import styled from "styled-components";

export const PlayerBr = styled.div`
    width: 160px;
    box-sizing: border-box;
    background-color: var(--yellowColor);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-radius: 10px;
    border: 4px solid var(--greenColor);
    box-shadow: 3px 3px 5px var(--greenColor);
    margin: 5px 5px 20px 5px;
    cursor: pointer;

    transition: all 0.1s;
    -webkit-transition: all 0.1;
    -moz-transition: all 0.1s;
    
    :hover{
        transform: scale(0.9);
        -webkit-transform: scale(0.9);
        -moz-transform: scale(0.9);
    }

    :active{
        transform: scale(0.8);
        -webkit-transform: scale(0.8);
        -moz-transform: scale(0.8);
    }
`;

export const IconBr = styled.div`
    width: 95%;
    height: 130px;
    border: 4px solid var(--greenColor);
    background-color: var(--whiteColor);
    margin-bottom: 5px;
    overflow: hidden;
    border-radius: 50%;

    img{
        width: 100%;
    }
`;

export const TextPlayerBr = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    text-align: center;
    height: 20px;
    padding: 0 0 2px 0;
    font-size: 14px;
    font-weight: ${props => `${props.bold}`};
    color: ${props => `${props.color}`};
`;