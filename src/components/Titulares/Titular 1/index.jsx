import { useContext, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

//Importando Icons
import { CgCloseO } from "react-icons/cg";
import { ImInfo } from "react-icons/im";

//Importando Contexts
import { UserContext } from "../../../contexts/user";
import ModalJogadores from "../../ModalJogadores";

//Importação de Componentes de Estilização
import { 
    PlayerContainer,
        PlayerDados,
        PlayerImg,
        PlayerPositionTitle, PlayersArea, PlayersPosition, PlayerStats 
    } from "../../Posições/styles";

export default function Titular1(){

    const { larguraTela, goleirosConvocados, titular1, setTitular1, player } = useContext(UserContext);

    const [select, setSelect] = useState(false);
    const [playerModal, setPlayerModal] = useState('');

    const componentMounted = useRef(true);
    
    useEffect(async () => {
        if(componentMounted.current){
            const t1Storage = localStorage.getItem('titular1');
        
            if(t1Storage){
                setTitular1(JSON.parse(t1Storage));
            }
            if(t1Storage.length === 2){
                setSelect(false);
            }else{
                setSelect(true);
            }
        }
        return () => {
            componentMounted.current = false;
        }

      }, [setTitular1]);
    
      useEffect(() => {
        localStorage.setItem('titular1', JSON.stringify(titular1));
      }, [titular1]);

    function verificar(e){

        let gol = document.getElementsByName('goleiro');
        
        for(let i = 0; i <= gol.length; i++){
            if(gol[i].checked){
                const g = player.filter(g => g.nome === `${gol[i].value}`);
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
                const t1 = [
                    ...titular1.slice(1),
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
                setTitular1(t1);
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
            <PlayersPosition>
                <PlayerPositionTitle>
                    Goleiro
                </PlayerPositionTitle>
                {
                    select ?
                    titular1.map(gol => (
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
                    goleirosConvocados.map(gol => (
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
                                    <Link target="_blank" to={`/jogadores/${gol.id}`}>
                                        <ImInfo size={20} color={'var(--greenColor)'}/>
                                    </Link> 
                                </div>
                                :
                                <div className="close-info" onClick={() => setPlayerModal(`${gol.id}`)}>
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