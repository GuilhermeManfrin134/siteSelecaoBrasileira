import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

import api from "../../services/api";
import Erro from "../Erro";

export default function Jogador(){

    const { name } = useParams();
    const [jogador, setJogador] = useState([]);

    useEffect(()=>{

        async function loadJogador(){
            const response = await api.get('');

            setJogador(response.data)
        }
        loadJogador();

    }, []);

    const jogadorFiltrado = jogador.filter(item => item.nome === `${name}`);

    if(jogadorFiltrado.length === 0){
        return(
            <Erro />
        )
    }

    return(
        <div>
            {jogadorFiltrado.map(jog => (
                <div key={jog.id}>
                    {jog.nome}
                </div>
            ))}
        </div>
    )
}