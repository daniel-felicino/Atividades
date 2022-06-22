

function iniciar() {
var d = new Date(); 
var dia = d.getDate();
var mes=d.getMonth();
var ano = d.getFullYear();
var hora = d.getHours();
var minutos =d.getMinutes();
var segundos=d.getSeconds();



document.getElementById("para").innerHTML="Dia:" +  `<mark>${dia }</mark>`
document.getElementById("para1").innerHTML="Mes:" +  `<mark>${mes }</mark>`
document.getElementById("para2").innerHTML="Ano:" +  `<mark>${ano }</mark>`
document.getElementById("para3").innerHTML="Hora:" +  `<mark>${hora }</mark>`
document.getElementById("para4").innerHTML="Minutos:" +  `<mark>${minutos }</mark>`
document.getElementById("para5").innerHTML="Segundos:" +  `<mark>${segundos }</mark>`

}