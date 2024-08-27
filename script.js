// Define the operations as a JSON object
const operationsJSON = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => {
        if (b === 0) return 'Error'; // Handling division by zero
        return a / b;
    }
};

// Create an object to manage the calculator state
const calculator = {
    num1: null,
    num2: null,
    operation: null,

    setNum1(value) {
        this.num1 = parseFloat(value);
    },
    
    setNum2(value) {
        this.num2 = parseFloat(value);
    },

    setOperation(op) {
        this.operation = op;
    },

    calculate(callback) {
        if (isNaN(this.num1) || isNaN(this.num2)) {
            callback('Error');
            return;
        }

        const result = operationsJSON[this.operation](this.num1, this.num2);
        callback(result);
    }
};

// Function to get values from the inputs and perform the calculation
function calculateResult() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const operation = document.getElementById('operation').value;
    const resultBox = document.getElementById('result');

    calculator.setNum1(num1);
    calculator.setNum2(num2);
    calculator.setOperation(operation);

    calculator.calculate((result) => {
        resultBox.textContent = result;
    });
}
