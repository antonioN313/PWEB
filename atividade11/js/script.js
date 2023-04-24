let x = parseInt(prompt("Valor para X:"));
let y = parseInt(prompt("Valor para y:"));

function retanguloArea(x, y) {
    this.x = x;
    this.y = y;

    return this.x * this.y;
}

alert("Valor da area "+retanguloArea(x,y)+ "m^2");

function Conta (){
    this.setnome = function (nomeConta) {
        this.nome = nomeConta;
    }
    this.setBanco = function(banco){
        this.Banco = banco;
    }
    this.setnumConta = function (numeroConta) {
        this.numConta = numeroConta;
    };
    this.setSaldo = function(saldo){
        this.saldo = saldo;
    }
    this.getNome = function(){
        return this.nome;
    }
    this.getBanco = function(){
        return this.banco;
    };
    this.getNumConta = function(){
        return this.numConta;
    }
    this.getSaldo = function(){
        return this.saldo;
    }
}
function Corrente(){ 

    this.getSaldoEspecial = function(){
        return this.saldoEspecial;
    }

    this.setSaldoEspecial = function(saldoEspecial){
        this.saldoEspecial = saldoEspecial;
    }
}

function Poupanca(){ 
    
    this.getJuros = function(){
        return this.juros;
    }
    
    this.setJuros = function(juros){
        this.juros = juros;
    }

    this.getDataVencimento = function(){
        return this.dataVencimento;
    }
    
    this.setDataVencimento = function(dataVencimento){
        this.dataVencimento = dataVencimento;
    }
}

Corrente.prototype = new Conta();
Poupanca.prototype = new Conta();

ContaCorrente = new Corrente();
ContaPoupanca = new Poupanca();

ContaCorrente.setnome("Lucas Vitalli");
ContaCorrente.setBanco("Itau");
ContaCorrente.setnumConta("255");
ContaCorrente.setSaldo(2780);
ContaCorrente.setSaldoEspecial(11111);

ContaPoupanca.setnome("Maria gladys");
ContaPoupanca.setBanco("Unibanco");
ContaPoupanca.setnumConta("53");
ContaPoupanca.setSaldo(20);
ContaPoupanca.setJuros(25);
ContaPoupanca.setDataVencimento("25/05/2023");

document.write("Dados da conta corrente:<br>Nome: " + ContaCorrente.getNome() + 
                "<br>Banco: " + ContaCorrente.getBanco() + 
                "<br>Número da Conta: " + ContaCorrente.getNumConta() +
                "<br>Saldo: " + ContaCorrente.getSaldo() +
                "<br>Saldo Especial: " + ContaCorrente.getSaldoEspecial());

document.write("<br><br>Dados da conta poupança:<br>Nome: " + ContaPoupanca.getNome() + 
                "<br>Banco: " + ContaPoupanca.getBanco() + 
                "<br>Número da Conta: " + ContaPoupanca.getNumConta() +
                "<br>Saldo: " + ContaPoupanca.getSaldo() +
                "<br>Juros: " + ContaPoupanca.getJuros() +
                "<br>Data de vencimento: " + ContaPoupanca.getDataVencimento());