document.getElementById("Btn").onclick = function() {
    let inputText = document.getElementById("inputField").value;
    let textoformatado = inputText.trim().toLowerCase().replace("javascript", "JS").slice(0, 20);
    alert(textoformatado);
}