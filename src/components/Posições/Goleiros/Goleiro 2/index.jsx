import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

//Importação de Contexts
import { UserContext } from "../../../../contexts/user";

//Importando Componentes de Estilização
import { 
    PlayersArea, PlayerPositionTitle,
    PlayerContainer, PlayerStats, PlayerDados,
    PlayerImg, PlayersPosition
} from '../../styles';

//Importando Icons
import { ImInfo } from 'react-icons/im';
import { CgCloseO } from 'react-icons/cg';

//Importação de Componentes
import ModalJogadores from "../../../ModalJogadores";

export default function Goleiro2(){

    const { goleiro2, setGoleiro2, player, larguraTela, goleirosConvocados } = useContext(UserContext);

    const [select, setSelect] = useState(false);
    const [playerModal, setPlayerModal] = useState('');

    useEffect(() => {
        const g2Storage = localStorage.getItem('goleiro2');
    
        if(g2Storage){
            setGoleiro2(JSON.parse(g2Storage));
        }
        if(g2Storage.length === 2){
            setSelect(false);
        }else{
            setSelect(true);
        }
      }, [setGoleiro2]);
    
      useEffect(() => {
        localStorage.setItem('goleiro2', JSON.stringify(goleiro2));
      }, [goleiro2]);

    const gn = goleirosConvocados.map(item => item.nome);
    const goleiro = player.filter(
                                    filtro => filtro.posicao[0] === "GOL" 
                                    && filtro.nome !== `${gn[0]}`
                                    && filtro.nome !== `${gn[1]}`
                                );

    function verificar(e){

        let gol = document.getElementsByName('goleiro');

        for(let i = 0; i <= gol.length; i++){
            if(gol[i].checked){
                const g = goleiro.filter(g => g.nome === `${gol[i].value}`);
                const id = g.map(item => item.id);
                const nome = g.map(item => item.nome);
                const nome_completo = g.map(item => item.nome_completo);
                const foto = g.map(item => item.foto);
                const altura = g.map(item => item.altura);
                const idade = g.map(item => item.idade);
                const dt_nasc = g.map(item => item.dt_nasc);
                const qtd_jogos = g.map(item => item.qtd_jogos);
                const gols_selecao = g.map(item => item.gols_selecao);
                const assists_selecao = g.map(item => item.assists_selecao);
                const pe = g.map(item => item.pe);
                const clube = g.map(item => item.clube);
                const campeonato = g.map(item => item.campeonato);
                const posicao = g.map(item => item.posicao);
                const g2 = [
                    ...goleiro2.slice(1),
                    {
                        id: id,
                        nome: nome,
                        nome_completo: nome_completo,
                        foto: foto,
                        altura: altura,
                        idade: idade,
                        dt_nasc: dt_nasc,
                        qtd_jogos: qtd_jogos,
                        gols_selecao: gols_selecao,
                        assists_selecao: assists_selecao,
                        pe: pe,
                        clube: clube,
                        campeonato: campeonato,
                        posicao: posicao
                    },
                ];
                setGoleiro2(g2);
                setSelect(true);
            }
        }

    }

    const [modal, setModal] = useState(false)

    function info(){
        setModal(true)
        if(larguraTela > 630){
            infoFinish();
        }
    }
    function infoFinish(){
        setModal(false)
    }
    function selectOther(){
        setSelect(false);
    }

    return(
        <PlayersArea>
            <PlayerPositionTitle>
                    {
                        select ? 
                            `Escolhido como Goleiro:` 
                        :
                            `Escolha o Goleiro`
                    }
            </PlayerPositionTitle>

            <PlayersPosition>
                {
                    select ?
                    goleiro2.map(gol => (
                            <PlayerContainer key={gol.id} value={gol.nome}> 
                                {
                                    modal && <ModalJogadores idj={playerModal} infoFinish={infoFinish}/> 
                                }
                                <input type='radio'
                                    value={gol.nome}
                                    name='goleiro'
                                    onChange={verificar}
                                />
                                <PlayerStats>
                                    <PlayerImg>
                                        <img src={gol.foto} alt={gol.nome}/>
                                    </PlayerImg>
                                    <PlayerDados>
                                        <strong>{gol.nome}</strong>
                                        {gol.clube} {larguraTela > 550 ? ' - ' : <br/>} {gol.campeonato}
                                    </PlayerDados>
                                </PlayerStats>
                                {
                                    larguraTela > 630 ?
                                    <div className="close-info">
                                        <CgCloseO onClick={selectOther} size={40} color={`red`}/>
                                        <Link target="_blank" to={`/jogadores/${gol.id}`}>
                                            <ImInfo size={20} color={'var(--greenColor)'}/>
                                        </Link> 
                                    </div>
                                    :
                                    <div className="close-info" onClick={() => setPlayerModal(`${gol.id}`)}>
                                        <CgCloseO onClick={selectOther} size={40} color={`red`}/>
                                        <ImInfo onClick={info} size={20} color={'var(--greenColor)'}/>
                                    </div>
                                }
    
                            </PlayerContainer>
                        ))
                    :
                    goleiro.map(gol => (
                        <PlayerContainer key={gol.id} value={gol.nome}> 
                            {
                                modal && <ModalJogadores idj={playerModal} infoFinish={infoFinish}/> 
                            }
                            <input type='radio'
                                value={gol.nome}
                                name='goleiro'
                                onChange={verificar}
                            />
                            <PlayerStats>
                                <PlayerImg>
                                    <img src={gol.foto} alt={gol.nome}/>
                                </PlayerImg>
                                <PlayerDados>
                                    <strong>{gol.nome}</strong>
                                    {gol.clube} {larguraTela > 550 ? ' - ' : <br/>} {gol.campeonato}
                                </PlayerDados>
                            </PlayerStats>
                            {
                                larguraTela > 630 ?
                                <Link target="_blank" to={`/jogadores/${gol.id}`}>
                                    <ImInfo size={20} color={'var(--greenColor)'}/>
                                </Link> 
                                :
                                <div onClick={() => setPlayerModal(`${gol.id}`)}>
                                    <ImInfo onClick={info} size={20} color={'var(--greenColor)'}/>
                                </div>
                            }

                        </PlayerContainer>
                    ))
                }
            </PlayersPosition>
        </PlayersArea>
    )
}