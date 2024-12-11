function check() {
    let a = document.getElementById("passwd").value;
    if (a.length >= 8) {
        document.getElementById("passwd").style.outline = "1px solid green";
    } else {
        document.getElementById("passwd").style.outline = "1px solid red";
    }
}