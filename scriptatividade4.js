function iniciar() {

    var n1 = prompt("Digite o primeiro numero");
    var n2 = prompt("Digite o primeiro numero");
    var res1 = (parseInt(n1));
    var res2 = (parseInt(n2));
    var para = document.getElementById("para")
    if (res1 == res2) {

        para.innerHTML = "Analisando os valores " + n1 + " e " + n2 + " " + "ambos são" + "<strong> Iguais </strong>";

    }else if( res1 > res2){

        para.innerHTML = "Analisando os valores " + n1 + " e " + n2 + " " + "o maior é o valor" +  `<strong> ${ res1} </strong>`;

    }else if (res1 < res2){

        para.innerHTML = "Analisando os valores " + n1 + " e " + n2 + " " + "o maior é o valor" +  `<strong> ${ res2} </strong>`;

    }
}