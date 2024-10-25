// CALCULADORA DE PARTIDAS RANKEADAS
const prompt = require("prompt-sync")()

console.log("\nOlá Heroi, bem vindo à calculadora de partidas rankeadas\n")

let sair = false

do
{
    let escolha = 0
    console.log("\n")
    let vitorias = parseInt(prompt("Digite o número de vitórias: "));
    let derrotas = parseInt(prompt("Digite o número de derrotas: "));


    calcularRanque(vitorias, derrotas);

    console.log("\nDeseja sair da Calculadora?\n" + "[1] - Sim\n" + "[2] - Não\n")
    escolha = parseInt(prompt());

    if (escolha === 1)
    {
        sair = true
    }

} while (!sair)

function calcularRanque(vitorias, derrotas)
{

    let saldoVitorias = vitorias - derrotas;
    let nivel;


    if (vitorias < 10)
    {
        nivel = "Ferro";
    }
    else if (vitorias >= 11 && vitorias <= 20)
    {
        nivel = "Bronze";
    }
    else if (vitorias >= 21 && vitorias <= 50)
    {
        nivel = "Prata";
    }
    else if (vitorias >= 51 && vitorias <= 80)
    {
        nivel = "Ouro";
    }
    else if (vitorias >= 81 && vitorias <= 90)
    {
        nivel = "Diamante";
    }
    else if (vitorias >= 91 && vitorias <= 100)
    {
        nivel = "Lendário";
    }
    else
    {
        nivel = "Imortal";
    }

    console.log(`\nO heroi tem de saldo de ${saldoVitorias} vitorias, você está no nível de ${nivel}`);
}