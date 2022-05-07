//Importando Icon Padrão
import IconDefault from '../../assets/avatar.png'

//Importando Componentes de Estilização
import { PlayerBr, IconBr, TextPlayerBr } from './styles';

export default function Player({ nome, clube, foto }){
    return(
        <PlayerBr>
            <TextPlayerBr color={`var(--blueColor)`} bold={800}>{nome}</TextPlayerBr>
            <IconBr>
                <img src={foto ? foto : IconDefault} alt={nome} />
            </IconBr>
            <TextPlayerBr bold={700}>{clube}</TextPlayerBr>
        </PlayerBr>
    )
}