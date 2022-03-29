import { useEffect, useState } from 'react';

//Importando APIs
import api_br from '../../services/api_br';

//Importando Componentes de Estilização
import { HeaderBr, HeaderDivision, HeaderIcon, HeaderTitle } from './styles';

export default function Header(){

    const [data, setData] = useState([]);
    
    useEffect(() => {

        async function loadData(){
            const response = await api_br.get('')
            
            setData(response.data);
        }
        loadData();

    }, []);

    return(
        <HeaderBr>
                {data.map((item, index) => (
                    <HeaderDivision key={index}>
                            <HeaderIcon>
                                <img src={item.confederacao_icon} alt='Icon da CBF'/>
                            </HeaderIcon>
                            <HeaderTitle>
                                ESCALE SUA SELEÇÃO
                            </HeaderTitle>
                            <HeaderIcon>
                                <img src={item.confederacao_icon} alt='Icon da CBF'/>
                            </HeaderIcon>
                    </HeaderDivision>
                ))}
        </HeaderBr>
    )
} 