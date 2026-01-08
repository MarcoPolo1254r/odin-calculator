let firstNum = 0;
let secondNum = 0;
let operand = '';

const buttons = document.querySelector('.buttons');
const display = document.querySelector('.display')
const buttonTextContent = ['7','8','9','+','4','5','6','-','1','2','3','*','CLEAR','0','=','/'];
const operatorMap = {
  "+": "sum",
  "-": "subtract",
  "*": "multiply",
  "/": "divide",
};

const operations = {
    sum(a,b) {
        return (a+b).toFixed(3);
    },
    subtract(a,b) {
        return (a-b).toFixed(3);
    },
    multiply(a,b) {
        return (a*b).toFixed(3);
    },
    divide(a,b){
        return b ===0 ? "Invalid" : (a/b).toFixed(3);
    }
}

for(let i=0; i<=15; i++){
    const button = document.createElement('button');
    button.addEventListener("click", fillingDisplay)
    button.textContent = buttonTextContent[i];
    // Can add a ifs to clange style of operands, clear, equal and other... (remember to add later)
    button.classList.add('button');
    buttons.appendChild(button);
};

function fillingDisplay(e){
    if (e.target.textContent === 'CLEAR') {
        display.textContent = '';
        return
    }
    if (e.target.textContent === '='){
        const userInput = display.textContent;
        const userInputArray = userInput.match(/\d+|[+\-*/]/g)
        .map(v => isNaN(v) ? v : Number(v));
        firstNum = userInputArray [0];
        operand = userInputArray [1];
        secondNum = userInputArray [2];
        display.textContent = executeOperation (firstNum,operand,secondNum);         
        return 
    } 
    display.textContent += e.target.textContent
}

function executeOperation (a,operator,b) {
    const method = operatorMap[operator];
    return operations[method](a,b);
}

console.log(operations.divide(0.3,1.92))