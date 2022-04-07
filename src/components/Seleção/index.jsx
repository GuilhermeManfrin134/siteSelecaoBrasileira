import { useContext } from "react"

//Importando Contexts
import { UserContext } from "../../contexts/user"

export default function Seleção(){

    const { convocados } = useContext(UserContext);

    return(
        <div>
            {
                convocados.map(item => (
                    <div key={item.id}>
                        {item.nome}
                    </div>
                ))
            }
        </div>
    )
}