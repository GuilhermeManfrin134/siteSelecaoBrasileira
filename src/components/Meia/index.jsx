import { useNavigate } from 'react-router-dom';

//Importação de Componentes
import Meia1 from '../../components/Posições/Meias/Meia 1';
import Meia2 from '../../components/Posições/Meias/Meia 2';
import Meia3 from '../../components/Posições/Meias/Meia 3';
import Meia4 from '../../components/Posições/Meias/Meia 4';
import Meia5 from '../../components/Posições/Meias/Meia 5';
import Meia6 from '../../components/Posições/Meias/Meia 6';
import Meia7 from '../../components/Posições/Meias/Meia 7';

//Importação de Componentes de Estilização
import { GPage, GTitle, ButtonArea } from '../../components/Posições/styles';
import { ButtonInit } from '../../pages/Convocação/styles';

export default function Goleiro(){

    let navigate = useNavigate();

    function next(){
        return navigate('/convocacao_atacantes')
    }

    return(
        <GPage>
            <GTitle>MEIOS DE CAMPO</GTitle>
            <Meia1/>
            <Meia2/>
            <Meia3/>
            <Meia4/>
            <Meia5/>
            <Meia6/>
            <Meia7/>
            <ButtonArea>
                <ButtonInit onClick={next}>
                    Próximo
                </ButtonInit>
            </ButtonArea>
        </GPage>
    )
}