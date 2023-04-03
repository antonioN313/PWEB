function calcularOp() {
    const num1 = parseFloat(prompt("Digite a primeiro numero:"));
    const num2 = parseFloat(prompt("Digite a segundo numero:"));
    

    const soma = num1 + num2;
    const subtracao = num1 - num2;
    const produto = num1 * num2;
    const divisao = num1 / num2;
    const resto = num1 % num2;

    const mensagem = `Soma: ${soma}\nSubtração: ${subtracao}\nProduto: ${produto}\nDivisão: ${divisao}\nResto: ${resto}`;

    alert(mensagem);
  }