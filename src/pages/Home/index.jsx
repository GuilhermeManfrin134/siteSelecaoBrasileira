import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

//Importação de Componentes
import AllPlayers from '../../components/AllPlayers';
import Loading from '../../components/Loading';

//Importação de Componentes de Estilização
import { SectionBr, ButtonBr, TitleBr, MainBr } from './styles';

//Importando Icons
import { GiSoccerField, GiSoccerKick } from 'react-icons/gi';
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

    function time(){
        return navigate('/selecao_time');
    }

    return(
        <SectionBr>
            <div className='home-buttons'>
                <ButtonBr onClick={time}>
                        <GiSoccerField size={40}/>
                        Seu time
                </ButtonBr>
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