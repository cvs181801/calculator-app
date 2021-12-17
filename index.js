
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
const multiplyBtn = document.getElementById("*");
const divideBtn = document.getElementById("/");
const decimalBtn = document.getElementById(".");
const clearBtn = document.querySelector(".display__clear");
const display = document.querySelector(".display__inner");

zeroBtn.addEventListener("click", function(event) {
    event.preventDefault();
    display.textContent += 0;
})

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

multiplyBtn.addEventListener("click", function(event) {
    event.preventDefault();
    display.textContent += "*";
})

divideBtn.addEventListener("click", function(event) {
    event.preventDefault();
    display.textContent += "/";
})

decimalBtn.addEventListener("click", function(event) {
    event.preventDefault();
    display.textContent += ".";
})

clearBtn.addEventListener("click", function(event) {
    event.preventDefault();
    display.textContent = "";
})

const getNumWithDec =  /\d*\.?\d+/g;  
const getCharacters = /([-+*/]?)/g;

equalsBtn.addEventListener("click", function(event) {
    event.preventDefault();
    for (const char of display.textContent) {
        var numWithDecArray = display.textContent.match(getNumWithDec)
        var charactersArray = display.textContent.match(getCharacters)

        const newCharsArray = charactersArray.filter(char => {
           return char !== ''
        })

        var fullArray = [parseFloat(numWithDecArray[0]), newCharsArray[0], parseFloat(numWithDecArray[1]), 
        newCharsArray[1], parseFloat(numWithDecArray[2]), newCharsArray[2], 
        parseFloat(numWithDecArray[3]), newCharsArray[3], parseFloat(numWithDecArray[4]), newCharsArray[4]]
       
        MDAS(fullArray)     
    }

})

let sum;
function add(value1, value2) {
    sum = value1 + value2;
    return sum
}

let difference;
function subtract(value1, value2) {
    difference = value1 - value2;
    return difference
}

let multiple;
function multiply(value1, value2) {
    multiple = value1 * value2;
    return multiple
}

let divided;
let digitsArray = [];
function divide(value1, value2) {
    divided = value1 / value2;
    return divided
}

function MDAS(array) {
    console.log(array)
     const multipleArray = array.filter((element) => {
       return element === "*"
     })
    for (let i=0; i < multipleArray.length; i++) {
        var starIndex = array.findIndex((element) => element === "*")
        array.splice((starIndex -1), 3, (multiply(array.at(starIndex -1), array.at(starIndex +1))))
    }
    DAS(array) 
}    

function DAS(array) {
    const divisionArray = array.filter((element) => {
        return element === "/"
      })
    for (let i=0; i < divisionArray.length; i++) {
        var divideIndex = array.findIndex((element) => element === "/")
        array.splice((divideIndex -1), 3, (divide(array.at(divideIndex -1), array.at(divideIndex +1))))
    }
    AS(array)
}

function AS(array) {
    const additionArray = array.filter((element) => {
        return element === "+"
      })
    for (let i=0; i < additionArray.length; i++) {
        var addIndex = array.findIndex((element) => element === "+")
        array.splice((addIndex -1), 3, (add(array.at(addIndex -1), array.at(addIndex +1))))
    }
    S(array)
}

function S(array) {
    const subtractArray = array.filter((element) => {
        return element === "-"
      })
      console.log(subtractArray) 
    for (let i=0; i < subtractArray.length; i++) {
        console.log(array)
        var subtractIndex = array.findIndex((element) => element === "-")
        console.log(subtractIndex, subtractIndex -1, subtractIndex +1)  
        array.splice((subtractIndex -1), 3, (subtract(array.at(subtractIndex -1), array.at(subtractIndex +1))))
    }
    display.textContent = array[0]
}
