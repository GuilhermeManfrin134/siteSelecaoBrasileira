import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

//Importação de Componentes
import AllPlayers from '../../components/AllPlayers';
import Loading from '../../components/Loading';

//Importação de Componentes de Estilização
import { SectionBr, ButtonBr, TitleBr, MainBr } from './styles';
import { DescriptionSite, Psite } from '../Convocação/styles';

//Importando Icons
import { GiSoccerKick } from 'react-icons/gi';
import { FaThList } from 'react-icons/fa';

//Imprtando Contexts
import { UserContext } from '../../contexts/user';

export default function Home(){
    
    const { loading } = useContext(UserContext);

    let navigate = useNavigate();

    function start(){
        return navigate('/convocacao_selecao');
    }

    function selecao(){
        return navigate('/selecao');
    }

    return(
        <SectionBr>
            <DescriptionSite>
                <strong>Seja o técnico da seleção brasileira!</strong>
                <Psite>
                    Você já se imaginou como o técnico do Brasil em uma Copa do Mundo? <strong>Agora você pode!!! </strong> 
                </Psite>
                <Psite>
                    A Copa do Qatar em 2022 está chegando, se tivesse o poder de Tite, quem seriam os seus escolhidos?
                </Psite>
                <Psite>
                    
                </Psite>
            </DescriptionSite>
            <div className='home-buttons'>
                <ButtonBr onClick={selecao}>
                        <FaThList size={30}/>
                        Sua convocação
                </ButtonBr>
                <ButtonBr onClick={start}>
                        <GiSoccerKick size={40}/>
                        Inicie sua convocação
                </ButtonBr>
            </div>
            <TitleBr>
                OPÇÕES DE ESCOLHA:
            </TitleBr>
            <MainBr>
                {
                    loading ? <Loading/> : <AllPlayers/> 
                }
            </MainBr>
            <ButtonBr onClick={start}>
                <GiSoccerKick size={40}/>
                Inicie sua convocação
            </ButtonBr>
        </SectionBr>
    )
}