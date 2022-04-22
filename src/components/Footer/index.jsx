import { useContext } from "react";
import { Link } from "react-router-dom";

//Importando Componentes de Estilização
import { FooterBr, FooterBrBack, FooterBrUp, FooterIcon, FooterItemLine, FooterMid } from "./styles";

//Importando Contexts
import { UserContext } from "../../contexts/user";

//Importação de Icons
import { FaGithub, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

export default function Footer(){

    const { cbf } = useContext(UserContext);

    return(
        <FooterBr>
            <FooterBrUp>
                {
                    cbf.map(item => (
                        <FooterIcon key={item.id}>
                            <Link to='/'>
                                <img src={item.confederacao_icon} alt="Icon da CBF"/>
                            </Link>
                        </FooterIcon>
                    ))
                }
                <FooterMid>
                    Contato
                    <FooterItemLine>
                        <Link to='/'>
                            <FaLinkedin size={50}/>
                        </Link>
                        <Link to='/'>
                            <FaInstagramSquare size={50}/>
                        </Link>
                        <Link to='/'>
                            <FaGithub size={50}/>
                        </Link>
                    </FooterItemLine>
                </FooterMid>
            </FooterBrUp>
            <FooterBrBack>
                Desenvolvido por Guilherme Manfrin Pereira<br/>
                Copyright © 2022
            </FooterBrBack>
        </FooterBr>
    )
}