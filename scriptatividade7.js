

function iniciar() {

    var ano =prompt("Em que ano você nasceu?")
   var data = new Date().getFullYear();
   var idade = data - ano;
   document.getElementById("para").innerHTML= `Quem nasceu em:  ${ano}   vai completar   <strong> ${idade} </strong>   anos em   ${data} `
}