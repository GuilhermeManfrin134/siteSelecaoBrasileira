import { useNavigate } from 'react-router-dom';

//Importação de Componentes
import Atacante1 from '../../components/Posições/Atacantes/Atacante 1';
import Atacante2 from '../../components/Posições/Atacantes/Atacante 2';
import Atacante3 from '../../components/Posições/Atacantes/Atacante 3';
import Atacante4 from '../../components/Posições/Atacantes/Atacante 4';
import Atacante5 from '../../components/Posições/Atacantes/Atacante 5';
import Atacante6 from '../../components/Posições/Atacantes/Atacante 6';
import Atacante7 from '../../components/Posições/Atacantes/Atacante 7';
import Atacante8 from '../../components/Posições/Atacantes/Atacante 8';

//Importação de Componentes de Estilização
import { GPage, GTitle, ButtonArea } from '../../components/Posições/styles';
import { ButtonInit } from '../../pages/Convocação/styles';

export default function Goleiro(){

    let navigate = useNavigate();

    function next(){
        return navigate('/selecao');
    }

    return(
        <GPage>
            <GTitle>ATACANTES</GTitle>
            <Atacante1/>
            <Atacante2/>
            <Atacante3/>
            <Atacante4/>
            <Atacante5/>
            <Atacante6/>
            <Atacante7/>
            <Atacante8/>
            <ButtonArea>
                <ButtonInit onClick={next}>
                    Próximo
                </ButtonInit>
            </ButtonArea>
        </GPage>
    )
}