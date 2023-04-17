var num = new Array(3);

for (let index = 0; index < num.length; index++) {
    var numero = prompt("Digite um numero: ");
    numero = parseInt(numero);
    num[index] = numero;
}

alert("Maior Numero entre os três:"+ maiorValor(num));
alert("Os números em ordem crescente são: " + ordemCrescente(num).join(", "));

function maiorValor(num) {
  let maior = num[0];
  for (let i = 1; i < num.length; i++) {
    if (num[i] > maior) {
      maior = num[i];
    }
  }
  return maior;
}

function ordemCrescente(num) {
    num.sort(function(a, b) {
      return a - b;
    });
    return num;
}