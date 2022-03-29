import { Routes, Route } from 'react-router-dom';

//Importando Páginas
import Home from '../pages/Home';
import Erro from '../pages/Erro';
import Jogador from '../pages/Jogador';

export default function Routex(){

    return(
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/jogadores/:name' element={<Jogador/>}/>
            <Route path='*' element={<Erro/>}/>
        </Routes>
    )
}