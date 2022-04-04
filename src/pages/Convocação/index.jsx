import { useState, useEffect } from "react";

//Importando APIs
import api from "../../services/api";

//Importação de Componentes
import Goleiro from "../../components/Posições/Goleiro";
import Loading from "../../components/Loading";

export default function Convocação(){

    const [goleirosConvocados, setGoleirosConvocados] = useState([
        {
            "id": "999",
            "nome": "...",
            "nome_completo": "...",
            "foto": "...",
            "altura": "...",
            "idade": "...",
            "dt_nasc": "...",
            "qtd_jogos": "...",
            "gols_selecao": "...",
            "assists_selecao": "...",
            "pe": "...",
            "clube": "...",
            "campeonato": "...",
            "posicao": "..."
        },
        {
            "id": "9999",
            "nome": "...",
            "nome_completo": "...",
            "foto": "...",
            "altura": "...",
            "idade": "...",
            "dt_nasc": "...",
            "qtd_jogos": "...",
            "gols_selecao": "...",
            "assists_selecao": "...",
            "pe": "...",
            "clube": "...",
            "campeonato": "...",
            "posicao": "..."
        },
        {
            "id": "999999",
            "nome": "...",
            "nome_completo": "...",
            "foto": "...",
            "altura": "...",
            "idade": "...",
            "dt_nasc": "...",
            "qtd_jogos": "...",
            "gols_selecao": "...",
            "assists_selecao": "...",
            "pe": "...",
            "clube": "...",
            "campeonato": "...",
            "posicao": "..."
        },
    ]);

    const [jogador, setJogador] = useState([]);

    useEffect(()=>{

        async function loadJogador(){
            const response = await api.get('');

            setJogador(response.data)
        }
        loadJogador();

    }, []);

    return(
        <>
            <Loading />
            <hr/>
            <Goleiro jogador={jogador} goleirosConvocados={goleirosConvocados} setGoleirosConvocados={setGoleirosConvocados}/>
            <hr/>
            <Goleiro jogador={jogador} goleirosConvocados={goleirosConvocados} setGoleirosConvocados={setGoleirosConvocados}/>
            <hr/>
            <Goleiro jogador={jogador} goleirosConvocados={goleirosConvocados} setGoleirosConvocados={setGoleirosConvocados}/>
            <hr/>
            <hr/>
            <div>
                {
                    goleirosConvocados.map((item, index) => (
                        <div key={index}>
                            {item.nome} - {item.clube} - {item.idade} anos 
                        </div>
                    ))
                }
            </div>
        </>
    )
}