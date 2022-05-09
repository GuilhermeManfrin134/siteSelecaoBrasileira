import styled from "styled-components";

export const PlayerBr = styled.div`
    width: 160px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin: 5px 5px 10px 5px;
    cursor: pointer;

    transition: all 0.1s;
    -webkit-transition: all 0.1;
    -moz-transition: all 0.1s;

    @media screen and (min-width: 768px){
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
    }
    @media screen and (max-width: 580px){
        width: 130px;
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
    box-shadow: 1px 1px 5px var(--greenColor);

    img{
        width: 100%;
    }

    @media screen and (max-width: 580px){
        height: 100px;
    }
`;

export const TextPlayerBr = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    text-align: center;
    height: 20px;
    padding: 3px;
    font-size: 14px;
    font-weight: ${props => `${props.bold}`};
    color: ${props => `${props.color}`};

    @media screen and (max-width: 580px){
        font-size: 12px;
    }
`;