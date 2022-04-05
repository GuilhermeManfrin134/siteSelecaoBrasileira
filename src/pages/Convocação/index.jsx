import { useContext } from "react";

//Importação de Contexts
import { UserContext } from "../../contexts/user";

//Testes
import Meia1 from '../../components/Posições/Meias/Meia 1';

export default function Convocação(){

    const { convocados } = useContext(UserContext);

    return(
        <>
            <hr/>
            <div>
                <Meia1/>
                <hr/>
                {
                    convocados.map((item, index) => (
                        <div key={index}>
                            {item.nome} - {item.clube} - {item.idade} anos 
                        </div>
                    ))
                }
            </div>
        </>
    )
}