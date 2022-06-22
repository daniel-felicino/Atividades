function exe1() {

    var nome = prompt("Qual seu nome?")
    var n1 = prompt("Digite a primeira nota de" + " " + nome + " !");
    var n2 = prompt("Digite a segunda nota de" + " " + nome + " !");
    var notas = (parseInt(n1)) + (parseInt(n2));
    var media = notas / 2;
    var resultado = document.getElementById("resul")
    var resultado2 = document.getElementById("resul2")
    var resultado3 = document.getElementById("resul3")
    var resultado4 = document.getElementById("resul4")
    resultado.innerHTML = "Calculando a media de  " + nome;
    resultado2.innerHTML = "As notas obtidas foram " + n1 + ": " + n2;
    resultado3.innerHTML = "A média final será" + ": " + media;
    var resultado4 = document.getElementById('resul4');
    var resultado5 = document.getElementById('resul5');

    if (media >= 6) {
        
        resultado4.classList.remove("resul")

    } else {
        resultado5.classList.remove("result")
    }

}
