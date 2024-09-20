function calculoOperadores(){

    event.preventDefault(); // Evita que la pagina deba ser recargada

    let primerNumero = document.getElementById('primerNumero').value

    let segundoNumero = document.getElementById('segundoNumero').value

    let operador = document.getElementById('operador').value

    if(operador != "+" && "-" && "*" && "/"){
        alert("Se ha producido un error")
    }

    else{
        let resultadoCalculo = eval(primerNumero + operador + segundoNumero)
        document.getElementById('resultadoOperando').innerHTML = "<h3>" + resultadoCalculo + "</h3>";
    }

}
