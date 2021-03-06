import { Routes, Route } from 'react-router-dom';

//Importando Páginas
import Home from '../pages/Home';
import Erro from '../pages/Erro';
import Jogador from '../pages/Jogador';
import Convocação from '../pages/Convocação';
import Goleiro from '../components/Goleiro';
import Defensor from '../components/Defensor';
import Meia from '../components/Meia';
import Atacante from '../components/Atacante';
import Seleção from '../components/Seleção';
import Time from '../components/Time';
import Selecionar from '../pages/Selecionar';

export default function Routex(){

    return(
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/jogadores/:id' element={<Jogador/>}/>
            <Route exact path='/convocacao_selecao' element={<Convocação/>}/>
            <Route exact path='/convocacao_goleiros' element={<Goleiro/>}/>
            <Route exact path='/convocacao_defensores' element={<Defensor/>}/>
            <Route exact path='/convocacao_meias' element={<Meia/>}/>
            <Route exact path='/convocacao_atacantes' element={<Atacante/>}/>
            <Route exact path='/selecao_time' element={<Time/>}/>
            <Route exact path='/selecao_time/:formacao' element={<Selecionar/>}/>
            <Route exact path='/selecao' element={<Seleção/>}/>
            <Route path='*' element={<Erro/>}/>
        </Routes>
    )
}