
const zeroBtn = document.getElementById("0");
const oneBtn = document.getElementById("1");
const twoBtn = document.getElementById("2");
const threeBtn = document.getElementById("3");
const fourBtn = document.getElementById("4");
const fiveBtn = document.getElementById("5");
const sixBtn = document.getElementById("6");
const sevenBtn = document.getElementById("7");
const eightBtn = document.getElementById("8");
const nineBtn = document.getElementById("9");

const addBtn = document.getElementById("+");
const subtractBtn = document.getElementById("-");
const equalsBtn = document.getElementById("=");

const display = document.querySelector(".display__inner");

console.log(subtractBtn)

oneBtn.addEventListener("click", function(event) {
    event.preventDefault();
    display.textContent += 1;
})

twoBtn.addEventListener("click", function(event) {
    event.preventDefault();
    display.textContent += 2;
})

threeBtn.addEventListener("click", function(event) {
    event.preventDefault();
    display.textContent += 3;
})

fourBtn.addEventListener("click", function(event) {
    event.preventDefault();
    display.textContent += 4;
})

fiveBtn.addEventListener("click", function(event) {
    event.preventDefault();
    display.textContent += 5;
})

sixBtn.addEventListener("click", function(event) {
    event.preventDefault();
    display.textContent += 6;
})

sevenBtn.addEventListener("click", function(event) {
    event.preventDefault();
    display.textContent += 7;
})

eightBtn.addEventListener("click", function(event) {
    event.preventDefault();
    display.textContent += 8;
})

nineBtn.addEventListener("click", function(event) {
    event.preventDefault();
    display.textContent += 9;
})

addBtn.addEventListener("click", function(event) {
    event.preventDefault();
    display.textContent += "+";
})

subtractBtn.addEventListener("click", function(event) {
    event.preventDefault();
    display.textContent += "-";
})

equalsBtn.addEventListener("click", function(event) {
    event.preventDefault();
    const getNum = /\d+/g
    for (const char of display.textContent) {
        var numArray = display.textContent.match(getNum)  
    }
        if(display.textContent.includes("+"))  {
            add(parseInt(numArray[0]), parseInt(numArray[1]))
        } else if (display.textContent.includes("-")) {
            subtract(parseInt(numArray[0]), parseInt(numArray[1]))
        }

})

let sum;
function add(value1, value2) {
    sum = value1 + value2;
    display.textContent += "="
    display.textContent += sum;
}

let difference;
function subtract(value1, value2) {
    difference = value1 - value2;
    display.textContent += "="
    display.textContent += difference;
}