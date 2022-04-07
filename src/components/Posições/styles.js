import styled from 'styled-components';

export const PlayersArea = styled.div`
    box-sizing: border-box;
    width: 95%;
    margin: auto;
    background-color: #f0f0f0;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
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
    margin-bottom: 10px;
`;

export const PlayerPositionTitle = styled.div`
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;

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
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    background-color: var(--whiteColor);
    margin-bottom: 5px;
    border-radius: 10px;

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

    svg{
        margin-right: 5px;
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
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 5px;
    padding-left: 15px;
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
`;