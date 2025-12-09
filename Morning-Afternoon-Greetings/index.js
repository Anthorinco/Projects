document.getElementById("Btn").onclick = function () {
  let hour = document.getElementById("Time").value;
  let greeting = hour < 12 ? "Good Morning" : "Good Afternoon";
  document.getElementById("Greetings").innerHTML = greeting;
};
