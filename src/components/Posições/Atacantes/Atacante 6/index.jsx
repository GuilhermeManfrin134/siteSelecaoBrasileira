import { useContext, useState } from "react";

//Importação de Contexts
import { UserContext } from "../../../../contexts/user";

export default function Atacante6(){

    const { player, atacante6, setAtacante6 } = useContext(UserContext);

    const [textAta, setTextAta] = useState('');

    const atacante = player.filter(
        filtro => 
        filtro.posicao[0] === `${textAta}` || 
        filtro.posicao[1] === `${textAta}` ||
        filtro.posicao[2] === `${textAta}` ||
        filtro.posicao[3] === `${textAta}` ||
        filtro.posicao[4] === `${textAta}` ||
        filtro.posicao[5] === `${textAta}` ||
        filtro.posicao[6] === `${textAta}`
    );

    function filtrar(){
        let textAta = document.querySelector('input[name=atacante]:checked').value;
        setTextAta(textAta);
    }

    function verificar(e){

        let ata = document.getElementsByName('atacante');

        for(let i = 0; i <= ata.length; i++){
            if(ata[i].checked){
                const g = atacante.filter(g => g.nome === `${ata[i].value}`);
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
                const a6 = [
                    ...atacante6.slice(1),
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
                setAtacante6(a6);
            }
        }

    }

    return(
        <div>
            <div>
                <input type="radio" value="ATA" name="atacante" onChange={filtrar}/> Atacante
                <input type="radio" value="PTE" name="atacante" onChange={filtrar}/> Ponta Esquerda
                <input type="radio" value="PTD" name="atacante" onChange={filtrar}/> Ponta Direita
                <input type="radio" value="SA" name="atacante" onChange={filtrar}/> Meia Atacante
            </div>
            <div>
                Escolha o Atacante
                {
                    atacante.map(gol => (
                        <div key={gol.id}>
                            <input type='radio'
                                value={gol.nome}
                                name='atacante' 
                                onChange={verificar}
                            /> {gol.nome}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}