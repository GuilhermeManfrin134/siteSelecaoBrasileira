import { BrowserRouter } from 'react-router-dom';

//Importando Rotas
import Routes from './routes';

//Importação de Componentes
import Header from './components/Header';
import Footer from './components/Footer';

//Importando Context
import UserProvider from './contexts/user';

export default function App() {
  return (
    <UserProvider>
      <BrowserRouter>
          <Header/>
          <Routes/>
          <Footer/>
      </BrowserRouter>
    </UserProvider>
  );
}
