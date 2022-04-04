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
    const [meiasConvocados, setMeiasConvocados] = useState([
        {
            "id": "666",
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
            "id": "6666",
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
            "id": "777",
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
            "id": "7777",
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
            "id": "888",
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
            "id": "8888",
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
    ])
    const [atacantesConvocados, setAtacantesConvocados] = useState([
        {
            "id": "1010",
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
            "id": "101010",
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
            "id": "1111",
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
            "id": "111",
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
            "id": "10101",
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
            "id": "001010",
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
            "id": "1010101010",
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
            "id": "11101011",
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
                                        defensoresConvocados, setDefensoresConvocados,
                                        meiasConvocados, setMeiasConvocados,
                                        atacantesConvocados, setAtacantesConvocados
                                    }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;