const TextBox = document.getElementById("TextBox");
const tofahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;

function convert() {
  if (tofahrenheit.checked) {
    temp = Number(TextBox.value);
    temp = temp * 9 / 5 + 32;
    result.textContent = temp.toFixed(1) + "°F"
  } else if (toCelsius.checked) {
    temp = Number(TextBox.value);
    temp = (5 / 9) * (temp - 32)
    result.textContent = temp + "°C"
  } else {
    result.textContent = "Select a unit";
  }
}
