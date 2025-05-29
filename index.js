const number1Input = document.getElementById("number1");
const number2Input = document.getElementById("number2");
const addBtn = document.getElementById("addBtn");
const subtractBtn = document.getElementById("subtractBtn");
const multiplyBtn = document.getElementById("multiplyBtn");
const divideBtn = document.getElementById("divideBtn");
const resultDisplay = document.getElementById("resultDisplay");

function performOperation(operator) {
  const num1Str = number1Input.value;
  const num2Str = number2Input.value;

  const num1 = Number(num1Str);
  const num2 = Number(num2Str);

  let result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 === 0 || num1 === 0) {
        alert("this cannot divide by zero!");
        return;
      }
      result = num1 / num2;
      break;
    default:
      alert("Invalid operator.");
      return;
  }

  resultDisplay.textContent = `Result: ${result}`;
  
}

addBtn.addEventListener("click", () => performOperation("+"));
subtractBtn.addEventListener("click", () => performOperation("-"));
multiplyBtn.addEventListener("click", () => performOperation("*"));
divideBtn.addEventListener("click", () => performOperation("/"));

resultDisplay.textContent = "Enter numbers";
