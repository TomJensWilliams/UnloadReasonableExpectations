console.log('Hello World!');

const cartonInput = document.getElementById("cartonInput");
const cartonButton = document.getElementById("cartonButton");
const fourPersonValue = document.getElementById("fourPersonValue");
const fivePersonValue = document.getElementById("fivePersonValue");
const sixPersonValue = document.getElementById("sixPersonValue");

cartonButton.addEventListener("click", () => {
  console.log("Hello Again!");
  let currentCartons = cartonInput.value;
  let valueFunction = function (peopleInput, cartonInput) {
    let rateValue, constantValue;
    if(peopleInput === 4) {
      if(cartonInput <= 1000) {
        rateValue = 500 / 31;
        constantValue = -18500 / 31;
      } else if(cartonInput <= 1500) {
        rateValue = 500 / 32;
        constantValue = -546.875;
      } else if(cartonInput <= 2000) {
        rateValue = 500 / 32;
        constantValue = -546.875;
      } else if(cartonInput <= 2500) {
        rateValue = 500 / 32;
        constantValue = -546.875;
      } else { // Assuming cartons cannot excede 3000
        rateValue = 500 / 32;
        constantValue = -546.875;
      }
    } else if(peopleInput === 5) {
      if(cartonInput <= 1000) {
        rateValue = 500 / 25;
        constantValue = -580;
      } else if(cartonInput <= 1500) {
        rateValue = 500 / 26;
        constantValue = -13500 / 26;
      } else if(cartonInput <= 2000) {
        rateValue = 500 / 25;
        constantValue = -600;
      } else if(cartonInput <= 2500) {
        rateValue = 500 / 26;
        constantValue = -500;
      } else { // Assuming cartons cannot excede 3000
        rateValue = 500 / 25;
        constantValue = -620;
      }
    } else { // Assuming that the truck will be worked by 4, 5, or 6 people.
      if(cartonInput <= 1000) {
        rateValue = 500 / 21;
        constantValue = 0;
      } else if(cartonInput <= 1500) {
        rateValue = 500 / 21;
        constantValue = 0;
      } else if(cartonInput <= 2000) {
        rateValue = 500 / 22;
        constantValue = 0;
      } else if(cartonInput <= 2500) {
        rateValue = 500 / 21;
        constantValue = 0;
      } else { // Assuming cartons cannot excede 3000
        rateValue = 500 / 22;
        constantValue = 0;
      }
    }
    return (cartonInput - constantValue) / rateValue;
  }
  fourPersonValue.innerHTML = valueFunction(4, currentCartons);
  fivePersonValue.innerHTML = valueFunction(5, currentCartons);
  sixPersonValue.innerHTML = valueFunction(6, currentCartons);
});
