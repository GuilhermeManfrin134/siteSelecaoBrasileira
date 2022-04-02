import { useState, useEffect } from 'react';

//Importando APIs
import api from '../../services/api';

//Importação de Componentes
import AllPlayers from '../../components/AllPlayers';
import Loading from '../../components/Loading';

//Importação de Componentes de Estilização
import { SectionBr, ButtonBr, TitleBr, MainBr } from './styles';

export default function Home(){
    
    const [player, setPlayer] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function loadPlayer(){
            const response = await api.get('');

            setPlayer(response.data);
            setLoading(false)
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
                {
                    loading ? <Loading/> : <AllPlayers player={player}/> 
                }
            </MainBr>
            <ButtonBr onClick={() => {}}>
                Comece sua convocação
            </ButtonBr>
        </SectionBr>
    )
}