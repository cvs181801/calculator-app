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
    let numArray = [];
    for (const char of display.textContent) {
        const num = display.textContent.match(getNum)  
        
    }
    // if(display.textContent.includes("+"))  {
    //     display.textContent += "= "
    //     let sum = add(parseInt(display.textContent[0]),parseInt(display.textContent[2]))
    //     display.textContent += sum;
    // } else {
    //     console.log("try again")
    // }
})

function add(value1, value2) {
    return value1 + value2;
}


