console.log('Hello World!');

const cartonInput = document.getElementById("cartonInput");
const cartonButton = document.getElementById("cartonButton");
const fourPersonValue = document.getElementById("fourPersonValue");
const fivePersonValue = document.getElementById("fivePersonValue");
const sixPersonValue = document.getElementById("sixPersonValue");

cartonButton.addEventListener("click", () => {
  console.log("Hello Again!");
  let currentCartons = cartonInput.value;
  let valueFunction(peopleInput, cartonInput) {
    let rateValue, constantValue;
    if(peopleInput === 4) {
      if(cartonInput <= 1000) {
        rateValue = ;
        constantValue = ;
      } else if(cartonInput <= 1500) {
        rateValue = ;
        constantValue = ;
      } else if(cartonInput <= 2000) {
        rateValue = ;
        constantValue = ;
      } else if(cartonInput <= 2500) {
        rateValue = ;
        constantValue = ;
      } else { // Assuming cartons cannot excede 3000
        rateValue = ;
        constantValue = ;
      }
    } else if(peopleInput === 5) {
      if(cartonInput <= 1000) {
        rateValue = ;
        constantValue = ;
      } else if(cartonInput <= 1500) {
        rateValue = ;
        constantValue = ;
      } else if(cartonInput <= 2000) {
        rateValue = ;
        constantValue = ;
      } else if(cartonInput <= 2500) {
        rateValue = ;
        constantValue = ;
      } else { // Assuming cartons cannot excede 3000
        rateValue = ;
        constantValue = ;
      }
    } else { // Assuming that the truck will be worked by 4, 5, or 6 people.
      if(cartonInput <= 1000) {
        rateValue = ;
        constantValue = ;
      } else if(cartonInput <= 1500) {
        rateValue = ;
        constantValue = ;
      } else if(cartonInput <= 2000) {
        rateValue = ;
        constantValue = ;
      } else if(cartonInput <= 2500) {
        rateValue = ;
        constantValue = ;
      } else { // Assuming cartons cannot excede 3000
        rateValue = ;
        constantValue = ;
      }
    }
    return (cartonInput - constantValue) / rateValue;
  }
  fourPersonValue.innerHTML = valueFunction(4, currentCartons);
  fivePersonValue.innerHTML = valueFunction(5, currentCartons);
  sixPersonValue.innerHTML = valueFunction(6, currentCartons);
});
