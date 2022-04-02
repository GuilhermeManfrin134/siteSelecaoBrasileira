//Importação de Componentes de Estilização
import { LoadingPage, LoadingIcon, LoadingText } from './styles';

//Importação de Icons
import { MdOutlineSportsSoccer } from 'react-icons/md';

export default function Loading(){
    return(
        <LoadingPage>
            <LoadingText>
                <LoadingIcon>
                    <MdOutlineSportsSoccer color='var(--greenColor)' size={50}/>
                    <MdOutlineSportsSoccer color='var(--greenColor)' size={50}/>
                    <MdOutlineSportsSoccer color='var(--greenColor)' size={50}/>
                </LoadingIcon>
            </LoadingText>
        </LoadingPage>
    )
}