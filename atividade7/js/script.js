// Selecionando os botões
const pedraBtn = document.getElementById("pedra");
const papelBtn = document.getElementById("papel");
const tessouraBtn = document.getElementById("tessoura");

// Adicionando os eventos de clique nos botões
pedraBtn.addEventListener("click", Jogo);
papelBtn.addEventListener("click", Jogo);
tessouraBtn.addEventListener("click", Jogo);

// Função principal do jogo
function Jogo(event) {
	// Selecionando a escolha do usuário
	const usuario = event.target.id;

	// Selecionando a escolha do computador
	const computador = getComputador();

	// Determinando o vencedor
	const resultado = Vencedor(usuario, computador);

	// Exibindo o resultadoado na página
	resultado(resultado, computador);
}

// Função para selecionar a escolha do computador
function getComputador() {
	const aleatorio = Math.floor(Math.random() * 3);

	if (aleatorio === 0) {
		return "Pedra";
	} else if (aleatorio === 1) {
		return "Papel";
	} else {
		return "Tessoura";
	}
}

// Função para determinar o vencedor
function Vencedor(usuario, computador) {
	if (usuario === computador) {
		return "Empate";
	} else if (usuario === "Pedra" && computador === "Tessoura") {
		return "Voce ganhou! Pedra quebra tesoura.";
	} else if (usuario === "Tessoura" && computador === "Papel") {
		return "Voce ganhou! Tesoura corta papel.";
	} else if (usuario === "Papel" && computador === "Pedra") {
		return "Voce ganhou! Papel cobre a pedra.";
	} else {
		return "Voce perdeu!";
	}
}

// Função para exibir o resultadoado na página
function resultadoado(resultado, computador) {
	const resulDiv = document.getElementById("resultado");

	if (resultado === "Empate") {
        resulDiv.innerHTML = "Empate! O computador escolheu " + computador + ".";
    } else {
        resulDiv.innerHTML = resultado + " O computador escolheu " + computador + ".";
    }
}    
