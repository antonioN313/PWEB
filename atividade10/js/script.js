var RA;
var Nome;

function Aluno1(RA, Nome) {
    this.RA = RA;
    this.Nome = Nome;
}
let aluno1 = new Aluno1("0030482121018","Gabriel Leite");

class Aluno2{
constructor(RA, Nome) {
this.RA = RA;
this.Nome = Nome;
}
}

var aluno3 = {};
var ra = 'RA';
var nome = 'Nome';
aluno3["RA"] = '46102121008';
aluno3["Nome"] = 'Claudo Mezer';

let aluno2 = new Aluno2("0030482121008",'Antonio Carlos');

console.log(Aluno1.RA);
console.log(Aluno1.Nome);
console.log(aluno2.RA);
console.log(aluno2.Nome);
alert(aluno3.RA);
alert(aluno3.Nome);