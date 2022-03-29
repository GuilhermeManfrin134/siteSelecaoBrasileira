//Importação de Componentes 
import Player from "../Player";

//Importando Componentes de Estilização
import { AllPlayersBr } from './styles'; 

export default function AllPlayers({ player }){
    return(
        <AllPlayersBr>
            {
                player.map((player) => (
                    <Player key={player.id}
                        nome={player.nome}
                        clube={player.clube}
                        foto={player.foto}
                    />
                ))
            }
        </AllPlayersBr>
    )
}