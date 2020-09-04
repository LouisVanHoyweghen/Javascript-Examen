var lengteElement;
var gewichtElement;

function berekenBMI() {
    lengteElement = document.getElementById("lengte");
    gewichtElement = document.getElementById("gewicht");

    var lengte = Number(lengteElement.value);
    var gewicht = Number(gewichtElement.value);

    if (isNaN(lengte) || isNaN(gewicht)) {
        resetFormulier();
        window.alert("Gelieve numerieke waarden in te vullen");
    }

    var BMI = gewicht / (lengte * lengte);

    var outputElement = document.getElementById("output");

    var outputTekst = "Jouw BMI is " + BMI.toFixed(1) + ". Dit betekent ";

    var color;

    if (BMI < 18.5) {
        outputTekst = outputTekst + "ondergewicht.";
        color = "red";
    } else if (BMI > 18.5 && BMI < 24.9) {
        outputTekst = outputTekst + "een gezond, normaal gewicht.";
        color = "green";
    } else if (BMI > 25 && BMI < 29.9) {
        outputTekst = outputTekst + "overgewicht.";
        color = "orange";
    } else {
        outputTekst = outputTekst + "obesitas.";
        color = "red";
    }

    if (color) {
        outputElement.style.color = color;
    }

    outputElement.innerText = outputTekst;
}

function resetFormulier() {
    lengteElement.value = "";
    gewichtElement.value = "";
}