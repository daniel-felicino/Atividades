function iniciar() {
    var input = Number(document.getElementById("valor").value)
    var rest = document.getElementById("para")
    var tabuada = 1;
    while (tabuada <= 10) {

        rest.innerHTML += `${input} x ${tabuada} = <strong> ${input * tabuada}<strong><br>`
        tabuada++
    }
}

