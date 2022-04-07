//Importação de Componentes de Estilização
import { DescriptionSite, Psite, ButtonInit } from './styles';

//Importando Icones
import { MdOutlineSportsSoccer } from 'react-icons/md';

export default function Convocação(){

    return(
        <DescriptionSite>
            <strong>Entenda como funciona</strong>
            <Psite>
                Ao iniciar a convocação, serão colocados em sequência as opções de escolha de:
            </Psite>
            <Psite>
                <li><MdOutlineSportsSoccer /> 3 Goleiros;</li>
                <li><MdOutlineSportsSoccer /> 8 Defensores;</li>
                <li><MdOutlineSportsSoccer /> 7 Meios de Campo;</li>
                <li><MdOutlineSportsSoccer /> 8 Atacantes.</li>
            </Psite>
            <Psite>
                Totalizando 26 jogadores.
            </Psite>
            <strong>Lembrete:</strong>
            <Psite>
                Existem jogadores que exercem mais de uma função, então, é possível levar, por exemplo, o jogador Lucas Paquetá, tanto em posição de meio de campo, quanto em posição de ataque, caso ache a quantidade de vagas de uma das posições insuficiente.
            </Psite>
            <div className="alignRight">
                <ButtonInit onClick={() => {}}>
                    Iniciar
                </ButtonInit>
            </div>
        </DescriptionSite>
    )
}