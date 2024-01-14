const input = document.querySelector(".input");
const numbers = document.querySelectorAll(".numbers")
const operators = document.querySelectorAll(".operators")
const clear = document.querySelector("#clear")
const result = document.querySelector(".equal");

let resultDisplayed = false;

for(let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener("click", (e)=>{
        let currentString = input.innerHTML;
        let lastChar = currentString[currentString.length - 1];
        if(resultDisplayed === false){
            input.innerHTML += e.target.innerHTML;
        }else if(resultDisplayed === true && lastChar === "+" || lastChar === "- " || lastChar === "x" || lastChar === "÷"){
            resultDisplayed = false;
            input.innerHTML += e.target.innerHTML;
        }else{
            resultDisplayed = false;
            input.innerHTML = "";
            input.innerHTML += e.target.innerHTML;
        }
    })
}

for(let i =0; i< operators.length; i++){
    operators[i].addEventListener("click", (e)=>{
        let currentValue = input.innerHTML;
        let lastChar = currentValue[currentValue.length -1];
        if(lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷"){
            let subString = currentValue.substring(0, currentValue.length-1);
            input.innerHTML = subString + e.target.innerHTML;
        }else if(currentValue.length === 0){
            console.log("Wrong input")
        }else{
            input.innerHTML += e.target.innerHTML;
        }
    })
}
result.addEventListener("click", (e)=>{
    let string = input.innerHTML;
    let numbers = string.split(/\+|\-|\×|\÷/g);
    let operators =string.replace(/[0-9]|\.|""/g,"").split("");
    console.log(string);
    console.log(numbers);
    console.log(operators);

    let divide = operators.indexOf["÷"];
    while(divide != -1){
        numbers.splice(divide, 2, numbers[divide] / numbers[divide+1]);
        operators.splice(divide,1);
        divide = operators.indexOf["÷"];
    }
    let multiply = operators.indexOf["×"];
    while(multiply != -1){
        numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply+1]);
        operators.splice(multiply,1);
        multiply = operators.indexOf["×"];
    }
    let sum = operators.indexOf["+"];
    while(sum != -1){
        numbers.splice(sum, 2, parseFloat(numbers[sum]) + parseFloat(numbers[sum+1]));
        operators.splice(sum,1);
        sum = operators.indexOf["+"];
    }
    let subtract = operators.indexOf["-"];
    while(subtract != -1){
        numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract+1]);
        operators.splice(subtract,1);
        subtract = operators.indexOf["-"];
    }
    input.innerHTML = numbers[0];
    resultDisplayed = true;
})
clear.addEventListener("click",()=>{
    input.innerHTML = "";
})



