import { useContext, useState, useEffect, useRef } from "react";
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

export default function Atacante6(){

    const { larguraTela, player, atacante7, setAtacante7, TextoAtacantes, defensoresConvocados, meiasConvocados, atacantesConvocados } = useContext(UserContext);

    const [select, setSelect] = useState(false);
    const [playerModal, setPlayerModal] = useState('');

    const componentMounted = useRef(true);
    
    useEffect(async () => {
        if(componentMounted.current){
            const a7Storage = localStorage.getItem('atacante7');
        
            if(a7Storage){
                setAtacante7(JSON.parse(a7Storage));
            }
            if(a7Storage.length === 2){
                setSelect(false);
            }else{
                setSelect(true);
            }
        }
        return () => {
            componentMounted.current = false;
        }

      }, [setAtacante7]);
    
      useEffect(() => {
        localStorage.setItem('atacante7', JSON.stringify(atacante7));
      }, [atacante7]);

    const [textAta, setTextAta] = useState('jogador');

    const dn = defensoresConvocados.map(item => item.nome);
    const mn = meiasConvocados.map(item => item.nome);
    const an = atacantesConvocados.map(item => item.nome);
    const ataque = player.filter(
        filtro => 
        filtro.posicao[0] === `${textAta}` || 
        filtro.posicao[1] === `${textAta}` ||
        filtro.posicao[2] === `${textAta}` ||
        filtro.posicao[3] === `${textAta}` ||
        filtro.posicao[4] === `${textAta}` ||
        filtro.posicao[5] === `${textAta}` ||
        filtro.posicao[6] === `${textAta}`
    );
    const atacante = ataque.filter(
        filtro =>
        filtro.nome !== `${dn[0]}` && filtro.nome !== `${mn[0]}` && filtro.nome !== `${an[0]}` &&
        filtro.nome !== `${dn[1]}` && filtro.nome !== `${mn[1]}` && filtro.nome !== `${an[1]}` &&
        filtro.nome !== `${dn[2]}` && filtro.nome !== `${mn[2]}` && filtro.nome !== `${an[2]}` &&
        filtro.nome !== `${dn[3]}` && filtro.nome !== `${mn[3]}` && filtro.nome !== `${an[3]}` &&
        filtro.nome !== `${dn[4]}` && filtro.nome !== `${mn[4]}` && filtro.nome !== `${an[4]}` &&
        filtro.nome !== `${dn[5]}` && filtro.nome !== `${mn[5]}` && filtro.nome !== `${an[5]}` &&
        filtro.nome !== `${dn[6]}` && filtro.nome !== `${mn[6]}` && filtro.nome !== `${an[6]}` &&
        filtro.nome !== `${dn[7]}` && filtro.nome !== `${mn[7]}` && filtro.nome !== `${an[7]}` && 
        filtro.nome !== `${dn[8]}` &&                               filtro.nome !== `${an[8]}`
    );

    function filtrar(){
        let textAta = document.querySelector('input[name=atacante]:checked').value;
        setTextAta(textAta);
    }

    function verificar(e){

        let ata = document.getElementsByName('atacante');

        for(let i = 0; i <= ata.length; i++){
            if(ata[i].checked){
                const g = atacante.filter(g => g.nome === `${ata[i].value}`);
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
                const a7 = [
                    ...atacante7.slice(1),
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
                setAtacante7(a7);
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
                    TextoAtacantes
                    :
                    ''
                }
            </PlayerPositionTitle>

            {
                select ? '' 
                :
                <PlayersPositionRadio>
                    <PlayersPositionName>
                        <input type="radio" value="ATA" name="atacante" onChange={filtrar}/> ATA
                    </PlayersPositionName>
                    <PlayersPositionName>
                        <input type="radio" value="PTD" name="atacante" onChange={filtrar}/> PTD
                    </PlayersPositionName>
                    <PlayersPositionName>
                        <input type="radio" value="PTE" name="atacante" onChange={filtrar}/> PTE
                    </PlayersPositionName>
                    <PlayersPositionName>
                        <input type="radio" value="SA" name="atacante" onChange={filtrar}/> SA
                    </PlayersPositionName>
                </PlayersPositionRadio>
            }

            <PlayersPosition>
                <PlayerPositionTitle>
                    {
                        select ? 
                            `Escolhido como ${textAta}:` 
                        :
                            `Escolha o ${textAta}`
                    }
                </PlayerPositionTitle>
                {
                    select ?
                    atacante7.map(gol => (
                            <PlayerContainer key={gol.id} value={gol.nome}> 
                                {
                                    modal && <ModalJogadores idj={playerModal} infoFinish={infoFinish}/> 
                                }
                                <input type='radio'
                                    value={gol.nome}
                                    name='atacante'
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
                    atacante.map(gol => (
                        <PlayerContainer key={gol.id} value={gol.nome}> 
                            {
                                modal && <ModalJogadores idj={playerModal} infoFinish={infoFinish}/> 
                            }
                            <input type='radio'
                                value={gol.nome}
                                name='atacante'
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