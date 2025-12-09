document.getElementById("Btn").onclick = function() {
    let number = parseInt(document.getElementById("Numip").value);
    let resultado = "";
    for (let Inicial = number; Inicial <=number +10; Inicial++)  {
     resultado += Inicial + " ";
    } 
    document.getElementById("Resultado").innerText = resultado;
}