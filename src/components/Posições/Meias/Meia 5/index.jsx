import { useContext, useState } from "react";
import { Link } from "react-router-dom";

//Importação de Contexts
import { UserContext } from "../../../../contexts/user";

//Importando Componentes de Estilização
import { 
        PlayersArea, PlayersPositionRadio, 
        PlayersPositionName, PlayerPositionTitle,
        PlayerContainer, PlayerStats, PlayerDados,
        PlayerImg, PlayersPosition
} from '../../styles';

//Importando Icons
import { ImInfo } from 'react-icons/im';
import { CgCloseO } from 'react-icons/cg';

//Importação de Componentes
import ModalJogadores from "../../../ModalJogadores";

export default function Meia5(){

    const { larguraTela, player, meia5, setMeia5, TextoMeias } = useContext(UserContext);

    const [select, setSelect] = useState(false);
    const [playerModal, setPlayerModal] = useState('');

    const [textMeia, setTextMeia] = useState('jogador');

    const meia = player.filter(
        filtro => 
        filtro.posicao[0] === `${textMeia}` || 
        filtro.posicao[1] === `${textMeia}` ||
        filtro.posicao[2] === `${textMeia}` ||
        filtro.posicao[3] === `${textMeia}` ||
        filtro.posicao[4] === `${textMeia}` ||
        filtro.posicao[5] === `${textMeia}` ||
        filtro.posicao[6] === `${textMeia}`
    );

    function filtrar(){
        let textMeia = document.querySelector('input[name=meia]:checked').value;
        setTextMeia(textMeia);
    }

    function verificar(e){

        let mei = document.getElementsByName('meia');
        
        for(let i = 0; i <= mei.length; i++){
            if(mei[i].checked){
                const g = meia.filter(g => g.nome === `${mei[i].value}`);
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
                const m5 = [
                    ...meia5.slice(1),
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
                setMeia5(m5);
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
                    !select ?
                    TextoMeias
                    :
                    ''
                }
            </PlayerPositionTitle>

            {
                select ? '' 
                :
                <PlayersPositionRadio>
                    <PlayersPositionName>
                        <input type="radio" value="VOL" name="meia" onChange={filtrar}/> VOL
                    </PlayersPositionName>
                    <PlayersPositionName>
                        <input type="radio" value="MC" name="meia" onChange={filtrar}/> MC
                    </PlayersPositionName>
                    <PlayersPositionName>
                        <input type="radio" value="MEI" name="meia" onChange={filtrar}/> MEI
                    </PlayersPositionName>
                    <PlayersPositionName>
                        <input type="radio" value="MD" name="meia" onChange={filtrar}/> MD
                    </PlayersPositionName>
                    <PlayersPositionName>
                        <input type="radio" value="ME" name="meia" onChange={filtrar}/> ME
                    </PlayersPositionName>
                </PlayersPositionRadio>
            }

            <PlayersPosition>
                <PlayerPositionTitle>
                    {
                        select ? 
                            `Escolhido como ${textMeia}:` 
                        :
                            `Escolha o ${textMeia}`
                    }
                </PlayerPositionTitle>
                {
                    select ?
                    meia5.map(gol => (
                            <PlayerContainer key={gol.id} value={gol.nome}> 
                                {
                                    modal && <ModalJogadores idj={playerModal} infoFinish={infoFinish}/> 
                                }
                                <input type='radio'
                                    value={gol.nome}
                                    name='meia'
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
                    meia.map(gol => (
                        <PlayerContainer key={gol.id} value={gol.nome}> 
                            {
                                modal && <ModalJogadores idj={playerModal} infoFinish={infoFinish}/> 
                            }
                            <input type='radio'
                                value={gol.nome}
                                name='meia'
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