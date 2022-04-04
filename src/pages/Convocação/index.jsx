import { useContext } from "react";

//Importação de Componentes
//import Goleiro from "../../components/Posições/Goleiro";
//import Defensor from "../../components/Posições/Defensor";
//import Meia from "../../components/Posições/Meia";
import Atacante from "../../components/Posições/Atacante";

//Importação de Contexts
import { UserContext } from "../../contexts/user";

export default function Convocação(){

    const { atacantesConvocados } = useContext(UserContext);

    return(
        <>
            <Atacante />
            <hr/>
            <hr/>
            <hr/>
            <div>
                {
                    atacantesConvocados.map((item, index) => (
                        <div key={index}>
                            {item.nome} - {item.clube} - {item.idade} anos 
                        </div>
                    ))
                }
            </div>
        </>
    )
}