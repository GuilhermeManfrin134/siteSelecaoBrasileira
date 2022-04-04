import styled from "styled-components";

export const JogadorBr = styled.div`
    width: 95%;
    box-sizing: border-box;
    margin: auto;
    padding: 20px;
    border-radius: 10px;
    background-color: #f0f0f0;
`;

export const JogadorBrUp = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (min-width: 1000px){
        display: flex;
        justify-content: space-around;
    }

    @media screen and (max-width: 630px){
        flex-direction: column;
    }
`;
export const JogadorImg = styled.div`
    height: 200px;
    width: 200px;
    border-radius: 50%;
    overflow: hidden;
    border: 5px solid var(--greenColor);
    box-shadow: 1px 1px 5px var(--greenColor);

    @media screen and (max-width: 630px){
        flex-direction: column;
        margin: auto;
    }

    img{
        width: 100%;
        height: auto;
    }
`;

export const JogadorBrDesc = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 70%;

    @media screen and (min-width: 1000px){
        width: 40%;
    }

    @media screen and (max-width: 900px){
        align-items: center;
    }

    @media screen and (max-width: 630px){
        width: 100%;
        align-items: flex-start;
        margin-top: 20px;
    }
`;

export const JogadorBrName = styled.div`
    display: flex;
    color: var(--greenColor);
    font-size: 20px;
    font-weight: 800;
    margin-bottom: 15px;
    margin-left: 120px;

    @media screen and (max-width: 900px){
        margin-left: 0;
    }

    @media screen and (max-width: 630px){
        margin: auto;
    }
`;

export const JogadorBrDados = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 12px;
`;

export const BrDados = styled.div`
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 5px;
`;

export const JogadorBrDown = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 15px;

    @media screen and (max-width: 900px){
        flex-direction: column;
    }
`;

export const JogadorBrCarreira = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 630px){
        width: 100%;
        align-items: flex-start;
        margin-top: 5px;
    }

    h3{
        color: var(--greenColor);
        font-weight: 700;
    }
`;

export const JogadorBrCarreiraDados = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 630px){
        width: 100%;
        align-items: flex-start;
    }
`;

export const BrClube = styled.div`
    margin-bottom: 5px;

    @media screen and (max-width: 630px){
        margin-bottom: 20px;
    }
`;

export const JogadorBrAtua = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-weight: 900;

    @media screen and (max-width: 630px){
        width: 100%;
        align-items: flex-start;
    }

    h3{
        color: var(--greenColor);
        font-weight: 700;
    }
`;

export const JogadorBrPosicoes = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    @media screen and (max-width: 900px){
        flex-direction: row;
        justify-content: flex-start;

        strong{
            margin-right: 25px;
        }
    }
`;