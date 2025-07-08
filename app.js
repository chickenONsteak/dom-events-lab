/*-------------------------------- Constants --------------------------------*/
const calculator = document.querySelector("#calculator");
const display = document.querySelector(".display");
display.innerText = 0; // display "0" by default

/*-------------------------------- Variables --------------------------------*/
const selectedOperator = [];
const currentNumber = [];
const selectedNumbers = [];
let objKey = 1;

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
calculator.addEventListener("click", function (event) {
  if (event.target.className === "button number") {
    currentNumber.push(event.target.innerText);
    display.innerText = currentNumber.join(""); // display the joined set of numbers selected
    // console.log(currentNumber);
  } else if (
    // if user presses any buttons besides a number
    event.target.className === "button operator" ||
    event.target.className === "button equals"
  ) {
    const fullNumber = Number(currentNumber.join("")); // join the numbers together and push into fullNumber
    selectedNumbers.push(fullNumber);
    // console.log(fullNumber);
    currentNumber.length = 0; // empty out currentNumber
  }
  if (event.target.innerText === "C") {
    // if "C" is selected, will hit this if condition first before the else if below
    selectedNumbers.length = 0; // empty out selectedNumbers AND selectedOperator
    selectedOperator.length = 0;
    display.innerText = 0; // display "0" again
  } else if (event.target.className === "button operator") {
    selectedOperator.push(event.target.innerText);
    display.innerText = selectedOperator[0];
    // console.log(selectedOperator);
  }
  if (event.target.innerText === "=") {
    switch (selectedOperator[0]) {
      case "+":
        display.innerText = addition(selectedNumbers[0], selectedNumbers[1]);
        break;
      case "-":
        display.innerText = subtraction(selectedNumbers[0], selectedNumbers[1]);
        break;
      case "*":
        display.innerText = multiplication(
          selectedNumbers[0],
          selectedNumbers[1]
        );
        break;
      case "/":
        display.innerText = division(selectedNumbers[0], selectedNumbers[1]);
        break;
    }
  }
  // console.log(selectedNumbers);
});
/*-------------------------------- Functions --------------------------------*/
const addition = (a, b) => a + b;
const subtraction = (a, b) => a - b;
const multiplication = (a, b) => a * b;
const division = (a, b) => a / b;
