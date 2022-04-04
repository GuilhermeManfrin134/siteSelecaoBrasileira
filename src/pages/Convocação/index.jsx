import { useContext } from "react";

//Importação de Componentes
//import Goleiro from "../../components/Posições/Goleiro";
import Defensor from "../../components/Posições/Defensor";

//Importação de Contexts
import { UserContext } from "../../contexts/user";

export default function Convocação(){

    const { defensoresConvocados } = useContext(UserContext);

    return(
        <>
            <Defensor />
            <hr/>
            <hr/>
            <hr/>
            <div>
                {
                    defensoresConvocados.map((item, index) => (
                        <div key={index}>
                            {item.nome} - {item.clube} - {item.idade} anos 
                        </div>
                    ))
                }
            </div>
        </>
    )
}