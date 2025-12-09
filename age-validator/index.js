const mytext = document.getElementById("myText");
const mysubmit = document.getElementById("mySubmit");
const resultelement = document.getElementById("resultElement");
let age = 0;

mysubmit.onclick = function(){

    age = mytext.value;
    age = Number(age);
  if (age >= 100) {
    resultelement.textContent =  `Sai do site veio coroca`;
  } else if (age == 0) {
    resultelement.textContent = `voce é um bebê`;
  } else if (age >= 18) {
    resultelement.textContent = `voce é maior de idade`;
  } else if (age < 0) {
    resultelement.textContent = `Sua idade não pode ser menor que 0`;
  } else {
    resultelement.textContent = `voce é menor de idade`;
  }
}
