function calculoOperadores(){

    event.preventDefault(); // Evita que la pagina deba ser recargada

    var primerNumero = document.getElementById('primerNumero').value

    var segundoNumero = document.getElementById('segundoNumero').value

    var operador = document.getElementById('operador').value

    if(operador != "+" && "-" && "*" && "/"){
        alert("Se ha producido un error")
    }

    else{
        var resultadoCalculo = eval(primerNumero + operador + segundoNumero)
        document.getElementById('resultadoOperando').innerHTML = "<h3>" + resultadoCalculo + "</h3>";
    }

}
