import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

//Importando Contexts
import { UserContext } from '../../contexts/user';

//Importando Componentes de Estilização
import { HeaderBr, HeaderDivision, HeaderIcon, HeaderTitle } from './styles';

export default function Header(){

    const { cbf } = useContext(UserContext);
    
    

    return(
        <HeaderBr>
                {cbf.map((item, index) => (
                    <HeaderDivision key={index}>
                            <HeaderIcon>
                                <Link to='/'>
                                    <img src={item.confederacao_icon} alt='Icon da CBF'/>
                                </Link>
                            </HeaderIcon>
                            <HeaderTitle>
                                <Link to='/'>
                                    ESCALE SUA SELEÇÃO
                                </Link>
                            </HeaderTitle>
                            <HeaderIcon>
                                <Link to='/'>
                                    <img src={item.confederacao_icon} alt='Icon da CBF'/>
                                </Link>
                            </HeaderIcon>
                    </HeaderDivision>
                ))}
        </HeaderBr>
    )
} 