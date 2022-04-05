import { useContext } from "react";

//Importação de Contexts
import { UserContext } from "../../../../contexts/user";

export default function Goleiro2(){

    const { goleiro2, setGoleiro2, player } = useContext(UserContext);

    const goleiro = player.filter(filtro => filtro.posicao[0] === "GOL");

    function verificar(e){

        let gol = document.getElementsByName('goleiro');

        for(let i = 0; i <= gol.length; i++){
            if(gol[i].checked){
                const g = goleiro.filter(g => g.nome === `${gol[i].value}`);
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
                const g2 = [
                    ...goleiro2.slice(1),
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
                setGoleiro2(g2);
            }
        }

    }

    return(
        <div>
            <div>
                {
                    goleiro.map(gol => (
                        <div key={gol.id}>
                            <input type='radio'
                                value={gol.nome}
                                name='goleiro' 
                                onChange={verificar}
                            /> {gol.nome}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}