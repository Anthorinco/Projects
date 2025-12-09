const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const PayPalBtn = document.getElementById("PayPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const payResult = document.getElementById("payResult");

mySubmit.onclick = function() {
    if (myCheckBox.checked) {
        subResult.textContent = `Você está inscrito`;
    } else {
        subResult.textContent = `Você não está inscrito`;
    }
    if(visaBtn.checked) {
        payResult.textContent = `Você escolheu pagar com Visa`;

    } else if(masterCardBtn.checked) {
        payResult.textContent = `Você escolheu pagar com MasterCard`;

    } else if(PayPalBtn.checked) {
        payResult.textContent = `Você escolheu pagar com PayPal`;
    } else {
        payResult.textContent = `Você não escolheu nenhum método de pagamento`;

    }
}
