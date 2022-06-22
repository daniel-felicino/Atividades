

function iniciar() {

var adivinha = prompt('Qual é o seu palpite?')
var numero = Math.floor(Math.random()*10)
if(adivinha ==numero){

document.getElementById("para2").innerHTML += "Parabens Você acertou <br>"
}else if(adivinha < numero ){

    document.getElementById("para2").innerHTML += "Meu numero é maior <br>"
}else if(adivinha > numero ){

    document.getElementById("para2").innerHTML += "Meu numero é menor <br>"
}

}

