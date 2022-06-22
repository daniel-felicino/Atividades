function iniciar() {

    var rest = " ";
    var num = 0;

    while (num <= 10) {

        if (num % 2 == 0) {

            document.getElementById("para").innerHTML += `<mark> ${num} </mark>`

        } else {
            document.getElementById("para").innerHTML += num

        }
        rest += num
        num++

    }
}

function pares() {
    var rest = " ";
    var num = 0;
    while (num <= 10) {

        if (num % 2 == 0) {

            document.getElementById("para").innerHTML += `<mark> ${num}  </mark>`

        }
        rest += num
        num++
    }
}

function regressiva() {

    var num = 10;

    while (num >= 1) {
        document.getElementById("para").innerHTML += `<mark> ${num} </mark>`
        num--
    }
}


