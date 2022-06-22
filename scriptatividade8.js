

function iniciar() {

var numero = Math.floor(Math.random()* 100) ;
var ver  = document.getElementById('para2');
ver.innerHTML += 'Acabei de pensar no número :' + numero  + "<br>"
// ultilizando += vai adiconar um a baixo do outro
}

function limpar(){

    var ver  = document.getElementById('para2');
    ver.innerHTML = null


}