//Importação de Componentes de Estilização
import { DescriptionSite, Psite, ButtonInit } from '../../pages/Convocação/styles';
import { useNavigate } from 'react-router-dom';

export default function Time(){
    let navigate = useNavigate();

    function gol(e){
        return navigate(`/selecao_time/${e}`);
    }

    return(
        <DescriptionSite>
            <strong>Formação</strong>
            <Psite>
                Escolha a formação que deseja para o time titular:
            </Psite>
            <div className="alignCenter">
                <ButtonInit onClick={(e) => gol(e = "4-3-3")}>
                    4 - 3 - 3
                </ButtonInit>
                <ButtonInit onClick={(e) => gol(e = "4-4-2")}>
                    4 - 4 - 2
                </ButtonInit>
                <ButtonInit onClick={(e) => gol(e = "3-5-2")}>
                    3 - 5 - 2
                </ButtonInit>
                <ButtonInit onClick={(e) => gol(e = "5-2-3")}>
                    5 - 2 - 3
                </ButtonInit>
                <ButtonInit onClick={(e) => gol(e = "3-4-3")}>
                    3 - 4 - 3
                </ButtonInit>
                <ButtonInit onClick={(e) => gol(e = "3-6-1")}>
                    3 - 6 - 1
                </ButtonInit>
                <ButtonInit onClick={(e) => gol(e = "4-1-4-1")}>
                    4 - 1 - 4 - 1
                </ButtonInit>
                <ButtonInit onClick={(e) => gol(e = "5-4-1")}>
                    5 - 4 - 1
                </ButtonInit>
                <ButtonInit onClick={(e) => gol(e = "4-2-2-2")}>
                    4 - 2 - 2 - 2
                </ButtonInit>
            </div>
        </DescriptionSite>
    )
}