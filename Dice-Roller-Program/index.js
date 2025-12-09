function rollDice(){

    const DiceNumber = document.getElementById("DiceNumber").value;
    const diceResult = document.getElementById("diceResult");
     const Diceimages = document.getElementById("diceImages");
     const values = [];
     const images = [];

     for (let i = 0; i < DiceNumber; i++){     
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="Dice Images/${value}.png" alt="Dice ${value}">`);
        }


        diceResult.textContent = `dice: ${values.join(',  ')}`;
        Diceimages.innerHTML = images.join ('');
}