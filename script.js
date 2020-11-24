const UI = {
    outlay: document.querySelector(".outlay"),
    distance: document.querySelector(".distance"),
    price: document.querySelector(".price"),
    allSpentFuel: document.querySelector(".spentFuel"),
    allFuelPrice: document.querySelector(".fuelPrice"),
    addButton: document.querySelector(".calculate"),
    addButtonNew: document.querySelector(".newCalculation")
};

UI.addButton.addEventListener("click", () => {
    console.log("mygtukas paspaustas");
    UI.allSpentFuel.innerHTML = calculateSpentFuel();
    UI.allFuelPrice.innerHTML = calculateSpentFuelPrice();

});

function calculateSpentFuel() {
    let spentFuel = (UI.outlay.value * UI.distance.value / 100).toFixed(2);
    console.log(spentFuel);
    return spentFuel;
}

function calculateSpentFuelPrice() {
    let d = calculateSpentFuel();
    console.log(d);
    let fuelPrice = (d * UI.price.value).toFixed(2);
    return fuelPrice;
}


UI.addButtonNew.addEventListener("click", () => {
    UI.outlay.value = "";
    UI.distance.value = "";
    UI.price.value = "";
    UI.allSpentFuel.innerHTML = "";
    UI.allFuelPrice.innerHTML = "";
    console.log("mygtukas paspaustas");

});