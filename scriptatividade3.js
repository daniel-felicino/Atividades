function iniciar() {

    var n1 = prompt("Digite um numero");
    var res = (parseInt(n1));

    var p = document.getElementById('para')

    if (res % 2 == 0) {

        p.innerHTML = "O número " + res + " que foi digitado é" +  " " + " <strong> Par </strong>";


    } else {

        p.innerHTML = "O número " + res + " que foi digitado é" + " " + " <strong> Impar </strong>";

    }
}