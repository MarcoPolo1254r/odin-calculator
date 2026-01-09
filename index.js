// State object to hold the calculator's data
const state = {
  displayValue: "0",
  firstNum: null,
  waitingForSecondNum: false,
  operand: null,
};

// DOM elements
const display = document.querySelector(".display");
const buttons = document.querySelector(".buttons");

// Button layout
const buttonTextContent = [
  "7", "8", "9", "+",
  "4", "5", "6", "-",
  "1", "2", "3", "*",
  "CLEAR", "0", "=", "/",
];

// Operations
const operations = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => (b === 0 ? "Error" : a / b),
};

/* ------------------ BUTTON CREATION ------------------ */

buttonTextContent.forEach((text) => {
  const button = document.createElement("button");
  button.textContent = text;
  button.classList.add("button");
  if (["+", "-", "*", "/"].includes(text)) {
    button.classList.add("operator");
  } else if (text === "=") {
    button.classList.add("equals");
  } else if (text === "CLEAR") {
    button.classList.add("clear");
  } else {
    button.classList.add("number");
  }
  buttons.appendChild(button);
});

/* ------------------ EVENT LISTENERS ------------------ */

buttons.addEventListener("click", (event) => {
  const target = event.target;
  if (!target.matches("button")) return;

  const buttonText = target.textContent;
  
  if (target.classList.contains("operator")) {
    handleOperator(buttonText);
    return;
  }

  if (target.classList.contains("equals")) {
    handleEquals();
    return;
  }

  if (target.classList.contains("clear")) {
    handleClear();
    return;
  }

  handleDigit(buttonText);
});

/* ------------------ HANDLERS ------------------ */

function handleDigit(digit) {
  const { displayValue, waitingForSecondNum } = state;

  if (waitingForSecondNum) {
    state.displayValue = digit;
    state.waitingForSecondNum = false;
  } else {
    state.displayValue =
      displayValue === "0" ? digit : displayValue + digit;
  }
  updateDisplay();
}

function handleOperator(nextOperand) {
  const { firstNum, displayValue, operand } = state;
  const inputValue = parseFloat(displayValue);

  if (operand && state.waitingForSecondNum) {
    state.operand = nextOperand;
    return;
  }

  if (firstNum === null) {
    state.firstNum = inputValue;
  } else if (operand) {
    const result = operations[operand](firstNum, inputValue);
    state.displayValue = `${parseFloat(result.toFixed(7))}`;
    state.firstNum = result;
  }

  state.waitingForSecondNum = true;
  state.operand = nextOperand;
  updateDisplay();
}

function handleEquals() {
    const { firstNum, displayValue, operand } = state;
    const inputValue = parseFloat(displayValue);

    if (operand && !state.waitingForSecondNum) {
        const result = operations[operand](firstNum, inputValue);
        state.displayValue = `${parseFloat(result.toFixed(7))}`;
        state.firstNum = result;
        state.waitingForSecondNum = true; 
        state.operand = null;
        updateDisplay();
    }
}

function handleClear() {
  state.displayValue = "0";
  state.firstNum = null;
  state.waitingForSecondNum = false;
  state.operand = null;
  updateDisplay();
}

/* ------------------ DISPLAY ------------------ */

function updateDisplay() {
  display.textContent = state.displayValue;
}

// Initialize display
updateDisplay();