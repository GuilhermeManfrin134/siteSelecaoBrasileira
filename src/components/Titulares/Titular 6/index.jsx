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

export default function Titular6({ posição, title }){

    const { 
        larguraTela, defensoresConvocados, meiasConvocados, atacantesConvocados, titular6, setTitular6, player
    } = useContext(UserContext);
    
    const [select, setSelect] = useState(false);
    const [playerModal, setPlayerModal] = useState('');

    const componentMounted = useRef(true);
    
    useEffect(async () => {
        if(componentMounted.current){
            const t6Storage = localStorage.getItem('titular6');
        
            if(t6Storage){
                setTitular6(JSON.parse(t6Storage));
            }
            if(t6Storage.length === 2){
                setSelect(false);
            }else{
                setSelect(true);
            }
        }
        return () => {
            componentMounted.current = false;
        }

      }, [setTitular6]);
    
      useEffect(() => {
        localStorage.setItem('titular6', JSON.stringify(titular6));
      }, [titular6]);

    function verificar(e){

        let def = document.getElementsByName('defensor');
        
        for(let i = 0; i <= def.length; i++){
            if(def[i].checked){
                const g = player.filter(g => g.nome === `${def[i].value}`);
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
                const t6 = [
                    ...titular6.slice(1),
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
                setTitular6(t6);
                setSelect(true);
            }
        }

    }


    const defesa = player.filter(
        filtro => 
        filtro.posicao[0] === `${posição}`  ||
        filtro.posicao[1] === `${posição}`  || 
        filtro.posicao[2] === `${posição}`  || 
        filtro.posicao[3] === `${posição}`  || 
        filtro.posicao[4] === `${posição}`  || 
        filtro.posicao[5] === `${posição}`  || 
        filtro.posicao[6] === `${posição}` 
    );

    const def = defesa.filter(item => 
        item.nome === `${defensoresConvocados[0].nome[0]}` ||
        item.nome === `${defensoresConvocados[1].nome[0]}` ||
        item.nome === `${defensoresConvocados[2].nome[0]}` ||
        item.nome === `${defensoresConvocados[3].nome[0]}` ||
        item.nome === `${defensoresConvocados[4].nome[0]}` ||
        item.nome === `${defensoresConvocados[5].nome[0]}` ||
        item.nome === `${defensoresConvocados[6].nome[0]}` ||
        item.nome === `${defensoresConvocados[7].nome[0]}` ||
        item.nome === `${meiasConvocados[0].nome[0]}` ||
        item.nome === `${meiasConvocados[1].nome[0]}` ||
        item.nome === `${meiasConvocados[2].nome[0]}` ||
        item.nome === `${meiasConvocados[3].nome[0]}` ||
        item.nome === `${meiasConvocados[4].nome[0]}` ||
        item.nome === `${meiasConvocados[5].nome[0]}` ||
        item.nome === `${meiasConvocados[6].nome[0]}` ||
        item.nome === `${atacantesConvocados[0].nome[0]}` ||
        item.nome === `${atacantesConvocados[1].nome[0]}` ||
        item.nome === `${atacantesConvocados[2].nome[0]}` ||
        item.nome === `${atacantesConvocados[3].nome[0]}` ||
        item.nome === `${atacantesConvocados[4].nome[0]}` ||
        item.nome === `${atacantesConvocados[5].nome[0]}` ||
        item.nome === `${atacantesConvocados[6].nome[0]}` ||
        item.nome === `${atacantesConvocados[7].nome[0]}` 
    )

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
                    { title }
                </PlayerPositionTitle>
                {
                    select ?
                    titular6.map(gol => (
                        <PlayerContainer key={gol.id} value={gol.nome}>
                            {
                                modal && <ModalJogadores idj={playerModal} infoFinish={infoFinish}/> 
                            }
                            <input type='radio'
                                value={gol.nome}
                                name='defensor'
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
                    def.map(gol => (
                        <PlayerContainer key={gol.id} value={gol.nome}>
                            {
                                modal && <ModalJogadores idj={playerModal} infoFinish={infoFinish}/> 
                            }
                            <input type='radio'
                                value={gol.nome}
                                name='defensor'
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