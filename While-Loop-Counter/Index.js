document.getElementById("Btn").onclick = function() {
    let Inicial = 1;
    let number = parseInt(document.getElementById("Numip").value);
    let resultado = "";
    while (Inicial <= number) {
     resultado += Inicial + " ";
     Inicial++;
    } 
    document.getElementById("Resultado").innerText = resultado;
}