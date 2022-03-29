import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

//Importando APIs
import api from "../../services/api";

//Importando Páginas
import Erro from "../Erro";

//Importando de Componentes de Estilização
import { 
            JogadorBr, JogadorBrUp, JogadorImg, BrDados, BrClube,
            JogadorBrDesc, JogadorBrName, JogadorBrDados, JogadorBrAtua,
            JogadorBrDown, JogadorBrCarreira, JogadorBrCarreiraDados,
            JogadorBrPosicoes
        } from './styles';

//Importando Foto Padrão
import foto from '../../assets/avatar.png';

export default function Jogador(){

    const { id } = useParams();
    const [jogador, setJogador] = useState([]);

    useEffect(()=>{

        async function loadJogador(){
            const response = await api.get('');

            setJogador(response.data)
        }
        loadJogador();

    }, []);

    const jogadorFiltrado = jogador.filter(item => item.id === `${id}`);

    if(jogadorFiltrado.length === 0){
        return(
            <Erro />
        )
    }

    return(
        <JogadorBr>
            {
                jogadorFiltrado.map((jogador, index) => (
                    <div key={jogador.id}>
                        <JogadorBrUp>
                            <JogadorImg>
                                <img src={jogador.foto ? jogador.foto : foto} alt={jogador.nome} />
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
    )
}