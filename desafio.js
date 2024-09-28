let nVitorias = 400;
let nDerrotas = 5;
let resultado;

function mostrarRankJogador(vitorias, derrotas) {
    let rank;
    resultado = vitorias - derrotas;
    
    switch (true) {
        case resultado <= 10:
        rank = "Ferro";
        break;
        case resultado >= 11 && resultado <= 20:
        rank = "Bronze";
        break;

        case resultado >= 21 && resultado <= 50:
        rank = "Prata";
        break;

        case resultado >= 51 && resultado <= 80:
        rank = "Ouro";
        break;

        case resultado >= 81 && resultado <= 90:
        rank = "Diamante";
        break;

        case resultado >= 91 && resultado <= 100:
        rank = "Lendário";
        break;

        case resultado >= 101:
        rank = "Imortal";
        break;
  }
  return rank
}

let rankCalculado = mostrarRankJogador(nVitorias, nDerrotas);
for (let i = 0; i < 3; i++) console.log(`O Herói tem de saldo de ${resultado} está no nível de ${rankCalculado}`);

