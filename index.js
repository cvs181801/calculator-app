
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

const getNum = /\d+/g;
const getCharacter = /\W/g;
const getNumAndChar = /\d+\W/g;

equalsBtn.addEventListener("click", function(event) {
    event.preventDefault();
    for (const char of display.textContent) {
        var numArray = display.textContent.match(getNum) 
        var characterArray = display.textContent.match(getCharacter)
        var numAndCharArray = display.textContent.match(getNumAndChar)
        var fullArray = [parseInt(numArray[0]), characterArray[0], parseInt(numArray[1]), 
        characterArray[1], parseInt(numArray[2]), characterArray[2], 
        parseInt(numArray[3]), characterArray[3], parseInt(numArray[4]), characterArray[4]]
       
        MDAS(fullArray)
        
        // var plusCharacterArray = characterArray.filter(char => char === "+")
        // var minusCharacterArray = characterArray.filter(char => char === "-")
        // var multiplyCharacterArray = characterArray.filter(char => char === "x")
        // var divideCharacterArray = characterArray.filter(char => char === "/")
        
    }
        // if (display.textContent.includes("+"))  {
        //     add(parseInt(numArray[0]), parseInt(numArray[1]))
        // } else if (display.textContent.includes("-")) {
        //     subtract(parseInt(numArray[0]), parseInt(numArray[1]))
        // } else if (display.textContent.includes("*")) {
        //     multiply(parseInt(numArray[0]), parseInt(numArray[1]))
        // } else if (display.textContent.includes("/")) {
        //     divide(parseInt(numArray[0]), parseInt(numArray[1]))
        // } else {
        //     display.textContent = `too many or too little numbers!`
        // }
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

let multiple;
function multiply(value1, value2) {
    multiple = value1 * value2;
    return multiple
    //display.textContent += "="
    //display.textContent += multiple;
    //console.log("multiplied value :", multiple)
}

let divided;
let digitsArray = [];
function divide(value1, value2) {
    //display.textContent += "="
    divided = value1 / value2;
    console.log(divided)
    return divided

    //var dividedRoundedDown = Math.floor(divided);
    //var remainder = divided - dividedRoundedDown
    //console.log(remainder)
    // if(remainder === 0) {
    //     //display.textContent += divided;
    //     return divided
    // } else {
    //     let decimalString = remainder.toString()
    //     let decimalShaved = parseFloat(decimalString)
    //         if (decimalString.length > 6) {
    //             var roundedToTenThousandth = Math.round(decimalShaved * 10000)
    //             var decimalRoundedToTenThousandth = roundedToTenThousandth / 10000
    //             //display.textContent = `${value1}/${value2}= ${dividedRoundedDown + decimalRoundedToTenThousandth}`
    //             return dividedRoundedDown + decimalRoundedToTenThousandth
    //         } else {
    //             nonintegerSum = dividedRoundedDown + decimalShaved
    //             //display.textContent = `${value1}/${value2}= ${nonintegerSum}`
    //             return nonintegerSum
    //         }
    //}
}

function MDAS(array) {
    console.log(array)
     const multipleArray = array.filter((element) => {
       return element === "*"
     })
    for (let i=0; i < multipleArray.length; i++) {
        console.log(array)
        var starIndex = array.findIndex((element) => element === "*")
        console.log(starIndex, starIndex -1, starIndex +1)  
        array.splice((starIndex -1), 3, (multiply(array.at(starIndex -1), array.at(starIndex +1))))
    }
    console.log("array after loop :", array)
    display.textContent = array[0]
    DAS(array) 
}    

function DAS(array) {
    const divisionArray = array.filter((element) => {
        return element === "/"
      })
      console.log(divisionArray) 
    for (let i=0; i < divisionArray.length; i++) {
        console.log(array)
        var divideIndex = array.findIndex((element) => element === "/")
        console.log(divideIndex, divideIndex -1, divideIndex +1)  
        array.splice((divideIndex -1), 3, (divide(array.at(divideIndex -1), array.at(divideIndex +1))))
    }
}


