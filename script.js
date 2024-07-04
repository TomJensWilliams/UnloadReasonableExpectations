console.log('Hello World!');

const cartonInput = document.getElementById("cartonInput");
const fourPersonLow = document.getElementzById("fourPersonLow");
const fourPersonHigh = document.getElementzById("fourPersonHigh");
const fivePersonLow = document.getElementzById("fivePersonLow");
const fivePersonHigh = document.getElementzById("fivePersonHigh");
const sixPersonLow = document.getElementzById("sixPersonLow");
const sixPersonHigh = document.getElementzById("sixPersonHigh");

cartonInput.addEventListener("keyUp", () => {
  let cartons = cartonInput.value;
  fourPersonLow.innerHTML = "1";
  fourPersonHigh.innerHTML = "2";
  fivePersonLow.innerHTML = "3";
  fivePersonHigh.innerHTML = "4";
  sixPersonLow.innerHTML = "5";
  sixPersonHigh.innerHTML = "6";
});
