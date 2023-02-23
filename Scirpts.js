let num1 = "";
let num2 = "";
let operator = "";
let result = "";

function updateResult() {
    document.getElementById("result").value = result;
}

function clearResult() {
    num1 = "";
    num2 = "";
    operator = "";
    result = "";
    updateResult();
}

function handleNumberClick(e) {
    const number = e.target.textContent;
    if (operator) {
        num2 += number;
    } else {
        num1 += number;
    }
    result += number;
    updateResult();
}

function handleOperatorClick(e) {
    operator = e.target.textContent;
    result += operator;
    updateResult();
}

function handleDecimalClick() {
    if (operator) {
        if (!num2.includes(".")) {
            num2 += ".";
            result += ".";
            updateResult();
        }
    } else {
        if (!num1.includes(".")) {
            num1 += ".";
            result += ".";
            updateResult();
        }
    }
}

function handleClearClick() {
    clearResult();
}

function handleEqualClick() {
    let num1Float = parseFloat(num1);
    let num2Float = parseFloat(num2);
    switch (operator) {
    case "+":
    result = num1Float + num2Float;
    break;
    case "-":
    result = num1Float - num2Float;
    break;
    case "*":
    result = num1Float * num2Float;
    break;
    case "/":
    result = num1Float / num2Float;
    break;
    default:
    result = "";
    }
    result = result.toString();
    clearResult();
    updateResult();
    alert("The result is: ");
    }
    
    const numbers = document.querySelectorAll(".number");
    numbers.forEach(number => {
    number.addEventListener("click", handleNumberClick);
    });
    
    const operators = document.querySelectorAll(".operator");
    operators.forEach(operator => {
    operator.addEventListener("click", handleOperatorClick);
    });
    
    const decimal = document.querySelector("#decimal");
    decimal.addEventListener("click", handleDecimalClick);
    
    const clear = document.querySelector("#clear");
    clear.addEventListener("click", handleClearClick);
    
    const equal = document.querySelector("#equal");
    equal.addEventListener("click", handleEqualClick);