function check() {
    let a = Number(document.getElementById("igual").value);
    if (a >= 18) {
        document.getElementById("si").innerText = "Puedes entrar cabroncete buena paja.";
    } else {
        document.getElementById("si").innerText = "No no, no paja for you.";
    }
}