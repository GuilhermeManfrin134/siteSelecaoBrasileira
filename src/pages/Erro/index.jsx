//Importação de Componentes de Estilização
import { ErroBr, TextError } from './styles';

//Importação de Icons
import { GiSoccerKick } from 'react-icons/gi';
import { Link } from 'react-router-dom';

export default function Erro(){
    return(
        <ErroBr>
            <TextError>
                OPS!! A página procurada não existe...
                <GiSoccerKick color={'var(--greenColor)'} size={40}/>
            </TextError>
            <TextError>
                <Link to='/'>Gostaria de voltar a página inicial?</Link> 
            </TextError>
        </ErroBr>
    )
}