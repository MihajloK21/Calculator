let displayCalculation = document.querySelector('.previous-operand')
let displayResult = document.querySelector('.current-operand')
const numberBtns = document.querySelectorAll('.number')
const operationBtns = document.querySelectorAll('.operation')
const allClearBtn = document.querySelector('.all-clear')
const deleteBtn = document.querySelector('.delete')
const equalsBtn = document.querySelector('.equals')


let mainNumber
let mainOperation

let number1
let number2

let result 
let dotCheck = 0

numberBtns.forEach((number) => {
  number.addEventListener('click', () => {
    mainNumber = number.textContent

    if (mainNumber === '.') {
      dotCheck += 1
    }

    if (dotCheck > 1 && mainNumber === '.' && displayCalculation.textContent === '') {
      mainNumber = ""
    }
    else if (dotCheck > 1 && mainNumber === '.' && displayResult.textContent.includes('.')) {
      mainNumber = ""
    }

    displayResult.textContent += mainNumber
  })
})

operationBtns.forEach((operation) => {
  operation.addEventListener('click', () => {    
    if (displayCalculation.textContent === "") {
      number1 = parseFloat(displayResult.textContent)
    }
    else if (displayCalculation.textContent !== "") {
      number2 = parseFloat(displayResult.textContent)
    }

    if (displayCalculation.textContent !== "" && displayResult.textContent !== "") {
      compute()
    }

    if (isNaN(number1)) {
      number1 = 0
    }
    mainOperation = operation.textContent

    displayCalculation.textContent = `${number1} ${mainOperation}`


    displayResult.textContent = ""

  })
})

function compute() {
  if (displayCalculation.textContent === "") {
    number1 = parseFloat(displayResult.textContent)
  }
  else if (displayCalculation.textContent !== "") {
    number2 = parseFloat(displayResult.textContent)
  }

    
  if (displayCalculation.textContent !== "" && displayResult.textContent === "") {
    return    
  }

  switch(mainOperation) {
    case "+" :
      result = calculate(number1, number2, addNumbers)
      displayCalculation.textContent = ""
      displayResult.textContent = parseFloat(result)
      number1 = result
      number2 = ""
    break  

    case "-" :
      result = calculate(number1, number2, subtractNumbers)
      displayCalculation.textContent = ""
      displayResult.textContent = parseFloat(result)
      number1 = result
      number2 = ""
    break

    case "*" :
      result = calculate(number1, number2, multiplyNumbers)
      displayCalculation.textContent = ""
      displayResult.textContent = parseFloat(result)
      number1 = result
      number2 = ""
    break 

    case "÷" :
      result = calculate(number1, number2, divideNumbers)
      displayCalculation.textContent = ""
      displayResult.textContent = parseFloat(result)
      number1 = result
      number2 = ""
    break 
  }
}


equalsBtn.addEventListener('click', () => {
  compute()
})

allClearBtn.addEventListener('click', () => {
  displayResult.textContent = ""
  displayCalculation.textContent = ""
  number1 = ""
  number2 = ""
  result = ""
})

deleteBtn.addEventListener('click', () => {
  let numLength = displayResult.textContent

  numLength = numLength.substring(0, numLength.length - 1)
  displayResult.textContent = numLength
})



function addNumbers (num1, num2) {
  return num1 + num2
}
function subtractNumbers (num1, num2) {
  return num1 - num2
}
function multiplyNumbers (num1, num2) {
  return num1 * num2
}
function divideNumbers (num1, num2) {
  return num1 / num2
}

function calculate(num1, num2, operator) {
  return operator(num1, num2)
}

