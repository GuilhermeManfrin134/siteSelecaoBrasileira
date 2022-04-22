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
                        <a href="https://www.linkedin.com/in/guilherme-manfrin-pereira-4875a2207/" target='_blank'>
                            <FaLinkedin size={50}/>
                        </a>
                        <a href="https://www.instagram.com/gui.manfrin_134/" target='_blank'>
                            <FaInstagramSquare size={50}/>
                        </a>
                        <a href="https://github.com/GuilhermeManfrin134" target='_blank'>
                            <FaGithub size={50}/>
                        </a>
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