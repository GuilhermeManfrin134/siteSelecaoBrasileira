import { BrowserRouter } from 'react-router-dom';

//Importando Rotas
import Routes from './routes';

//Importação de Componentes
import Header from './components/Header';

export default function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Routes/>
    </BrowserRouter>
  );
}
