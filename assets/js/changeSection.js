let calculatorSection = document.getElementById("calculatorSection");
let converterSection = document.getElementById("converterSection");
let calculatorButton = document.getElementById("calculatorButton");
let converterButton = document.getElementById("converterButton");

calculatorButton.addEventListener("click" , function() {
    calculatorSection.style.display = "block";
    converterSection.style.display = "none";
});

converterButton.addEventListener("click" , function() {
    calculatorSection.style.display = "none";
    converterSection.style.display = "block";
});