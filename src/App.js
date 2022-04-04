import { BrowserRouter } from 'react-router-dom';

//Importando Rotas
import Routes from './routes';

//Importação de Componentes
import Header from './components/Header';

//Importando Context
import UserProvider from './contexts/user';

export default function App() {
  return (
    <UserProvider>
      <BrowserRouter>
          <Header/>
          <Routes/>
      </BrowserRouter>
    </UserProvider>
  );
}
