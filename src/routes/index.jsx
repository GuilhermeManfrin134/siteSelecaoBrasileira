import { Routes, Route } from 'react-router-dom';

//Importando Páginas
import Home from '../pages/Home';
import Erro from '../pages/Erro';
import Jogador from '../pages/Jogador';
import Convocação from '../pages/Convocação';
import Goleiro from '../components/Goleiro';
import Defensor from '../components/Defensor';

export default function Routex(){

    return(
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/jogadores/:id' element={<Jogador/>}/>
            <Route exact path='/convocacao_selecao' element={<Convocação/>}/>
            <Route exact path='/convocacao_goleiros' element={<Goleiro/>}/>
            <Route exact path='/convocacao_defensores' element={<Defensor/>}/>
            <Route path='*' element={<Erro/>}/>
        </Routes>
    )
}