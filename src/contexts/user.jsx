import { useState, createContext, useEffect } from "react";

//Importação de APIs
import api from "../services/api";
import api_br from '../services/api_br';

export const UserContext = createContext({});

function UserProvider({children}){

    const [player, setPlayer] = useState([]);
    const [cbf, setCBF] = useState([]);
    const [loading, setLoading] = useState(true);

    //TAMANHO DA TELA
    const alturaTela = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    const larguraTela = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    //TEXTOS
    const TextoMeias = 'Especifique a posição do meio de campo';
    const TextoDefensores = 'Especifique a posição da defesa';
    const TextoAtacantes = 'Especifique a posição de ataque';

    //GOLEIROS
    const [goleiro1, setGoleiro1] = useState([]);
    const [goleiro2, setGoleiro2] = useState([]);
    const [goleiro3, setGoleiro3] = useState([]);
    const [goleirosConvocados, setGoleirosConvocados] = useState([]);

    //DEFENSORES
    const [defensor1, setDefensor1] = useState([]);
    const [defensor2, setDefensor2] = useState([]);
    const [defensor3, setDefensor3] = useState([]);
    const [defensor4, setDefensor4] = useState([]);
    const [defensor5, setDefensor5] = useState([]);
    const [defensor6, setDefensor6] = useState([]);
    const [defensor7, setDefensor7] = useState([]);
    const [defensor8, setDefensor8] = useState([]);
    const [defensoresConvocados, setDefensoresConvocados] = useState([]);

    //MEIAS
    const [meia1, setMeia1] = useState([]);
    const [meia2, setMeia2] = useState([]);
    const [meia3, setMeia3] = useState([]);
    const [meia4, setMeia4] = useState([]);
    const [meia5, setMeia5] = useState([]);
    const [meia6, setMeia6] = useState([]);
    const [meia7, setMeia7] = useState([]);
    const [meiasConvocados, setMeiasConvocados] = useState([]);

    //ATACANTES
    const [atacante1, setAtacante1] = useState([]);
    const [atacante2, setAtacante2] = useState([]);
    const [atacante3, setAtacante3] = useState([]);
    const [atacante4, setAtacante4] = useState([]);
    const [atacante5, setAtacante5] = useState([]);
    const [atacante6, setAtacante6] = useState([]);
    const [atacante7, setAtacante7] = useState([]);
    const [atacante8, setAtacante8] = useState([]);
    const [atacantesConvocados, setAtacantesConvocados] = useState([]);

    //TODOS OS JOGADORES CONVOCADOS
    const selecao = [];
    const [convocados, setConvocados] = useState(selecao);

    //ARMAZENAMENTO 
    useEffect(()=> {

        setConvocados([
            ...goleirosConvocados,
            ...defensoresConvocados,
            ...meiasConvocados,
            ...atacantesConvocados
        ]);

    }, [atacantesConvocados, defensoresConvocados, meiasConvocados, goleirosConvocados]);

    useEffect(() => {
        const cStorage = localStorage.getItem('convocados');
    
        if(cStorage){
          setConvocados(JSON.parse(cStorage));
        }
    }, [setConvocados]);
    
    useEffect(() => {
      localStorage.setItem('convocados', JSON.stringify(convocados));
    }, [convocados]);

    useEffect(()=>{

        setGoleirosConvocados([
            ...goleiro1,
            ...goleiro2,
            ...goleiro3
        ]);

    },[goleiro1, setGoleirosConvocados, goleiro2, goleiro3]);

    useEffect(() => {
        const gStorage = localStorage.getItem('goleirosConvocados');
    
        if(gStorage){
          setGoleirosConvocados(JSON.parse(gStorage));
        }
    }, [setGoleirosConvocados]);
    
    useEffect(() => {
      localStorage.setItem('goleirosConvocados', JSON.stringify(goleirosConvocados));
    }, [goleirosConvocados]);

    useEffect(()=>{

        setDefensoresConvocados([
            ...defensor1,
            ...defensor2,
            ...defensor3,
            ...defensor4,
            ...defensor5,
            ...defensor6,
            ...defensor7,
            ...defensor8
        ]);

    },[defensor1, defensor2, defensor3, defensor4, defensor5, defensor6, defensor7, defensor8, setDefensoresConvocados]);

    useEffect(() => {
        const dStorage = localStorage.getItem('defensoresConvocados');
    
        if(dStorage){
          setDefensoresConvocados(JSON.parse(dStorage));
        }
    }, [setDefensoresConvocados]);
    
    useEffect(() => {
      localStorage.setItem('defensoresConvocados', JSON.stringify(defensoresConvocados));
    }, [defensoresConvocados]);

    useEffect(()=>{

        setMeiasConvocados([
            ...meia1,
            ...meia2,
            ...meia3,
            ...meia4,
            ...meia5,
            ...meia6,
            ...meia7
        ]);

    },[meia1, meia2, meia3, meia4, meia5, meia6, meia7, setMeiasConvocados]);

    useEffect(() => {
        const mStorage = localStorage.getItem('meiasConvocados');
    
        if(mStorage){
          setMeiasConvocados(JSON.parse(mStorage));
        }
    }, [setMeiasConvocados]);
    
    useEffect(() => {
      localStorage.setItem('meiasConvocados', JSON.stringify(meiasConvocados));
    }, [meiasConvocados]);

    useEffect(()=>{

        setAtacantesConvocados([
            ...atacante1,
            ...atacante2,
            ...atacante3,
            ...atacante4,
            ...atacante5,
            ...atacante6,
            ...atacante7,
            ...atacante8
        ]);

    },[atacante1, atacante2, atacante3, atacante4, atacante5, atacante6, atacante7, atacante8, setAtacantesConvocados]);

    useEffect(() => {
        const aStorage = localStorage.getItem('atacantesConvocados');
    
        if(aStorage){
          setAtacantesConvocados(JSON.parse(aStorage));
        }
    }, [setAtacantesConvocados]);
    
    useEffect(() => {
      localStorage.setItem('atacantesConvocados', JSON.stringify(atacantesConvocados));
    }, [atacantesConvocados]);

    //REQUISIÇÃO APIS
    useEffect(() => {

        async function loadPlayer(){
            const response = await api.get('');

            setPlayer(response.data);
            setLoading(false)
        }
        loadPlayer();

    }, [setPlayer]);

    useEffect(() => {

        async function loadData(){
            const response = await api_br.get('')
            
            setCBF(response.data);
        }
        loadData();

    }, []);

    return(
        <UserContext.Provider value={{ 
                                        player, cbf, setPlayer, loading, alturaTela, larguraTela,
                                        goleirosConvocados, setGoleirosConvocados,
                                        defensoresConvocados, setDefensoresConvocados,
                                        meiasConvocados, setMeiasConvocados,
                                        atacantesConvocados, setAtacantesConvocados,
                                        goleiro1, setGoleiro1, goleiro2, setGoleiro2,
                                        goleiro3, setGoleiro3, convocados,
                                        defensor1, setDefensor1, defensor2, setDefensor2,
                                        defensor3, setDefensor3, defensor4, setDefensor4,
                                        defensor5, setDefensor5, defensor6, setDefensor6,
                                        defensor7, setDefensor7, defensor8, setDefensor8,
                                        meia1, setMeia1, meia2, setMeia2, meia3, setMeia3,
                                        meia4, setMeia4, meia5, setMeia5, meia6, setMeia6,
                                        meia7, setMeia7, 
                                        atacante1, setAtacante1, atacante2, setAtacante2,
                                        atacante3, setAtacante3, atacante4, setAtacante4,
                                        atacante5, setAtacante5, atacante6, setAtacante6,
                                        atacante7, setAtacante7, atacante8, setAtacante8,
                                        TextoMeias, TextoDefensores, TextoAtacantes
                                    }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;