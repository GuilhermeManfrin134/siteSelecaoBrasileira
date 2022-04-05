import { useContext, useState } from "react";

//Importação de Contexts
import { UserContext } from "../../../../contexts/user";

export default function Meia3(){

    const { player, meia3, setMeia3 } = useContext(UserContext);

    const [textMeia, setTextMeia] = useState('');

    const meia = player.filter(
        filtro => 
        filtro.posicao[0] === `${textMeia}` || 
        filtro.posicao[1] === `${textMeia}` ||
        filtro.posicao[2] === `${textMeia}` ||
        filtro.posicao[3] === `${textMeia}` ||
        filtro.posicao[4] === `${textMeia}` ||
        filtro.posicao[5] === `${textMeia}` ||
        filtro.posicao[6] === `${textMeia}`
    );

    function filtrar(){
        let textMeia = document.querySelector('input[name=meia]:checked').value;
        setTextMeia(textMeia);
    }

    function verificar(e){

        let mei = document.getElementsByName('meia');

        for(let i = 0; i <= mei.length; i++){
            if(mei[i].checked){
                const g = meia.filter(g => g.nome === `${mei[i].value}`);
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
                const m3 = [
                    ...meia3.slice(1),
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
                setMeia3(m3);
            }
        }

    }

    return(
        <div>
            <div>
                <input type="radio" value="VOL" name="meia" onChange={filtrar}/> Volante
                <input type="radio" value="MC" name="meia" onChange={filtrar}/> Meio Campo
                <input type="radio" value="MEI" name="meia" onChange={filtrar}/> Meia Atacante
                <input type="radio" value="MD" name="meia" onChange={filtrar}/> Meia Direita
                <input type="radio" value="ME" name="meia" onChange={filtrar}/> Meia Esquerda
            </div>
            <div>
                Escolha o Meia
                {
                    meia.map(gol => (
                        <div key={gol.id}>
                            <input type='radio'
                                value={gol.nome}
                                name='meia' 
                                onChange={verificar}
                            /> {gol.nome}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}