const minNumber = 1;
const maxNumber = 50;
const answer =
  Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

let attempts = 0;
let guess;
let running = true;

while (running) {
  guess = window.prompt(`Adivinhe o número entre ${minNumber} e ${maxNumber}:`);
  guess = Number(guess);
  if (guess < minNumber || guess > maxNumber || isNaN(guess)) {
    window.alert(
      `Por favor, insira um número válido entre ${minNumber} e ${maxNumber}.`
    );
    continue;
  }
  attempts++;
  if (guess < answer) {
    window.alert("Muito baixo! Tente novamente.");
  } else if (guess > answer) {
    window.alert("Muito alto! Tente novamente.");
  } else {
    window.alert(
      `Parabéns! Você acertou a resposta era ${answer}, com um total de ${attempts} tentativas`
    );
    break;
  }
}
