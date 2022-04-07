import { useNavigate } from 'react-router-dom';

//Importação de Componentes
import Defensor1 from '../../components/Posições/Defensores/Defensor 1';
import Defensor2 from '../../components/Posições/Defensores/Defensor 2';
import Defensor3 from '../../components/Posições/Defensores/Defensor 3';
import Defensor4 from '../../components/Posições/Defensores/Defensor 4';
import Defensor5 from '../../components/Posições/Defensores/Defensor 5';
import Defensor6 from '../../components/Posições/Defensores/Defensor 6';
import Defensor7 from '../../components/Posições/Defensores/Defensor 7';
import Defensor8 from '../../components/Posições/Defensores/Defensor 8';

//Importação de Componentes de Estilização
import { GPage, GTitle, ButtonArea } from '../../components/Posições/styles';
import { ButtonInit } from '../../pages/Convocação/styles';

export default function Goleiro(){

    let navigate = useNavigate();

    function next(){
        return navigate('/convocacao_meias')
    }

    return(
        <GPage>
            <GTitle>DEFENSORES</GTitle>
            <Defensor1/>
            <Defensor2/>
            <Defensor3/>
            <Defensor4/>
            <Defensor5/>
            <Defensor6/>
            <Defensor7/>
            <Defensor8/>
            <ButtonArea>
                <ButtonInit onClick={next}>
                    Próximo
                </ButtonInit>
            </ButtonArea>
        </GPage>
    )
}