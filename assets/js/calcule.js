// Opration
let ACButton = document.getElementById("ACButton");
let DelButton = document.getElementById("DelButton");
let DiviButton = document.getElementById("DiviButton");
let MultButton = document.getElementById("MultButton");
let SubButoon = document.getElementById("SubButoon");
let AddButton = document.getElementById("AddButton");
let pourButton = document.getElementById("pourButton");
let CommaButton = document.getElementById("CommaButton");
let egalButton = document.getElementById("egalButton");
// Numbers
let zeroButton = document.getElementById("0Button");
let oneButton = document.getElementById("1Button");
let twoButton = document.getElementById("2Button");
let threeButton = document.getElementById("3Button");
let fourButton = document.getElementById("4Button");
let fiveButton = document.getElementById("5Button");
let sexButton = document.getElementById("6Button");
let sevenButton = document.getElementById("7Button");
let eightButton = document.getElementById("8Button");
let nineButton = document.getElementById("9Button");
// Affichage partie
let calculatorAffichage = document.getElementById("calculatorAffichage");

let currentInput = "0";
calculatorAffichage.innerText = currentInput;
let historyCalcule = []

oneButton.addEventListener("click" , function() {
    if (currentInput == "0") {
        currentInput = "";
    }
    currentInput += "1";
    calculatorAffichage.innerText = currentInput;
});

twoButton.addEventListener("click" , function() {
    if (currentInput == "0") {
        currentInput = "";
    }
    currentInput += "2";
    calculatorAffichage.innerText = currentInput;
});

threeButton.addEventListener("click" , function() {
    if (currentInput == "0") {
        currentInput = "";
    }
    currentInput += "3";
    calculatorAffichage.innerText = currentInput;
});

fourButton.addEventListener("click" , function() {
    if (currentInput == "0") {
        currentInput = "";
    }
    currentInput += "4";
    calculatorAffichage.innerText = currentInput;
});

fiveButton.addEventListener("click" , function() {
    if (currentInput == "0") {
        currentInput = "";
    }
    currentInput += "5";
    calculatorAffichage.innerText = currentInput;
});

sexButton.addEventListener("click" , function() {
    if (currentInput == "0") {
        currentInput = "";
    }
    currentInput += "6";
    calculatorAffichage.innerText = currentInput;
});

sevenButton.addEventListener("click" , function() {
    if (currentInput == "0") {
        currentInput = "";
    }
    currentInput += "7";
    calculatorAffichage.innerText = currentInput;
});

eightButton.addEventListener("click" , function() {
    if (currentInput == "0") {
        currentInput = "";
    }
    currentInput += "8";
    calculatorAffichage.innerText = currentInput;
});

nineButton.addEventListener("click" , function() {
    if (currentInput == "0") {
        currentInput = "";
    }
    currentInput += "9";
    calculatorAffichage.innerText = currentInput;
});

zeroButton.addEventListener("click" , function() {
    if (currentInput == "0") {
        currentInput = "";
    }
    currentInput += "0";
    calculatorAffichage.innerText = currentInput;
});

AddButton.addEventListener("click" , function() {
    currentInput += "+";
    calculatorAffichage.innerText = currentInput;
});

SubButoon.addEventListener("click" , function() {
    currentInput += "-";
    calculatorAffichage.innerText = currentInput;
});

MultButton.addEventListener("click" , function() {
    if (currentInput == "0" || currentInput == "") {
        currentInput = "0";
    }
    currentInput += "*";
    calculatorAffichage.innerText = currentInput;
});

DiviButton.addEventListener("click" , function() {
    if (currentInput == "0" || currentInput == "") {
        currentInput = "0";
    }
    currentInput += "/";
    calculatorAffichage.innerText = currentInput;
});

pourButton.addEventListener("click" , function() {
    if (currentInput == "0" || currentInput == "") {
        currentInput = "0";
    }
    currentInput += "%";
    calculatorAffichage.innerText = currentInput;
});

CommaButton.addEventListener("click" , function() {
    if (currentInput == "0" || currentInput == "") {
        currentInput = "0";
    }
    currentInput += ".";
    calculatorAffichage.innerText = currentInput;
});

ACButton.addEventListener("click" , function() {
    currentInput = "";
    calculatorAffichage.innerText = "0";
});

DelButton.addEventListener("click" , function() {
    currentInput = currentInput.slice(0 , -1); // delete the last number
    calculatorAffichage.innerText = currentInput || "0";
});

egalButton.addEventListener("click" , function() {
    historyCalcule.push(currentInput);
    console.log(historyCalcule);
    console.log(historyCalcule.length);
    let result = eval(currentInput); // calcule operation in string
    calculatorAffichage.innerText = result;
    currentInput = result.toString();
});