
let firstN = false; 
let operator = false;
let secondN = false; 

// create the functions to populate the display 
// when I start clicking values buttons//

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        switch (button.className) {
            case 'digit':
                populateDisplay(parseInt(button.textContent));
                break;
            case 'operator':
                setOperator(button);
                break;
            case 'reset':
                reset(button);
                break;
            case 'equal':
                calculateEqual();
                break;
        }
    })
})

// const digitButtons = document.querySelectorAll('.digit');
// digitButtons.forEach((button) => {
//     button.addEventListener("click", () => {
//         const display = document.querySelector('.display');
//         display.textContent += button.textContent;
//     });
// });

function calculateEqual() {
    if (firstN && operator) {
        const display = document.querySelector('.display');
        secondN = parseInt(display.textContent);
        result = operate(firstN, secondN, operator);
        display.textContent = '0';
        populateDisplay(result);
        firstN = false;
        secondN = false;
        operator = false;
    }
}

function reset(button) {
    firstN = false;
    secondN = false;
    operator = false;
    const display = document.querySelector('.display');
    display.textContent = '0';
}

function setOperator(button) {
    operator = button.textContent;
    const display = document.querySelector('.display');
    firstN = parseInt(display.textContent);
    display.textContent = '0';
}


function populateDisplay(n) {
    const display = document.querySelector('.display');
    display.textContent += n;
}

function operate(a, b, op){
    switch (op) {
        case '+' :
            return add(a,b);
        case '-' :
            return subtract(a,b);
        case 'x' :
            return multiply(a,b);
        case '/' :
            return divide(a,b); 
    }
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b 
    // need to handle the case where b = 0 here 
}