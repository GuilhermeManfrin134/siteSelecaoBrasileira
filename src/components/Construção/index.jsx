//Importação de Componentes de Estilização
import { ErroBr, TextError } from '../../pages/Erro/styles';

import { Link } from 'react-router-dom';

//Importação de Icons
import { IoConstruct } from 'react-icons/io5';

export default function Construção(){
    return(
        <ErroBr>
            <TextError>
                <IoConstruct color={'var(--greenColor)'} size={70}/>
            </TextError>
            <TextError>
                Esta página ainda está em construção...
            </TextError>
            <TextError>
                <Link to='/'>Gostaria de voltar a página inicial?</Link> 
            </TextError>
        </ErroBr>
    )
}