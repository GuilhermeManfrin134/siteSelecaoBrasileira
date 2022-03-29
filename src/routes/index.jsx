import { Routes, Route } from 'react-router-dom';

//Importando Páginas
import Home from '../pages/Home';
import Erro from '../pages/Erro';

export default function Routex(){
    return(
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='*' element={<Erro/>}/>
        </Routes>
    )
}