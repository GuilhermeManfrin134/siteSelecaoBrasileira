import { useContext } from "react";

//Importação de Contexts
import { UserContext } from "../../contexts/user";

//Testes
import Goleiro1 from "../../components/Posições/Goleiros/Goleiro 1";
import Goleiro2 from "../../components/Posições/Goleiros/Goleiro 2";
import Goleiro3 from "../../components/Posições/Goleiros/Goleiro 3";

export default function Convocação(){

    const { convocados } = useContext(UserContext);

    return(
        <>
            <div>
                <Goleiro1/>
                <Goleiro2/>
                <Goleiro3/>
                <br/>
                
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