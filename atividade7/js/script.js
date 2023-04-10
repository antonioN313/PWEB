// Selecionando os botões
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

// Adicionando os eventos de clique nos botões
rockBtn.addEventListener("click", playGame);
paperBtn.addEventListener("click", playGame);
scissorsBtn.addEventListener("click", playGame);

// Função principal do jogo
function playGame(event) {
	// Selecionando a escolha do usuário
	const userChoice = event.target.id;

	// Selecionando a escolha do computador
	const computerChoice = getComputerChoice();

	// Determinando o vencedor
	const result = determineWinner(userChoice, computerChoice);

	// Exibindo o resultado na página
	displayResult(result, computerChoice);
}

// Função para selecionar a escolha do computador
function getComputerChoice() {
	const randomNumber = Math.floor(Math.random() * 3);

	if (randomNumber === 0) {
		return "Pedra";
	} else if (randomNumber === 1) {
		return "Papel";
	} else {
		return "Tessoura";
	}
}

// Função para determinar o vencedor
function determineWinner(userChoice, computerChoice) {
	if (userChoice === computerChoice) {
		return "Empate";
	} else if (userChoice === "Pedra" && computerChoice === "Tessoura") {
		return "Voce ganhou! Pedra quebra tesoura.";
	} else if (userChoice === "Tessoura" && computerChoice === "Papel") {
		return "Voce ganhou! Tesoura corta papel.";
	} else if (userChoice === "Papel" && computerChoice === "Pedra") {
		return "Voce ganhou! Papel cobre a pedra.";
	} else {
		return "Voce perdeu!";
	}
}

// Função para exibir o resultado na página
function displayResult(result, computerChoice) {
	const resultDiv = document.getElementById("result");

	if (result === "Empate") {
        resultDiv.innerHTML = "Empate! O computador escolheu " + computerChoice + ".";
    } else {
        resultDiv.innerHTML = result + " O computador escolheu " + computerChoice + ".";
    }
}    
