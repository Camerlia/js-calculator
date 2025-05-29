const number1Input = document.getElementById("number1");
const addBtn = document.getElementById("addBtn");
const resultDisplay = document.getElementById("resultDisplay");

function performOperation() {
  const num1Str = number1Input.value;
  const num1 = Number(num1Str);

  if (isNaN(num1)) {
    resultDisplay.textContent = "Invalid number entered.";
    return;
  }
  if(num1 <= 0){
    resultDisplay.textContent = "no negative number allowed"
    return;
  }

  let result = num1;

  resultDisplay.textContent = `Result: ${result}`;
}

addBtn.addEventListener("click", performOperation);

resultDisplay.textContent = "Enter a number and click 'Display Number'";
