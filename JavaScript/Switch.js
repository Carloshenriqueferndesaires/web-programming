const readline = require('readline');

const leitura = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function pergunta(texto) {
  return new Promise(resolve => leitura.question(texto, resolve));
}

async function calculadora() {
  console.log("Escolha uma opção:");
  console.log("1 - Soma");
  console.log("2 - Subtração");
  console.log("3 - Multiplicação");
  console.log("4 - Divisão");

  let valor = parseInt(await pergunta("Digite o número da operação: "));
  let num1 = parseFloat(await pergunta("Digite o primeiro número: "));
  let num2 = parseFloat(await pergunta("Digite o segundo número: "));
  let resultado;

  switch (valor) {
    case 1:
      resultado = num1 + num2;
      console.log(`A soma de ${num1} + ${num2} é igual a ${resultado}`);
      break;
    case 2:
      resultado = num1 - num2;
      console.log(`A subtração de ${num1} - ${num2} é igual a ${resultado}`);
      break;
    case 3:
      resultado = num1 * num2;
      console.log(`A multiplicação de ${num1} * ${num2} é igual a ${resultado}`);
      break;
    case 4:
      if (num2 === 0) {
        console.log("Erro: divisão por zero!");
      } else {
        resultado = num1 / num2;
        console.log(`A divisão de ${num1} / ${num2} é igual a ${resultado}`);
      }
      break;
    default:
      console.log("Operação inválida");
  }

  leitura1.close();
}

calculadora();

