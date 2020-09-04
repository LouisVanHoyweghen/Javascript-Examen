function converteerBedrag() {
    var bedragElement = document.getElementById("bedrag");
    var bedrag = bedragElement.value;

    if (isNaN(bedrag)) {
        bedagElement.value = "";
        window.alert("Gelieve een numeriek bedrag in te voeren");
    }

    var ratio = document.getElementById("ratio").value;

    var output = bedrag * ratio;

    document.getElementById("output").innerText = output;
}