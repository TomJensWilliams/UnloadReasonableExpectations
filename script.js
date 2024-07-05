console.log('Hello World!');

const cartonInput = document.getElementById("cartonInput");
const cartonButton = document.getElementById("cartonButton");
const fourPersonValue = document.getElementById("fourPersonValue");
const fivePersonValue = document.getElementById("fivePersonValue");
const sixPersonValue = document.getElementById("sixPersonValue");

cartonButton.addEventListener("click", () => {
  console.log("Hello Again!");
  let cartons = cartonInput.value;
  let valuesArray = [];
  fourPersonValue.innerHTML = "1";
  fivePersonValue.innerHTML = "3";
  sixPersonValue.innerHTML = "5";
});
