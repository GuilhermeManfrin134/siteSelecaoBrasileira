import { useState, createContext, useEffect } from "react";

//Importação de APIs
import api from "../services/api";

export const UserContext = createContext({});

function UserProvider({children}){

    const [player, setPlayer] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function loadPlayer(){
            const response = await api.get('');

            setPlayer(response.data);
            setLoading(false)
        }
        loadPlayer();

    }, [setPlayer]);

    return(
        <UserContext.Provider value={{ player, setPlayer, loading }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;