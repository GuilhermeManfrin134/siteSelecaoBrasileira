import { useState, createContext, useEffect, useRef } from "react";

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

    //TITULARES
    const [titular1, setTitular1] = useState([]);
    const [titular2, setTitular2] = useState([]);
    const [titular3, setTitular3] = useState([]);
    const [titular4, setTitular4] = useState([]);
    const [titular5, setTitular5] = useState([]);
    const [titular6, setTitular6] = useState([]);
    const [titular7, setTitular7] = useState([]);
    const [titular8, setTitular8] = useState([]);
    const [titular9, setTitular9] = useState([]);
    const [titular10, setTitular10] = useState([]);
    const [titular11, setTitular11] = useState([]);

    //TODOS OS TITULARES
    const titular = [];
    const [titulares, setTitulares] = useState(titular)

    useEffect(()=> {

        setTitulares([
            ...titular1,
            ...titular2,
            ...titular3,
            ...titular4,
            ...titular5,
            ...titular6,
            ...titular7,
            ...titular8,
            ...titular9,
            ...titular10,
            ...titular11
        ]);

    }, [titular1, setTitulares, titular2, titular3, titular4, titular5, titular6, titular7, titular8, titular9, titular10, titular11]);

    //ARMAZENAMENTO 

    useEffect(() => {
        const cStorage = localStorage.getItem('titulares');
    
        if(cStorage){
          setTitulares(JSON.parse(cStorage));
        }
    }, [setTitulares]);
    
    useEffect(() => {
      localStorage.setItem('titulares', JSON.stringify(titulares));
    }, [titulares]);

    useEffect(()=>{
        setGoleirosConvocados([
            ...goleiro1,
            ...goleiro2,
            ...goleiro3
        ]);

    },[goleiro1, setGoleirosConvocados, goleiro2, goleiro3]);

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

    useEffect(()=> {

        setConvocados([
            ...goleirosConvocados,
            ...defensoresConvocados,
            ...meiasConvocados,
            ...atacantesConvocados
        ]);

    }, [atacantesConvocados, defensoresConvocados, meiasConvocados, goleirosConvocados, setConvocados]);

    useEffect(() => {
        const cStorage = localStorage.getItem('convocados');
    
        if(cStorage){
          setConvocados(JSON.parse(cStorage));
        }
    }, [setConvocados]);
    
    useEffect(() => {
      localStorage.setItem('convocados', JSON.stringify(convocados));
    }, [convocados]);

    useEffect(() => {
        const gStorage = localStorage.getItem('goleirosConvocados');
    
        if(gStorage){
          setGoleirosConvocados(JSON.parse(gStorage));
        }
    }, [setGoleirosConvocados]);
    
    useEffect(() => {
      localStorage.setItem('goleirosConvocados', JSON.stringify(goleirosConvocados));
    }, [goleirosConvocados]);

    useEffect(() => {
        const dStorage = localStorage.getItem('defensoresConvocados');
    
        if(dStorage){
          setDefensoresConvocados(JSON.parse(dStorage));
        }
    }, [setDefensoresConvocados]);
    
    useEffect(() => {
      localStorage.setItem('defensoresConvocados', JSON.stringify(defensoresConvocados));
    }, [defensoresConvocados]);

    useEffect(() => {
        const mStorage = localStorage.getItem('meiasConvocados');
    
        if(mStorage){
          setMeiasConvocados(JSON.parse(mStorage));
        }
    }, [setMeiasConvocados]);
    
    useEffect(() => {
      localStorage.setItem('meiasConvocados', JSON.stringify(meiasConvocados));
    }, [meiasConvocados]);

    useEffect(() => {
        const aStorage = localStorage.getItem('atacantesConvocados');
    
        if(aStorage){
          setAtacantesConvocados(JSON.parse(aStorage));
        }
    }, [setAtacantesConvocados]);
    
    useEffect(() => {
      localStorage.setItem('atacantesConvocados', JSON.stringify(atacantesConvocados));
    }, [atacantesConvocados]);

    function deleteTeam(){
        localStorage.removeItem('goleirosConvocados');
        localStorage.removeItem('defensoresConvocados');
        localStorage.removeItem('meiasConvocados');
        localStorage.removeItem('atacantesConvocados');
        localStorage.removeItem('goleiro1');
        localStorage.removeItem('goleiro2');
        localStorage.removeItem('goleiro3');
        localStorage.removeItem('defensor1');
        localStorage.removeItem('defensor2');
        localStorage.removeItem('defensor3');
        localStorage.removeItem('defensor4');
        localStorage.removeItem('defensor5');
        localStorage.removeItem('defensor6');
        localStorage.removeItem('defensor7');
        localStorage.removeItem('defensor8');
        localStorage.removeItem('meia1');
        localStorage.removeItem('meia2');
        localStorage.removeItem('meia3');
        localStorage.removeItem('meia4');
        localStorage.removeItem('meia5');
        localStorage.removeItem('meia6');
        localStorage.removeItem('meia7');
        localStorage.removeItem('atacante1');
        localStorage.removeItem('atacante2');
        localStorage.removeItem('atacante3');
        localStorage.removeItem('atacante4');
        localStorage.removeItem('atacante5');
        localStorage.removeItem('atacante6');
        localStorage.removeItem('atacante7');
        localStorage.removeItem('atacante8');
        localStorage.removeItem('titular1');
        localStorage.removeItem('titular2');
        localStorage.removeItem('titular3');
        localStorage.removeItem('titular4');
        localStorage.removeItem('titular5');
        localStorage.removeItem('titular6');
        localStorage.removeItem('titular7');
        localStorage.removeItem('titular8');
        localStorage.removeItem('titular9');
        localStorage.removeItem('titular10');
        localStorage.removeItem('titular11');
        localStorage.removeItem('titulares');
        localStorage.removeItem('convocados');
        window.location.reload();
    }

    //REQUISIÇÃO APIS
    const componentMounted = useRef(true);

    useEffect(() => {

        if(componentMounted.current){
            async function loadPlayer(){
                const response = await api.get('');
    
                setPlayer(response.data);
                setLoading(false)
            }
            loadPlayer();
        }
        return () => {
            componentMounted.current = false;
        }

    }, []);

    const compMounted = useRef(true);

    useEffect(() => {

        if(compMounted.current){
            async function loadData(){
                const response = await api_br.get('')
                
                setCBF(response.data);
            }
            loadData();
        }
        return () => {
            compMounted.current = false;
        }

    }, []);

    return(
        <UserContext.Provider value={{ 
                                        player, cbf, setPlayer, loading, alturaTela, larguraTela,
                                        setConvocados,
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
                                        TextoMeias, TextoDefensores, TextoAtacantes,
                                        titular1, setTitular1, titular2, setTitular2,
                                        titular3, setTitular3, titular4, setTitular4,
                                        titular5, setTitular5, titular6, setTitular6,
                                        titular7, setTitular7, titular8, setTitular8,
                                        titular9, setTitular9, titular10, setTitular10,
                                        titular11, setTitular11, titulares,
                                        deleteTeam
                                    }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;