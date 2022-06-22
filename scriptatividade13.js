function iniciar() {
var input = document.getElementById("valor")
var contar = document.getElementById('para')
var contador = 0;
while(contador <= input.value){

contar.innerHTML += `<mark> ${contador} </mark>`
contador++

}



    }


