import { useNavigate } from 'react-router-dom';

//Importação de Componentes
import Goleiro1 from '../../components/Posições/Goleiros/Goleiro 1';
import Goleiro2 from '../../components/Posições/Goleiros/Goleiro 2';
import Goleiro3 from '../../components/Posições/Goleiros/Goleiro 3';

//Importação de Componentes de Estilização
import { GPage, GTitle, ButtonArea } from '../../components/Posições/styles';
import { ButtonInit } from '../../pages/Convocação/styles';

export default function Goleiro(){

    let navigate = useNavigate();

    function next(){
        return navigate('/convocacao_defensores')
    }

    return(
        <GPage>
            <GTitle>GOLEIROS</GTitle>
            <Goleiro1 />
            <Goleiro2 />
            <Goleiro3 />
            <ButtonArea>
                <ButtonInit onClick={next}>
                    Próximo
                </ButtonInit>
            </ButtonArea>
        </GPage>
    )
}