import { useContext } from "react";
import { useParams } from "react-router-dom"

//Importando Pages
import Erro from "../Erro";

//Importação de Componentes
import F_4_4_2 from "../../components/Formações/4-4-2";
import F_3_5_2 from "../../components/Formações/3-5-2";
import F_5_2_3 from "../../components/Formações/5-2-3";
import F_3_4_3 from "../../components/Formações/3-4-3";
import F_3_6_1 from "../../components/Formações/3-6-1";
import F_4_1_4_1 from "../../components/Formações/4-1-4-1";
import F_5_4_1 from "../../components/Formações/5-4-1";
import F_4_2_2_2 from "../../components/Formações/4-2-2-2";
import F_4_3_3 from "../../components/Formações/4-3-3";

//Importando Componentes de Estilização
import { GPage, GTitle } from "../../components/Posições/styles";
import { AreaCampo, AreaEscalacao, AreaJog, Campo, JogIcon, ListEscalacao, TitularDados, TitularIcon, TitularList, TitularStats } from "./styles";
import { UserContext } from "../../contexts/user";

//Importando imagem de Campo para Background
import foto from '../../assets/Campo_Futebol.jpg';

export default function Selecionar(){

    const { formacao } = useParams();
    const { 
        titulares, titular1, titular2, titular3, titular4, titular5, titular6,
        titular7, titular8, titular9, titular10, titular11
    
    } = useContext(UserContext);
    

    if(!titulares || !titular1[0] === undefined || !titular2[0] === undefined || !titular3[0] === undefined || !titular4[0] === undefined || !titular5[0] === undefined || !titular6[0] === undefined ||
        !titular7[0] === undefined || !titular8[0] === undefined || !titular9[0] === undefined || !titular10[0] === undefined || !titular11[0] === undefined){
        return(
            <Erro/>
        )
    }

    //4-3-3
    if(formacao === "4-3-3"){
        return(
            <GPage>
                <GTitle>Escolha os Titulares do Time</GTitle>
                <F_4_3_3/>
                <br />
                <br />
                <GTitle>Time Titular</GTitle>
                <AreaEscalacao>
                    <ListEscalacao>
                        {
                            titulares.map(jog => (
                                <TitularList key={jog.id}>
                                    <input id="numeracao" type='number' min={1} max={26}/>
                                    <TitularIcon>
                                        <img src={jog.foto} alt={jog.nome}/>
                                    </TitularIcon>
                                    <TitularDados>
                                        <TitularStats>
                                            {jog.nome}
                                        </TitularStats>
                                        <TitularStats>
                                            {jog.clube} -  {jog.campeonato}
                                        </TitularStats>
                                    </TitularDados>
                                </TitularList>
                            ))
                        }
                    </ListEscalacao>
                    <Campo foto={foto}>
                        <AreaCampo>
                            {
                                titular1.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                        </AreaCampo>
                        <AreaCampo>
                            {
                                titular2.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                            {
                                titular3.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                            {
                                titular4.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                            {
                                titular5.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                        </AreaCampo>
                        <AreaCampo>
                            {
                                titular6.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                            {
                                titular7.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                        </AreaCampo>
                        <AreaCampo>
                            {
                                titular8.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                        </AreaCampo>
                        <AreaCampo>
                            {
                                titular9.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                            {
                                titular10.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                            {
                                titular11.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                        </AreaCampo>
                    </Campo>
                </AreaEscalacao>
            </GPage>
        )
    }

    //3-4-3
    if(formacao === "3-4-3"){
        return(
            <GPage>
                <GTitle>Escolha os Titulares do Time</GTitle>
                <F_3_4_3/>
                <br />
                <br />
                <GTitle>Time Titular</GTitle>
                <AreaEscalacao>
                    <ListEscalacao>
                        {
                            titulares.map(jog => (
                                <TitularList key={jog.id}>
                                    <input id="numeracao" type='number' min={1} max={26}/>
                                    <TitularIcon>
                                        <img src={jog.foto} alt={jog.nome}/>
                                    </TitularIcon>
                                    <TitularDados>
                                        <TitularStats>
                                            {jog.nome}
                                        </TitularStats>
                                        <TitularStats>
                                            {jog.clube} -  {jog.campeonato}
                                        </TitularStats>
                                    </TitularDados>
                                </TitularList>
                            ))
                        }
                    </ListEscalacao>
                    <Campo foto={foto}>
                        <AreaCampo>
                            {
                                titular1.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                        </AreaCampo>
                        <AreaCampo>
                            {
                                titular2.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                            {
                                titular3.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                            {
                                titular4.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                        </AreaCampo>
                        <AreaCampo>
                            {
                                titular5.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                            {
                                titular6.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                        </AreaCampo>
                        <AreaCampo>
                            {
                                titular7.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                            {
                                titular8.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                        </AreaCampo>
                        <AreaCampo>
                            {
                                titular9.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                            {
                                titular10.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                            {
                                titular11.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                        </AreaCampo>
                    </Campo>
                </AreaEscalacao>
            </GPage>
        )
    }

    //3-6-1
    if(formacao === "3-6-1"){
        return(
            <GPage>
                <GTitle>Escolha os Titulares do Time</GTitle>
                <F_3_6_1/>
                <br />
                <br />
                <GTitle>Time Titular</GTitle>
                <AreaEscalacao>
                    <ListEscalacao>
                        {
                            titulares.map(jog => (
                                <TitularList key={jog.id}>
                                    <input id="numeracao" type='number' min={1} max={26}/>
                                    <TitularIcon>
                                        <img src={jog.foto} alt={jog.nome}/>
                                    </TitularIcon>
                                    <TitularDados>
                                        <TitularStats>
                                            {jog.nome}
                                        </TitularStats>
                                        <TitularStats>
                                            {jog.clube} -  {jog.campeonato}
                                        </TitularStats>
                                    </TitularDados>
                                </TitularList>
                            ))
                        }
                    </ListEscalacao>
                    <Campo foto={foto}>
                        <AreaCampo>
                            {
                                titular1.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                        </AreaCampo>
                        <AreaCampo>
                            {
                                titular2.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                            {
                                titular3.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                            {
                                titular4.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                        </AreaCampo>
                        <AreaCampo>
                            {
                                titular5.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                            {
                                titular6.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                        </AreaCampo>
                        <AreaCampo>
                            {
                                titular7.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                            {
                                titular8.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                            {
                                titular9.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                            {
                                titular10.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                        </AreaCampo>
                        <AreaCampo>
                            {
                                titular11.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                        </AreaCampo>
                    </Campo>
                </AreaEscalacao>
            </GPage>
        )
    }

    //4-4-2
    if(formacao === "4-4-2"){
        return(
            <GPage>
                <GTitle>Escolha os Titulares do Time</GTitle>
                <F_4_4_2/>
                <br />
                <br />
                <GTitle>Time Titular</GTitle>
                <AreaEscalacao>
                    <ListEscalacao>
                        {
                            titulares.map(jog => (
                                <TitularList key={jog.id}>
                                    <input id="numeracao" type='number' min={1} max={26}/>
                                    <TitularIcon>
                                        <img src={jog.foto} alt={jog.nome}/>
                                    </TitularIcon>
                                    <TitularDados>
                                        <TitularStats>
                                            {jog.nome}
                                        </TitularStats>
                                        <TitularStats>
                                            {jog.clube} -  {jog.campeonato}
                                        </TitularStats>
                                    </TitularDados>
                                </TitularList>
                            ))
                        }
                    </ListEscalacao>
                    <Campo foto={foto}>
                        <AreaCampo>
                            {
                                titular1.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                        </AreaCampo>
                        <AreaCampo>
                            {
                                titular2.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                            {
                                titular3.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                            {
                                titular4.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                            {
                                titular5.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                        </AreaCampo>
                        <AreaCampo>
                            {
                                titular6.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                            {
                                titular7.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                        </AreaCampo>
                        <AreaCampo>
                            {
                                titular8.map(gol => (
                                    <AreaJog key={gol.id} className='align'>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                            {
                                titular9.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                            
                        </AreaCampo>
                        <AreaCampo>
                            {
                                titular10.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                            {
                                titular11.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                        </AreaCampo>
                    </Campo>
                </AreaEscalacao>
            </GPage>
        )
    }
    //4-2-2-2
    if(formacao === "4-2-2-2"){
        return(
            <GPage>
                <GTitle>Escolha os Titulares do Time</GTitle>
                <F_4_2_2_2/>
                <br />
                <br />
                <GTitle>Time Titular</GTitle>
                <AreaEscalacao>
                    <ListEscalacao>
                        {
                            titulares.map(jog => (
                                <TitularList key={jog.id}>
                                    <input id="numeracao" type='number' min={1} max={26}/>
                                    <TitularIcon>
                                        <img src={jog.foto} alt={jog.nome}/>
                                    </TitularIcon>
                                    <TitularDados>
                                        <TitularStats>
                                            {jog.nome}
                                        </TitularStats>
                                        <TitularStats>
                                            {jog.clube} -  {jog.campeonato}
                                        </TitularStats>
                                    </TitularDados>
                                </TitularList>
                            ))
                        }
                    </ListEscalacao>
                    <Campo foto={foto}>
                        <AreaCampo>
                            {
                                titular1.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                        </AreaCampo>
                        <AreaCampo>
                            {
                                titular2.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                            {
                                titular3.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                            {
                                titular4.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                            {
                                titular5.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                        </AreaCampo>
                        <AreaCampo>
                            {
                                titular6.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                            {
                                titular7.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                        </AreaCampo>
                        <AreaCampo>
                            {
                                titular8.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                            {
                                titular9.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                            
                        </AreaCampo>
                        <AreaCampo>
                            {
                                titular10.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                            {
                                titular11.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                        </AreaCampo>
                    </Campo>
                </AreaEscalacao>
            </GPage>
        )
    }

    //4-1-4-1
    if(formacao === "4-1-4-1"){
        return(
            <GPage>
                <GTitle>Escolha os Titulares do Time</GTitle>
                <F_4_1_4_1/>
                <br />
                <br />
                <GTitle>Time Titular</GTitle>
                <AreaEscalacao>
                    <ListEscalacao>
                        {
                            titulares.map(jog => (
                                <TitularList key={jog.id}>
                                    <input id="numeracao" type='number' min={1} max={26}/>
                                    <TitularIcon>
                                        <img src={jog.foto} alt={jog.nome}/>
                                    </TitularIcon>
                                    <TitularDados>
                                        <TitularStats>
                                            {jog.nome}
                                        </TitularStats>
                                        <TitularStats>
                                            {jog.clube} -  {jog.campeonato}
                                        </TitularStats>
                                    </TitularDados>
                                </TitularList>
                            ))
                        }
                    </ListEscalacao>
                    <Campo foto={foto}>
                        <AreaCampo>
                            {
                                titular1.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                        </AreaCampo>
                        <AreaCampo>
                            {
                                titular2.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                            {
                                titular3.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                            {
                                titular4.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                            {
                                titular5.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                        </AreaCampo>
                        <AreaCampo>
                            {
                                titular6.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                        </AreaCampo>
                        <AreaCampo>
                            {
                                titular7.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                            {
                                titular8.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                            {
                                titular9.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                            {
                                titular10.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                        </AreaCampo>
                        <AreaCampo>
                            {
                                titular11.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                        </AreaCampo>
                    </Campo>
                </AreaEscalacao>
            </GPage>
        )
    }

    //5-2-3
    if(formacao === "5-2-3"){
        return(
            <GPage>
                <GTitle>Escolha os Titulares do Time</GTitle>
                <F_5_2_3/>
                <br />
                <br />
                <GTitle>Time Titular</GTitle>
                <AreaEscalacao>
                    <ListEscalacao>
                        {
                            titulares.map(jog => (
                                <TitularList key={jog.id}>
                                    <input id="numeracao" type='number' min={1} max={26}/>
                                    <TitularIcon>
                                        <img src={jog.foto} alt={jog.nome}/>
                                    </TitularIcon>
                                    <TitularDados>
                                        <TitularStats>
                                            {jog.nome}
                                        </TitularStats>
                                        <TitularStats>
                                            {jog.clube} -  {jog.campeonato}
                                        </TitularStats>
                                    </TitularDados>
                                </TitularList>
                            ))
                        }
                    </ListEscalacao>
                    <Campo foto={foto}>
                        <AreaCampo>
                            {
                                titular1.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                        </AreaCampo>
                        <AreaCampo>
                            {
                                titular3.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                            {
                                titular4.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                            {
                                titular5.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                            
                        </AreaCampo>
                        <AreaCampo>
                            {
                                titular2.map(gol => (
                                    <AreaJog key={gol.id} className="align">
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                            {
                                titular6.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                        </AreaCampo>
                        <AreaCampo>
                            {
                                titular7.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                            {
                                titular8.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                            
                        </AreaCampo>
                        <AreaCampo>
                            {
                                titular9.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                            {
                                titular10.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                            {
                                titular11.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                        </AreaCampo>
                    </Campo>
                </AreaEscalacao>
            </GPage>
        )
    }

    //5-4-1
    if(formacao === "5-4-1"){
        return(
            <GPage>
                <GTitle>Escolha os Titulares do Time</GTitle>
                <F_5_4_1/>
                <br />
                <br />
                <GTitle>Time Titular</GTitle>
                <AreaEscalacao>
                    <ListEscalacao>
                        {
                            titulares.map(jog => (
                                <TitularList key={jog.id}>
                                    <input id="numeracao" type='number' min={1} max={26}/>
                                    <TitularIcon>
                                        <img src={jog.foto} alt={jog.nome}/>
                                    </TitularIcon>
                                    <TitularDados>
                                        <TitularStats>
                                            {jog.nome}
                                        </TitularStats>
                                        <TitularStats>
                                            {jog.clube} -  {jog.campeonato}
                                        </TitularStats>
                                    </TitularDados>
                                </TitularList>
                            ))
                        }
                    </ListEscalacao>
                    <Campo foto={foto}>
                        <AreaCampo>
                            {
                                titular1.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                        </AreaCampo>
                        <AreaCampo>
                            {
                                titular3.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                            {
                                titular4.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                            {
                                titular5.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                            
                        </AreaCampo>
                        <AreaCampo>
                            {
                                titular2.map(gol => (
                                    <AreaJog key={gol.id} className="align">
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                            {
                                titular6.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                        </AreaCampo>
                        <AreaCampo>
                            {
                                titular7.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                            {
                                titular8.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                            {
                                titular9.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                            {
                                titular10.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                        </AreaCampo>
                        <AreaCampo>
                            {
                                titular11.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                        </AreaCampo>
                    </Campo>
                </AreaEscalacao>
            </GPage>
        )
    }

    //3-5-2
    if(formacao === "3-5-2"){
        return(
            <GPage>
                <GTitle>Escolha os Titulares do Time</GTitle>
                <F_3_5_2/>
                <br />
                <br />
                <GTitle>Time Titular</GTitle>
                <AreaEscalacao>
                    <ListEscalacao>
                        {
                            titulares.map(jog => (
                                <TitularList key={jog.id}>
                                    <input id="numeracao" type='number' min={1} max={26}/>
                                    <TitularIcon>
                                        <img src={jog.foto} alt={jog.nome}/>
                                    </TitularIcon>
                                    <TitularDados>
                                        <TitularStats>
                                            {jog.nome}
                                        </TitularStats>
                                        <TitularStats>
                                            {jog.clube} -  {jog.campeonato}
                                        </TitularStats>
                                    </TitularDados>
                                </TitularList>
                            ))
                        }
                    </ListEscalacao>
                    <Campo foto={foto}>
                        <AreaCampo>
                            {
                                titular1.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                        </AreaCampo>
                        <AreaCampo>
                            {
                                titular2.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                            {
                                titular3.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                            {
                                titular4.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                        </AreaCampo>
                        <AreaCampo>
                            {
                                titular5.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                            {
                                titular6.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                            
                        </AreaCampo>
                        <AreaCampo>
                            {
                                titular7.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                            {
                                titular8.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                            {
                                titular9.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                            
                        </AreaCampo>
                        <AreaCampo>
                            {
                                titular10.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                            {
                                titular11.map(gol => (
                                    <AreaJog key={gol.id}>
                                        <JogIcon>
                                            <img src={gol.foto} alt={gol.nome}/>
                                        </JogIcon>
                                        <strong>{gol.nome}</strong>
                                    </AreaJog>
                                ))
                            }
                        </AreaCampo>
                    </Campo>
                </AreaEscalacao>
            </GPage>
        )
    }

    return(
        <Erro/>
    )
}