import { useState, useEffect } from 'react';

//Importando APIs
import api from '../../services/api';

//Importação de Componentes
import AllPlayers from '../../components/AllPlayers';

//Importação de Componentes de Estilização
import { SectionBr, ButtonBr, TitleBr, MainBr } from './styles';

export default function Home(){
    
    const [player, setPlayer] = useState([]);

    useEffect(() => {

        async function loadPlayer(){
            const response = await api.get('');

            setPlayer(response.data);
        }
        loadPlayer();

    }, []);

    return(
        <SectionBr>
            <ButtonBr onClick={() => {}}>
                Comece sua convocação
            </ButtonBr>
            <TitleBr>
                OPÇÕES DE ESCOLHA:
            </TitleBr>
            <MainBr>
                <AllPlayers player={player}/>
            </MainBr>
            <ButtonBr onClick={() => {}}>
                Comece sua convocação
            </ButtonBr>
        </SectionBr>
    )
}