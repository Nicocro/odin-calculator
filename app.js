
let firstN; 
let operator;
let secondN; 

// create the functions to populate the display 
// when I start clicking values buttons//

const digitButtons = document.querySelectorAll('.digit');
digitButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const display = document.querySelector('.display');
        display.textContent += button.textContent;
    });
});


function operate(a, b, op){
    switch (op) {
        case '+' :
            return add(a,b);
        case '-' :
            return subtract(a,b);
        case '*' :
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