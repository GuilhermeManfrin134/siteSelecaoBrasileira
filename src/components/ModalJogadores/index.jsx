import { useContext } from 'react';

//Importação Componentes de Estilização
import { ModalPlayers } from './styles';
import { 
    JogadorBr, JogadorBrUp, JogadorImg, BrDados, BrClube,
    JogadorBrDesc, JogadorBrName, JogadorBrDados, JogadorBrAtua,
    JogadorBrDown, JogadorBrCarreira, JogadorBrCarreiraDados,
    JogadorBrPosicoes
} from '../../pages/Jogador/styles';

//Importando Icons
import { IoIosCloseCircle } from 'react-icons/io';

//Importando Contexts
import { UserContext } from '../../contexts/user';

export default function ModalJogadores({idj, infoFinish}){

    const { player } = useContext(UserContext);

    const jogadorFiltrado = player.filter(item => item.id === `${idj}`);

    return(
        <ModalPlayers>
            <IoIosCloseCircle onClick={infoFinish} size={50} color={`red`}/>
            <JogadorBr>
            {
                jogadorFiltrado.map(jogador => (
                    <div key={jogador.id}>
                        <JogadorBrUp>
                            <JogadorImg>
                                <img src={jogador.foto} alt={jogador.nome} />
                            </JogadorImg>
                            <JogadorBrDesc>
                                <JogadorBrName>
                                    {jogador.nome}
                                </JogadorBrName>
                                <JogadorBrDados>
                                    <h2>Dados</h2>
                                    <BrDados>
                                        <strong>Nome completo:</strong> {jogador.nome_completo}
                                    </BrDados>
                                    <BrDados>
                                        <strong>Idade:</strong> {jogador.idade} anos
                                    </BrDados>
                                    <BrDados>
                                        <strong>Data de Nascimento:</strong> {jogador.dt_nasc}
                                    </BrDados>
                                    <BrDados>
                                        <strong>Altura:</strong> {jogador.altura}
                                    </BrDados>
                                    <BrDados>
                                        <strong>Pé:</strong> {jogador.pe}
                                    </BrDados>
                                </JogadorBrDados>
                            </JogadorBrDesc>
                        </JogadorBrUp>


                        <JogadorBrDown>
                            <JogadorBrCarreira>
                                <h3>Carreira</h3>
                                <JogadorBrCarreiraDados>
                                    <BrClube>
                                        <strong>Clube atual:</strong> {jogador.clube}
                                    </BrClube>
                                    <BrClube>
                                        <strong>Campeonato disputado:</strong> {jogador.campeonato}
                                    </BrClube>
                                    <BrClube>
                                        <strong>Jogos pela seleção:</strong> {jogador.qtd_jogos}
                                    </BrClube>
                                    <BrClube>
                                        <strong>Gols pela seleção:</strong> {jogador.gols_selecao}
                                    </BrClube>
                                    <BrClube>
                                        <strong>Assistências pela seleção:</strong> {jogador.assists_selecao}
                                    </BrClube>
                                </JogadorBrCarreiraDados>
                            </JogadorBrCarreira>

                            <JogadorBrAtua>
                                <h3>Atua como:</h3>
                                <JogadorBrPosicoes>
                                    {jogador.posicao.map((posicao, index) => (
                                        <strong key={index}>{posicao}</strong>
                                    ))}
                                </JogadorBrPosicoes>
                            </JogadorBrAtua>
                        </JogadorBrDown>
                    </div>
                ))
            }
            </JogadorBr>
        </ModalPlayers>
    )
}