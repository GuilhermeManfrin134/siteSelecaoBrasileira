import { useContext, useState } from "react";

//Importação de Contexts
import { UserContext } from "../../../../contexts/user";

export default function Defensor6(){

    const { player, defensor6, setDefensor6 } = useContext(UserContext);

    const [textDef, setTextDef] = useState('');

    const defensor = player.filter(
        filtro => 
        filtro.posicao[0] === `${textDef}` || 
        filtro.posicao[1] === `${textDef}` ||
        filtro.posicao[2] === `${textDef}` ||
        filtro.posicao[3] === `${textDef}` ||
        filtro.posicao[4] === `${textDef}` ||
        filtro.posicao[5] === `${textDef}` ||
        filtro.posicao[6] === `${textDef}`
    );

    function filtrar(){
        let textDefensor = document.querySelector('input[name=defensor]:checked').value;
        setTextDef(textDefensor);
    }

    function verificar(e){

        let def = document.getElementsByName('defensor');

        for(let i = 0; i <= def.length; i++){
            if(def[i].checked){
                const g = defensor.filter(g => g.nome === `${def[i].value}`);
                const id = g.map(item => item.id);
                const nome = g.map(item => item.nome);
                const nome_completo = g.map(item => item.nome_completo);
                const foto = g.map(item => item.foto);
                const altura = g.map(item => item.altura);
                const idade = g.map(item => item.idade);
                const dt_nasc = g.map(item => item.dt_nasc);
                const qtd_jogos = g.map(item => item.qtd_jogos);
                const gols_selecao = g.map(item => item.gols_selecao);
                const assists_selecao = g.map(item => item.assists_selecao);
                const pe = g.map(item => item.pe);
                const clube = g.map(item => item.clube);
                const campeonato = g.map(item => item.campeonato);
                const posicao = g.map(item => item.posicao);
                const d6 = [
                    ...defensor6.slice(1),
                    {
                        id: id,
                        nome: nome,
                        nome_completo: nome_completo,
                        foto: foto,
                        altura: altura,
                        idade: idade,
                        dt_nasc: dt_nasc,
                        qtd_jogos: qtd_jogos,
                        gols_selecao: gols_selecao,
                        assists_selecao: assists_selecao,
                        pe: pe,
                        clube: clube,
                        campeonato: campeonato,
                        posicao: posicao
                    },
                ];
                setDefensor6(d6);
            }
        }

    }

    return(
        <div>
            <div>
                <input type="radio" value="LTD" name="defensor" onChange={filtrar}/> Lateral Direito
                <input type="radio" value="LTE" name="defensor" onChange={filtrar}/> Lateral Esquerdo
                <input type="radio" value="ZAG" name="defensor" onChange={filtrar}/> Zagueiro
            </div>
            <div>
                Escolha o Defensor
                {
                    defensor.map(gol => (
                        <div key={gol.id}>
                            <input type='radio'
                                value={gol.nome}
                                name='defensor' 
                                onChange={verificar}
                            /> {gol.nome}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}