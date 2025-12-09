document.getElementById("Generator").onclick = function() {
  const min = 1;
  const max = 99;

  let RandomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  
  document.getElementById("Number").textContent = RandomNumber;
};