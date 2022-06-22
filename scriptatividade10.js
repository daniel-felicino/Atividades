

function iniciar() {

    var primeiro = prompt('Primeiro valor:');
    var segundo = prompt('Segundo valor:');
    var calcular = prompt(`Os valores informados são:  primeiro ${primeiro} e  segundo ${segundo} \n O que vamos fazer? \n [1] somar \n [2] Subtrair \n [3]Multiplicar \n [4]Dividir
    `);
    if (calcular == 1) {

        var somar = parseInt(primeiro) + parseInt(segundo);
        document.getElementById("para").innerHTML = "O valor calculalado é : " + somar
    } else if (calcular == 2) {
        var subtrair = parseInt(primeiro) - parseInt(segundo);
        document.getElementById("para").innerHTML = "O valor calculalado é : " + subtrair


    } else if (calcular == 3) {

        var multiplicar = parseInt(primeiro) * parseInt(segundo);
        document.getElementById("para").innerHTML = "O valor calculalado é : " + multiplicar

    } else if (calcular == 4) {
        var dividir = parseInt(primeiro) / parseInt(segundo);
        document.getElementById("para").innerHTML = "O valor calculalado é : " + dividir

    }


}