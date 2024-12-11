function sumar() {
    //Operación suma
    let a = Number(document.getElementById("n1").value);
    let b = Number(document.getElementById("n2").value);
    let resultado = a + b;
    document.getElementById("result").innerText = resultado;
        // Desaparecer botones
    console.log(resultado)
    // Suma se va
    document.getElementById("suma").style.visibility = "hidden";
    // Resta vuelve
    document.getElementById("resta").style.visibility = "visible";
    // Multi vuelve
    document.getElementById("multiplica").style.visibility = "visible";
    // Dividir vuelve
    document.getElementById("divide").style.visibility = "visible";
}
console.log(a)
function restar() {
    //Operación resta
    let c = Number(document.getElementById("n1").value);
    let d = Number(document.getElementById("n2").value);
    let resultado = c - d;
    document.getElementById("result").innerText = resultado;
        // Desaparecer botones

    // Suma vuelve
    document.getElementById("suma").style.visibility = "visible";
    // Resta se va
    document.getElementById("resta").style.visibility = "hidden";
    // Multi vuelve
    document.getElementById("multiplica").style.visibility = "visible";
    // Dividir vuelve
    document.getElementById("divide").style.visibility = "visible";
}

function multi() {
    //Operación multiplicación
    let e = Number(document.getElementById("n1").value);
    let f = Number(document.getElementById("n2").value);
    let resultado = e * f;
    document.getElementById("result").innerText = resultado;
        // Desaparecer botones

    // Suma vuelve
    document.getElementById("suma").style.visibility = "visible";
    // Resta vuelve
    document.getElementById("resta").style.visibility = "visible";
    // Multi se va
    document.getElementById("multiplica").style.visibility = "hidden";
    // Dividir vuelve
    document.getElementById("divide").style.visibility = "visible";
}

function dividir() {
    //Operación dividir
    let g = Number(document.getElementById("n1").value);
    let h = Number(document.getElementById("n2").value);
    let resultado = g / h;
    document.getElementById("result").innerText = resultado;
        // Desaparecer botones

    // Suma vuelve
    document.getElementById("suma").style.visibility = "visible";
    // Resta vuelve
    document.getElementById("resta").style.visibility = "visible";
    // Multi vuelve
    document.getElementById("multiplica").style.visibility = "visible";
    // Dividir se va
    document.getElementById("divide").style.visibility = "hidden";
}