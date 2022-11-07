import styled from "styled-components";

export const ButtonsArea = styled.div`
    box-sizing: border-box;
    width: 95%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;

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

export const DeleteTeam = styled.button`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 250px;
    height: 60px;
    margin: 15px 0 15px;
    padding: 20px;
    border-radius: 20px;
    border: 2px solid var(--blueColor);
    background-color: #FFF;
    font-size: 15px;
    font-weight: 1000;
    color: var(--blueColor);
    cursor: pointer;
    
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

    :active{
        transform: scale(0.9);
        -webkit-transform: scale(0.9);
        -moz-transform: scale(0.9);
    }
`;

export const DeleteContainer = styled.div`
    box-sizing: border-box;
    width: 80%;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 30%;
    left: 10%;
    z-index: 1;
`;

export const ConfirmDelete = styled.div`
    width: 400px;
    padding: 20px;
    border: 3px solid var(--blueColor);
    background-color: #FFF;
    border-radius: 10px;

    @media screen and (max-width: 680px){
        width: 100%;
    }

    .question{
        text-align: center;
        font-size: 20px;
        font-weight: 500;
        margin-bottom: 30px;

        @media screen and (max-width: 620px){
            font-size: 15px;
        }
    }
    .buttons{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .exit{
        text-align: right;
        margin-bottom: 30px;

        svg{
            cursor: pointer;
        }
    }
`;

export const ImagemJog = styled.div`
    width: 700px;
    background: var(--yellowColor);
    padding: 10px;
    padding-left: 20px;
    border: 3px solid var(--blueColor);

    .alinha{
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    

    h2{
        color: var(--blueColor);
        text-align: center;
        font-weight: 900;
    }
    h3{
        color: var(--greenColor);

        strong{
            color: var(--blueColor);
            font-style: italic;
        }
    }
    h4{
        color: var(--greenColor);
        text-align: end;

        strong{
            color: var(--blueColor);
            font-style: italic;
        }
    }
`;

export const ImagemFoto = styled.div`
    width: 100%;
    display: flex;
    text-align: center;
    justify-content: space-between;
    .imgmargin{
        display: flex;
        flex-direction: column;
        align-items: center;

        h5{
            margin-top: 10px;
        }
    }
`;
export const ImagemFotoGol = styled.div`
    width: 40%;
    display: flex;
    text-align: center;
    justify-content: space-between;
    .imgmargin{
        display: flex;
        flex-direction: column;
        align-items: center;

        h5{
            margin-top: 10px;
        }
    }
`;