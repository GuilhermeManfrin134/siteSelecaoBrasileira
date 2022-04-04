import { useContext } from "react";

//Importação de Componentes
//import Goleiro from "../../components/Posições/Goleiro";
//import Defensor from "../../components/Posições/Defensor";
import Meia from "../../components/Posições/Meia";

//Importação de Contexts
import { UserContext } from "../../contexts/user";

export default function Convocação(){

    const { meiasConvocados } = useContext(UserContext);

    return(
        <>
            <Meia />
            <hr/>
            <hr/>
            <hr/>
            <div>
                {
                    meiasConvocados.map((item, index) => (
                        <div key={index}>
                            {item.nome} - {item.clube} - {item.idade} anos 
                        </div>
                    ))
                }
            </div>
        </>
    )
}