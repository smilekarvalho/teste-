import promptSync from "prompt-sync";

const prompt = promptSync();

while (true) {
  const input = prompt("Digite uma operação (ex: 5 + 3) ou 'sair': ");

  if (input.toLowerCase() === "sair") {
    console.log("Encerrando...");
    break;
  }

  const partes = input.split(" ");

  if (partes.length !== 3) {
    console.log("Formato inválido. Use: número operador número");
    continue;
  }

  const num1 = parseFloat(partes[0]);
  const operador = partes[1];
  const num2 = parseFloat(partes[2]);

  let resultado: number;

  switch (operador) {
    case "+":
      resultado = num1 + num2;
      break;
    case "-":
      resultado = num1 - num2;
      break;
    case "*":
      resultado = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        console.log("Erro: divisão por zero");
        continue;
      }
      resultado = num1 / num2;
      break;
    default:
      console.log("Operador inválido!");
      continue;
  }

  console.log(`Resultado: ${resultado}`);
}
