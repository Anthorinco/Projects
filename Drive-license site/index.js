document.getElementById("Submit").onclick = function () {
    if (document.getElementById("Age").value >= 18) {
        document.getElementById("Result").innerHTML =
            "You are eligible to apply for a driving license.";
    } else {
        document.getElementById("Result").innerHTML =
            "You are not eligible to apply for a driving license.";
    }
}