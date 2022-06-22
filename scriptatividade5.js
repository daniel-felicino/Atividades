

function iniciar() {
// var d = new Date(); 
// var dia = d.getDate();
// var mes=d.getMonth();
// var ano = d.getFullYear();
// var hora = d.getHours();
// var minutos =d.getMinutes();
// var segundos=d.getSeconds();
// document.getElementById("para").innerHTML =`<p>Horario do sistema: <mark>${dia +"/"+ mes +"/" + ano +" " + hora + ":"+ minutos+ ":" + segundos}</mark> </p>`


var data = new Date()
document.getElementById("para").innerHTML=`<p> Horario do sistema: <mark>${data} </mark></p>`
}