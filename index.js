const oneBtn = document.getElementById("1");
const twoBtn = document.getElementById("2");
const threeBtn = document.getElementById("3");
const addBtn = document.getElementById("+");
const equalsBtn = document.getElementById("=");
const display = document.querySelector(".display__inner");

oneBtn.addEventListener("click", function(event) {
    event.preventDefault();
    display.textContent += 1;
})

twoBtn.addEventListener("click", function(event) {
    event.preventDefault();
    display.textContent += 2;
})

addBtn.addEventListener("click", function(event) {
    event.preventDefault();
    display.textContent += "+";
})

equalsBtn.addEventListener("click", function(event) {
    event.preventDefault();
    const getNum = /\d+/g
    for (const char of display.textContent) {
        var numArray = display.textContent.match(getNum)  
    }
        if(display.textContent.includes("+"))  {
            add(parseInt(numArray[0]), parseInt(numArray[1]))
        }
})

let sum;
function add(value1, value2) {
    sum = value1 + value2;
    display.textContent += "= "
    display.textContent += sum;
}


