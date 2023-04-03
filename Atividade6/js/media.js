function calcularMedia() {
    const nome = prompt("Digite o nome do aluno:");
    const nota1 = parseFloat(prompt("Digite a primeira nota:"));
    const nota2 = parseFloat(prompt("Digite a segunda nota:"));
    const nota3 = parseFloat(prompt("Digite a terceira nota:"));

    const media = (nota1 + nota2 + nota3) / 3;

    const mensagem = `${nome}, sua média é ${media.toFixed(2)}`;

    alert(mensagem);
  }