document.getElementById("Btn").onclick = function() {
    let nota = document.getElementById("Nota").value;
    switch (nota) {
        case "10":
        case "9":
        case "8":
        case "7":
            (alert("Excelente!"));
            break;        
        case "6":
        case "5":
            (alert("Pode melhorar!!"));
            break;
        case "4":
        case "3":
        case "2":
        case "1":
        case "0":
            (alert("Você está reprovado!!"));
            break;
        default:
            (alert("Nota inválida! Por favor, insira uma nota entre 0 e 10."));
    }
}