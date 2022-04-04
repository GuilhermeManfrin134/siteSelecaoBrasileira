import { useContext } from 'react';

//Importação de Componentes
import AllPlayers from '../../components/AllPlayers';
import Loading from '../../components/Loading';

//Importação de Componentes de Estilização
import { SectionBr, ButtonBr, TitleBr, MainBr } from './styles';

//Imprtando Contexts
import { UserContext } from '../../contexts/user';

export default function Home(){
    
    const { loading} = useContext(UserContext);

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
                    loading ? <Loading/> : <AllPlayers/> 
                }
            </MainBr>
            <ButtonBr onClick={() => {}}>
                Comece sua convocação
            </ButtonBr>
        </SectionBr>
    )
}