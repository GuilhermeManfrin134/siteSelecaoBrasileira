import { useState, createContext, useEffect } from "react";

//Importação de APIs
import api from "../services/api";

export const UserContext = createContext({});

function UserProvider({children}){

    const [player, setPlayer] = useState([]);
    const [loading, setLoading] = useState(true);

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
    const [defensoresConvocados, setDefensoresConvocados] = useState([
        {
            "id": "222",
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
            "id": "2222",
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
            "id": "333",
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
            "id": "3333",
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
            "id": "444",
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
            "id": "4444",
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
            "id": "555",
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
            "id": "5555",
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
    ])

    useEffect(() => {

        async function loadPlayer(){
            const response = await api.get('');

            setPlayer(response.data);
            setLoading(false)
        }
        loadPlayer();

    }, [setPlayer]);

    return(
        <UserContext.Provider value={{ 
                                        player, setPlayer, loading, 
                                        goleirosConvocados, setGoleirosConvocados,
                                        defensoresConvocados, setDefensoresConvocados
                                    }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;