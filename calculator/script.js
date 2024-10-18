let display = document.getElementById('display');
let currentInput = '';
let operator = null;

function typeNumber(number) {
    currentInput += number;
    display.textContent = currentInput;
}

function appendOperator(op) {
    if (currentInput !== '') {
        currentInput += ` ${op} `;
        display.textContent = currentInput;
    }
}

function calculate() {
    try {
        currentInput = eval(currentInput.replace('%', '/100')).toString();
        display.textContent = currentInput;
    } catch (error) {
        display.textContent = "Error";
        currentInput = '';
    }
}

function clearDisplay() {
    currentInput = '';
    display.textContent = '';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    display.textContent = currentInput;
}
