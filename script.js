console.log('Hello World!');

const cartonInput = document.getElementById("cartonInput");
const fourPersonLow = document.getElementById("fourPersonLow");
const fourPersonHigh = document.getElementById("fourPersonHigh");
const fivePersonLow = document.getElementById("fivePersonLow");
const fivePersonHigh = document.getElementById("fivePersonHigh");
const sixPersonLow = document.getElementById("sixPersonLow");
const sixPersonHigh = document.getElementById("sixPersonHigh");

cartonInput.addEventListener("keyUp", () => {
  let cartons = cartonInput.value;
  fourPersonLow.innerHTML = "1";
  fourPersonHigh.innerHTML = "2";
  fivePersonLow.innerHTML = "3";
  fivePersonHigh.innerHTML = "4";
  sixPersonLow.innerHTML = "5";
  sixPersonHigh.innerHTML = "6";
});
