let Mult = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

document.getElementById("Btn").onclick = function () {
  let number = parseInt(document.getElementById("Value").value);

let Resultado = ""

Mult.forEach(function(tabuada) {
    Resultado += `${number} x ${tabuada} = ${number * tabuada}\n `;
});
document.getElementById("Resultado").textContent = Resultado;};
 