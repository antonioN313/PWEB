let idades = [];
let opinioes = [];
let sexos = [];

function adicionarResposta() {
    
    if (idades.length >= 45) {
        alert("Limite de participantes atingido!");
        return;
    }

    let idade = parseInt(document.getElementById("idade").value);
    let sexo = document.getElementById("sexo").value;
    let opiniao = document.getElementById("opiniao").value;

    if (!isNaN(idade) && opiniao !== "") {
        idades.push(idade);
        opinioes.push(parseInt(opiniao));

        if (sexo === "0" || sexo === "1") {
            sexos.push(sexo);
        }

        atualizarResultados();
    }
}

function atualizarResultados() {
    let mediaIdade = calcularMedia(idades);
    let idadeMaisVelha = Math.max.apply(null, idades);
    let idadeMaisNova = Math.min.apply(null, idades);
    let pessimo = contarOpinioes(1,opinioes);
    let otimoBom = calcularPorcentagemOpinioes([4, 3], opinioes);
    let mulheres = contarSexo('0', sexos);
    let homens = contarSexo('1', sexos);
    
    document.getElementById("media-idade").innerText = mediaIdade.toFixed(2);
    document.getElementById("idade-mais-velha").innerText = idadeMaisVelha;
    document.getElementById("idade-mais-nova").innerText = idadeMaisNova;
    document.getElementById("pessimo").innerText = pessimo;
    document.getElementById("otimo-bom").innerText = otimoBom.toFixed(2) + "%";
    document.getElementById("mulheres").innerText = mulheres;
    document.getElementById("homens").innerText = homens;
}


function calcularMedia(idades) {
    var soma = 0;

    for (var i = 0; i < idades.length; i++) {
        soma += idades[i];
    }

    return soma / idades.length;
}

    
function contarOpinioes(opiniao, lista) {
    return lista.filter(valor => valor === opiniao).length;
}
    
function calcularPorcentagemOpinioes(opinioes, lista) {
    let totalOpinioes = contarOpinioes(opinioes[0], lista) + contarOpinioes(opinioes[1], lista);
    return (totalOpinioes / lista.length) * 100;
}
    
function contarSexo(sexo, sexos) {
    return sexos.filter(valor => valor === sexo).length;
}
