let firstNum = 0;
let secondNum = 0;
let operand = '';

const buttons = document.querySelector('.buttons');
const buttonTextContent = ['7','8','9','+','4','5','6','-','1','2','3','*','CLEAR','0','=','/'];

for(let i=0; i<=15; i++){
    const button = document.createElement('button');
    button.textContent = buttonTextContent[i];
    button.classList.add('button');
    buttons.appendChild(button);
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

console.log(operations.divide(0.3,1.92))