import { useContext } from "react";
import { Link } from "react-router-dom";

//Importação de Contexts
import { UserContext } from "../../contexts/user";

//Importação de Componentes
import Player from "../Player";

//Importando Componentes de Estilização
import { AllPlayersBr } from './styles'; 

export default function AllPlayers({search}){

    const { player } = useContext(UserContext);
    
    const playerFilter = player.filter(filtro => filtro.nome.toLowerCase().includes(search.toLowerCase()));

    return(
        <AllPlayersBr>
            {
                playerFilter.map((player) => (
                    <Link to={`/jogadores/${player.id}`} key={player.id}>
                        <Player
                            nome={player.nome}
                            clube={player.clube}
                            foto={player.foto}
                        />
                    </Link>
                ))
            }
        </AllPlayersBr>
    )
}