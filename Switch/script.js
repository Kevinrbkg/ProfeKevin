function start() {

let velocidad = Number(document.getElementById("speed").value);

if(velocidad>=81){
    multa = 600;
    puntos = 6;
    tipo = "Muy grave";
} else if(velocidad>=71){
    multa =  500;
    puntos = 6;
    tipo = "Grave";
} else if(velocidad>=61){
    multa =  400;
    puntos = 4;
    tipo = "Grave";
} else if(velocidad>=51){
    multa =  300;
    puntos = 2;
    tipo = "Grave";
} else if(velocidad>=31){
    multa =  100;
    puntos = 0;
    tipo = "Grave";
} else {
    multa =  0;
    puntos = 0;
    tipo = "";
}
if(tipo == ""){
    document.getElementById("result").innerText = "Muchas gracias por respetar los límites.";
} else {
    document.getElementById("result").innerText = "Infraccion " + tipo + " con " + multa + "€ de multa y " + puntos + " puntos del carnet";
}


}