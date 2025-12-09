document.getElementById("maiuscula").onclick = function () {
  let texto = document.getElementById("entrada").value;
  document.getElementById("resultado").innerText = texto.toUpperCase();
};

document.getElementById("minuscula").onclick = function minuscula() {
  let texto = document.getElementById("entrada").value;
  document.getElementById("resultado").innerText = texto.toLowerCase();
};
document.getElementById("removerespaço").onclick = function () {
  let texto = document.getElementById("entrada").value;
  document.getElementById("resultado").innerText = texto.trim();
};

document.getElementById("cortar").onclick = function () {
  let texto = document.getElementById("entrada").value;
  document.getElementById("resultado").innerText = texto.slice(0, 4);
};

document.getElementById("trocar").onclick = function () {
  let texto = document.getElementById("entrada").value;
  document.getElementById("resultado").innerText = texto.replace(
    "teste",
    "exemplo"
  );
};
