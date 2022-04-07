import styled from 'styled-components';

export const GPage = styled.section`
    width: 100%;
`;

export const GTitle = styled.div`
    width: 90%;
    height: 80px;
    margin: auto;
    text-align: center;
    font-size: 30px;
    font-weight: 800;
`;

export const ButtonArea = styled.div`
    width: 90%;
    margin: auto;
    text-align: right;

    @media screen and (max-width: 600px){
        text-align: center;
    }
`;

export const PlayersArea = styled.div`
    box-sizing: border-box;
    width: 95%;
    margin: auto;
    background-color: #f0f0f0;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
`;

export const PlayersPositionRadio = styled.div`
    width: 550px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    @media screen and (max-width: 620px){
        width: 100%;
    }
`;

export const PlayersPosition = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const PlayerPositionTitle = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;

    a{
        box-sizing: border-box;
        width: 70px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--greenColor);
        font-size: 15px;
        font-weight: 800;
    }

    @media screen and (max-width: 400px){
        font-size: 12px;
        font-weight: 800;
        text-align: center;
    }
`;

export const PlayersPositionName = styled.div`
    font-size: 15px;
    display: flex;
    align-items: center;
    input{
        cursor: pointer;
    }
`;

export const PlayerContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    background-color: var(--whiteColor);
    margin-bottom: 5px;
    border-radius: 10px;
    padding: 5px;

    .close-info{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 80%;
        cursor: pointer;
    }

    @media screen and (min-width: 600px){
        .close-info{
            flex-direction: row-reverse;
        }
    }

    a{
        display: flex;
        align-items: center;
    }

    a svg, svg{
        margin-right: 15px;
        cursor: pointer;
    }

    input{
        width: 20px;
        height: 20px;
        margin: 15px;
        cursor: pointer;
    }
`;

export const PlayerStats = styled.div`
    display: flex;
    width: 100%;
`;

export const PlayerDados = styled.div`
    box-sizing: border-box;
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 5px;
    padding-left: 15px;

    @media screen and (max-width: 400px){
        font-size: 12px;
    }
`;

export const PlayerImg = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
    border: 3px solid var(--greenColor);
    
    img{
        width: 100%;
    }

    @media screen and (max-width: 400px){
        width: 40px;
        height: 40px;
    }
`;