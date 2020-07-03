let displayValue = "0";
let numberOne = "";
let operator = "";

// ADD 
function add(x, y) {
   return Math.round((math.add(x, y) + Number.EPSILON) * 10000) / 10000;
}

// SUBSTRACT 
function subtract(x, y) {
    return Math.round((math.subtract(x, y) + Number.EPSILON) * 10000) / 10000;;
}

// MULTIPLY
function multiply(x, y) {
    return Math.round((math.multiply(x, y) + Number.EPSILON) * 10000) / 10000;;
}

// DIVIDE
function divide(x, y) {
    return Math.round((math.divide(x, y) + Number.EPSILON) * 10000) / 10000;
}

// PERCENTAGE
function percentage(num, per) {    
    return Math.round((((num/100) * per) + Number.EPSILON) * 10000) / 10000;
}

// OPERATE FUNCTION
function operate(operator, numOne, numTwo) {
    switch (operator) {
        case "+":
            return add(numOne, numTwo);
            break;
        case "-":
            return subtract(numOne, numTwo);
            break;
        case "*":
            return multiply(numOne, numTwo);
            break;
        case "/":
            return divide(numOne, numTwo);
            break;
        case "%":
            return percentage(numOne, numTwo);
            break;
    }
}

// DISPLAY
function populateDisplay(value) {
    let display = document.getElementsByClassName('screen-numbers');
    
    if(!(display[0].innerHTML.indexOf(".", 0) > 0 && value == '.')){
        if(display[0].innerHTML == '0' && value != '.') {
            display[0].innerHTML = '';
        } 
    
        if(numberOne == displayValue) {
            display[0].innerHTML = '';
        }
    
        display[0].innerHTML += value;
    
        displayValue = display[0].innerHTML;
    }

    if(operator == '=') {
        let prevScreen = document.getElementsByClassName('previous-screen');

        prevScreen[0].innerHTML = "";

        operator = '';
        numberOne = '';
    }
}

function displayOperator(mathOperator) {
    let prevScreen = document.getElementsByClassName('previous-screen');
    
    if (operator != '=') {
        if (operator == '' && numberOne == '' && mathOperator == '=') return;

        prevScreen[0].innerHTML += ' ' + displayValue + ' ' + mathOperator;
    
        if (numberOne == '') {
            numberOne = displayValue;
        }
        else
        {
            let display = document.getElementsByClassName('screen-numbers');
    
            if (operator == "/" && displayValue == "0") {
                display[0].innerHTML = "‍【・_・?】";
                prevScreen[0].innerHTML = '';
    
                displayValue = 0;
                numberOne = "";
                operator = '';

                return;
            }
            else {
                numberOne = operate(operator, numberOne, displayValue);
    
                display[0].innerHTML = numberOne;
            
                displayValue = numberOne;
            }
        }
    
        operator = mathOperator;
    }
}

// NUMBERS LISTENER
let numbers = document.getElementById('btn-one');
numbers.addEventListener('click', () => {
    populateDisplay("1");
});

numbers = document.getElementById('btn-two');
numbers.addEventListener('click', () => {
    populateDisplay("2");
});

numbers = document.getElementById('btn-three');
numbers.addEventListener('click', () => {
    populateDisplay("3");
});

numbers = document.getElementById('btn-four');
numbers.addEventListener('click', () => {
    populateDisplay("4");
});

numbers = document.getElementById('btn-five');
numbers.addEventListener('click', () => {
    populateDisplay("5");
});

numbers = document.getElementById('btn-six');
numbers.addEventListener('click', () => {
    populateDisplay("6");
});

numbers = document.getElementById('btn-seven');
numbers.addEventListener('click', () => {
    populateDisplay("7");
});

numbers = document.getElementById('btn-eight');
numbers.addEventListener('click', () => {
    populateDisplay("8");
});

numbers = document.getElementById('btn-nine');
numbers.addEventListener('click', () => {
    populateDisplay("9");
});

numbers = document.getElementById('btn-zero');
numbers.addEventListener('click', () => {
    populateDisplay("0");
});

numbers = document.getElementById('decimal-btn');
numbers.addEventListener('click', () => {
    populateDisplay(".");
});

//KEYBOARD NUMBER LISTENERS
document.addEventListener('keydown', (event) => {
   switch(event.key) {
        case "1": 
        case "2": 
        case "3": 
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "0":
        case ".":
            populateDisplay(event.key);
            break;

        case "+":
        case "-":
        case "/":
        case "*":
        case "%":
            displayOperator(event.key);
            break;

        case "Enter":
            displayOperator("=");
            break;
        
        case "Backspace":
            deleteDisplay();
            break;

        case "Escape":
            clearDisplay();
            break;
    }
});

//OPERATOR LISTENERS

//ADD
let addOperator = document.getElementsByClassName('add-btn');
addOperator[0].addEventListener('click', () => {
    displayOperator('+');
});

//SUBTRACT
let subtractOperator = document.getElementsByClassName('subtract-btn');
subtractOperator[0].addEventListener('click', () => {
    displayOperator('-');
});

//MULTIPLY
let multiplyOperator = document.getElementsByClassName('multiply-btn');
multiplyOperator[0].addEventListener('click', () => {
    displayOperator('*');
});

//DIVIDE
let divideOperator = document.getElementsByClassName('divide-btn');
divideOperator[0].addEventListener('click', () => {
    displayOperator('/');
});

//PERCENTAGE
let percentageOperator = document.getElementsByClassName('percentage-btn');
percentageOperator[0].addEventListener('click', () => {
    displayOperator('%');
});


//EQUAL
let equal = document.getElementsByClassName('btn-equal');
equal[0].addEventListener('click', () => {
    displayOperator("=");
});

//CLEAR BTN
function clearDisplay() {
    let display = document.getElementsByClassName('screen-numbers');

    display[0].innerHTML = '0';
    
    let prevScreen = document.getElementsByClassName('previous-screen');
    
    prevScreen[0].innerHTML = '';

    displayValue = "0";
    numberOne = "";
    operator = "";
}

let clear = document.getElementsByClassName('clear-btn');
clear[0].addEventListener('click', () => {
    clearDisplay();
});

//DELETE BTN
function deleteDisplay() {
    let display = document.getElementsByClassName('screen-numbers');

    display[0].innerHTML = display[0].innerHTML.substring(0, display[0].innerHTML.length - 1);
   
    if(display[0].innerHTML.length == 0) {
        display[0].innerHTML = '0';
    }
}

let deleteButton = document.getElementsByClassName('delete-btn');
deleteButton[0].addEventListener('click', () => {
    deleteDisplay();
});