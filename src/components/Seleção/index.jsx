import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

//Importação de Contexts
import { UserContext } from "../../contexts/user";

//Importando Componentes de Estilização
import { PlayersArea, PlayerPositionTitle,
        PlayerContainer, PlayerStats, PlayerDados,
        PlayerImg, PlayersPosition
} from '../../components/Posições/styles';
import { ButtonBr } from "../../pages/Home/styles";
import { ButtonBrDisabled, ButtonsArea, ConfirmDelete, DeleteContainer, DeleteTeam, ImagemFoto, ImagemJog } from "./styles";

//Importando Icons
import { ImInfo } from 'react-icons/im';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { GiSoccerField } from "react-icons/gi";
import { IoIosCloseCircle } from "react-icons/io";
import { MdDownload } from "react-icons/md";

//Importação de Componentes
import ModalJogadores from "../../components/ModalJogadores";

import domtoimage from 'dom-to-image';

export default function Seleção(){

    const { deleteTeam, larguraTela, goleirosConvocados, defensoresConvocados, meiasConvocados, atacantesConvocados } = useContext(UserContext);
    let navigate = useNavigate();
    const [playerModal, setPlayerModal] = useState('');
    const [modal, setModal] = useState(false);
    const [alert, setAlert] = useState(false);
    const [confirm, setConfirm] = useState(false);
    const [exibe, setExibe] = useState(false);

    function info(){
        setModal(true)
        if(larguraTela > 630){
            infoFinish();
        }
    }
    function infoFinish(){
        setModal(false)
    }
    
    function time(){
        return navigate('/selecao_time');
    }

    function excluir(){
        setConfirm(!confirm);
    }

    function exibir(){
        setExibe(!exibe);

    }

    function salvarImg(){
        domtoimage.toJpeg(document.getElementById('my-node'), { quality: 0.95 })
        .then(function (dataUrl) {
            let link = document.createElement('a');
            link.download = 'my-image-name.jpeg';
            link.href = dataUrl;
            link.click();
        });
    }

    return(
        <PlayersArea>
            <PlayersPosition>
                {
                    confirm ? 
                    <DeleteContainer>
                        <ConfirmDelete>
                            <div className="exit">
                                <IoIosCloseCircle size={40} color={'red'} onClick={() => setConfirm(!confirm)}/>
                            </div>
                            <div className="question">
                                Tem certeza que deseja <strong>excluir</strong> sua convocação?
                            </div>
                            <div className="buttons">
                                <DeleteTeam onClick={deleteTeam}>
                                    <FaTrashAlt size={25}/>
                                    SIM
                                </DeleteTeam>
                            </div>
                        </ConfirmDelete>
                    </DeleteContainer> 
                    : 
                    ''
                }
                <PlayerPositionTitle>
                    Goleiros
                    <Link to='/convocacao_goleiros'>
                        Edit
                        <FaEdit size={25} color={`var(--greenColor)`}/>
                    </Link>
                </PlayerPositionTitle>
                {
                    goleirosConvocados.map(gol => (
                        <PlayerContainer key={gol.id} value={gol.nome}> 
                            {
                                modal && <ModalJogadores idj={playerModal} infoFinish={infoFinish}/> 
                            }
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
            <br/>
            <PlayersPosition>
                <PlayerPositionTitle>
                    Defensores
                    <Link to='/convocacao_defensores'>
                        Edit
                        <FaEdit size={25} color={`var(--greenColor)`}/>
                    </Link>
                </PlayerPositionTitle>
                {
                    defensoresConvocados.map(gol => (
                        <PlayerContainer key={gol.id} value={gol.nome}> 
                            {
                                modal && <ModalJogadores idj={playerModal} infoFinish={infoFinish}/> 
                            }
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
            <br/>
            <PlayersPosition>
                <PlayerPositionTitle>
                    Meios de Campo
                    <Link to='/convocacao_meias'>
                        Edit
                        <FaEdit size={25} color={`var(--greenColor)`}/>
                    </Link>
                </PlayerPositionTitle>
                {
                    meiasConvocados.map(gol => (
                        <PlayerContainer key={gol.id} value={gol.nome}> 
                            {
                                modal && <ModalJogadores idj={playerModal} infoFinish={infoFinish}/> 
                            }
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
            <br/>
            <PlayersPosition>
                <PlayerPositionTitle>
                    Atacantes
                    <Link to='/convocacao_atacantes'>
                        Edit
                        <FaEdit size={25} color={`var(--greenColor)`}/>
                    </Link>
                </PlayerPositionTitle>
                {
                    atacantesConvocados.map(gol => (
                        <PlayerContainer key={gol.id} value={gol.nome}> 
                            {
                                modal && <ModalJogadores idj={playerModal} infoFinish={infoFinish}/> 
                            }
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
            {
                goleirosConvocados.length <= 2 || defensoresConvocados.length <= 7 || meiasConvocados.length <= 6 || atacantesConvocados.length <= 7 ?
                <ButtonsArea>
                    <ButtonBrDisabled onClick={() => setAlert(!alert)}>
                            <GiSoccerField size={40}/>
                            Time Titular
                    </ButtonBrDisabled>
                    {
                        alert ? 
                        <DeleteContainer>
                            <ConfirmDelete>
                                <div className="exit">
                                    <IoIosCloseCircle size={40} color={'red'} onClick={() => setAlert(!alert)}/>
                                </div>
                                <div className="question">
                                    Convoque todos os 26 jogadores para poder escalar o time titular.
                                </div>
                            </ConfirmDelete>
                        </DeleteContainer> 
                        :
                        ''
                    }
                    <DeleteTeam onClick={excluir}>
                        <FaTrashAlt size={25}/>
                        Delete seu Time
                    </DeleteTeam>
                </ButtonsArea>
                : 
                <ButtonsArea>
                    <ButtonBr onClick={time}>
                        <GiSoccerField size={40}/>
                        Time Titular
                    </ButtonBr>
                    <DeleteTeam onClick={exibir}>
                        <MdDownload size={25}/>
                        Baixar Time
                    </DeleteTeam>
                    <DeleteTeam onClick={excluir}>
                        <FaTrashAlt size={25}/>
                        Delete seu Time
                    </DeleteTeam>
                </ButtonsArea>
            }

            {
                exibe ?
                <>
                <ImagemJog id="my-node">
                    <h2>Minha Convocação</h2>

                    <h3>Goleiros</h3>
                    <ImagemFoto>
                        {
                            goleirosConvocados.map(gol => (
                                <div key={gol.id} className="imgmargin">
                                        <PlayerImg>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </PlayerImg>
                                        <h5>{gol.nome}</h5>
                                </div>
                            ))
                        }
                    </ImagemFoto>
                    <h3>Defensores</h3>
                    <ImagemFoto>
                        {
                            defensoresConvocados.map(gol => (
                                <div key={gol.id} className="imgmargin">
                                        <PlayerImg>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </PlayerImg>
                                        <h5>{gol.nome}</h5>
                                </div>
                            ))
                        }
                    </ImagemFoto>
                    <h3>Meios de Campo</h3>
                    <ImagemFoto>
                        {
                            meiasConvocados.map(gol => (
                                <div key={gol.id} className="imgmargin">
                                        <PlayerImg>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </PlayerImg>
                                        <h5>{gol.nome}</h5>
                                </div>
                            ))
                        }
                    </ImagemFoto>
                    <h3>Atacantes</h3>
                    <ImagemFoto>
                        {
                            atacantesConvocados.map(gol => (
                                <div key={gol.id} className="imgmargin">
                                        <PlayerImg>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </PlayerImg>
                                        <h5>{gol.nome}</h5>
                                </div>
                            ))
                        }
                    </ImagemFoto>

                    <h4>Escale a sua seleção em: <strong>escalesuaseleca.netlify.app</strong></h4>
                </ImagemJog>
                <DeleteTeam onClick={salvarImg}>
                    <MdDownload size={25}/>
                    Baixar Imagem
                </DeleteTeam>
                </>
                :
                ''
            }

            
        </PlayersArea>
    )
}