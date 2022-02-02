
const getNumWithDec =  /\d*\.?\d+/g;  
const getCharacters = /([-+*/]?)/g;

const buttons = document.querySelectorAll('[data-button]')

buttons.forEach(btn => {
    btn.textContent+=btn.id
})

const display = document.querySelector(".display__inner");

buttons.forEach(btn => {
    btn.addEventListener('click', function(event) {
        event.preventDefault();
        display.textContent += btn.id
    })
})


const clearBtn = document.querySelector(".display__clear");

clearBtn.addEventListener("click", function(event) {
    event.preventDefault();
    display.textContent = "";
})

const equalsBtn = document.getElementById("=");

equalsBtn.addEventListener("click", function(event) {
    event.preventDefault();
    for (const char of display.textContent) {
        var numWithDecArray = display.textContent.match(getNumWithDec)
        var charactersArray = display.textContent.match(getCharacters)

        const newCharsArray = charactersArray.filter(char => {
           return char !== ''
        })

        var fullArray = [
                        parseFloat(numWithDecArray[0]),
                        newCharsArray[0], 
                        parseFloat(numWithDecArray[1]), 
                        newCharsArray[1],
                        parseFloat(numWithDecArray[2]), 
                        newCharsArray[2], 
                        parseFloat(numWithDecArray[3]), 
                        newCharsArray[3], 
                        parseFloat(numWithDecArray[4]), 
                        newCharsArray[4]
                    ]
       
        MDAS(fullArray)     
    }
})

const add = (value1, value2) => value1 + value2;

const subtract = (value1, value2) => value1 - value2;

const multiply = (value1, value2) => value1 * value2;

const divide = (value1, value2) => value1 / value2;

function MDAS(array) {
    //another way to do this//
    // array
    //     .filter(element => element === "*")
    //     .map(element => {
    //         const index = array.findIndex(element => element === "*")
    //         array.splice(index - 1, 3 , multiply(array.at(index -1), array.at(index-1)))
    //     })
    
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
    for (let i=0; i < subtractArray.length; i++) {
        console.log(array)
        var subtractIndex = array.findIndex((element) => element === "-")
        console.log(subtractIndex, subtractIndex -1, subtractIndex +1)  
        array.splice((subtractIndex -1), 3, (subtract(array.at(subtractIndex -1), array.at(subtractIndex +1))))
    }
    display.textContent = Math.round(array[0] * 10000) / 10000
}
