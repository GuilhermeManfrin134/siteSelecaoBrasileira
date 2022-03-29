//Importação de Componentes 
import { Link } from "react-router-dom";
import Player from "../Player";

//Importando Componentes de Estilização
import { AllPlayersBr } from './styles'; 

export default function AllPlayers({ player }){

    return(
        <AllPlayersBr>
            {
                player.map((player) => (
                    <Link to={`/jogadores/${player.nome}`} key={player.id}>
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