import styled from "styled-components";

export const AreaEscalacao = styled.div`
    box-sizing: border-box;
    margin: 10px auto;
    width: 100%;
    display: flex;
    justify-content: space-around;

    @media screen and (max-width: 920px){
        flex-direction: column;
    }
`;

export const ListEscalacao = styled.div`
    width: 60%;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: #f0f0f0;
    border-radius: 10px;

    @media screen and (max-width: 920px){
        width: 95%;
        border-radius: 10px;
        margin: auto;
    }
    `;

export const TitularList = styled.div`
    margin: auto;
    width: 95%;
    height: 50px;
    display: flex;
    align-items: center;
    background-color: var(--whiteColor);
    border-radius: 5px;
    margin-bottom: 5px;
    
    input{
        width: 35px;
        height: 35px;
        font-size: 18px;
        margin-right: 10px;
        margin-left: 10px;
        text-align: center;
    }
    `;

export const TitularIcon = styled.div`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    overflow: hidden;
    border: 3px solid var(--greenColor);
    
    img{
        width: 100%;
    }
`;

export const TitularDados = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    `;
export const TitularStats = styled.div`
    margin-left: 5px;
    font-weight: 600;
    font-size: 15px;
    
    @media screen and (max-width: 580px){
        font-size: 12px;
    }
    
    @media screen and (max-width: 340px){
        :last-child{
            display: none;
        }
}
`;

export const Campo = styled.div`
    box-sizing: border-box;
    width: 320px;
    height: 450px;
    background: ${(props) => `url(${props.foto})`};
    background-repeat: no-repeat;
    background-size: contain;
    border-radius: 4px;
    
    @media screen and (max-width: 920px){
        width: 400px;
        height: 550px;
        margin: 15px auto;
    }
    
    @media screen and (max-width: 450px){
        width: 100%;
        margin: 15px auto;
        height: 550px;
        background: linear-gradient(green, var(--greenColor));
    }
`;
export const AreaCampo = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: space-around;
    
    .align{
        margin-right: 220px;
    }
`;
export const AreaJog = styled.div`
    width: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    strong{
        color: #000;
        font-size: 13px;
        text-align: center;
        font-weight: 800;
        background-color: var(--whiteColor);
        padding: 1px 2px;
        border-radius: 2px;
        margin-top: 2px;
    }
    @media screen and (min-width: 920px){
        strong{
            font-size: 10px;
        }
    }
    @media screen and (max-width: 450px){
        strong{
            font-size: 8px;
        }
    }
`;

export const JogIcon = styled.div`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    overflow: hidden;
    border: 3px solid var(--blueColor);
    
    img{
        width: 100%;
    }
`;

