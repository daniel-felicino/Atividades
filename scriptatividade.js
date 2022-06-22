alert("Ola mundo!")

function saudacao() {

    alert("Clicou no botão")
}
function exe3() {
    var nome = prompt("Qual seu nome?");
    alert("Olá," + nome);
}
function exe4() {
    var nome = prompt("Qual seu nome?");
    var paragrafo = window.document.getElementById("paragrafo")
    paragrafo.innerHTML = "Olá," + nome + "! É um grande prazer te conhecer!"
}
function exe5() {
    var numero = prompt("Digite um número: ");
    var somando = numero * 2
    var dividindo = numero / 2
    var resultado = window.document.getElementById("res")
    resultado.innerHTML = "O dobro de " + numero + " " + "é" + " " + somando + " " + "e a metade é" + " " + dividindo

}
function exe6() {

    var n1 = prompt("Digite um numero");
    var n2 = prompt("Digite outro numero");
    var somando = (parseInt(n1)) + (parseInt(n2))
    var resultado = window.document.getElementById("soma");
    resultado.innerHTML = "A resultado é " + somando


}
function exe7() {
    var nome = prompt("Qual seu nome?");
    var n1 = prompt("Qual a primeira Nota?" + nome);
    var n2 = prompt("Além da nota" + " " + n1 + " " + "Qual a segunda Nota?" + nome);
    var somando = (parseInt(n1)) + (parseInt(n2));
    var media = somando / 2
    var resultado = window.document.getElementById("exe7");
    var resultado2 = window.document.getElementById("notas");
    var resultado3 = window.document.getElementById("total");

    resultado.innerHTML = "Calculando media " + nome + "!"
    resultado2.innerHTML = "As notas Obtidas  foram " + n1 + "," + n2
    resultado3.innerHTML = "A média final será : " + media



 }


 var contador = 0;
 var para = document.getElementById("resultado");

function contar(){

contador ++;
para.innerHTML = `<p> O Contador está com ${contador} Cliques`
}


function zerar(){

    contador = 0
    para.innerHTML = null
}

var saida =window.document.getElementById("saida")
function primeiro() {

    saida.innerHTML += "<p>Clicou no primero botão<p>"

}
function segundo() {

    
    saida.innerHTML += "<p>Clicou no segundo botão<p>"

}
function terceiro() {

    saida.innerHTML += "<p>Clicou no terceiro botão<p>"

}

function quarto() {

    saida.innerHTML += "<p>Clicou no quarto botão<p>"

}
function zerar(){

    saida.innerHTML = null
}
function novo(){

window.location.href = "index2.html"}