let selectedCar = null;

function selecionarCarro(element) {
    if (selectedCar) {
        selectedCar.classList.remove("selected");
    }
    selectedCar = element;
    selectedCar.classList.add("selected");
}

function moverSelecionado() {
    if (selectedCar) {
        document.getElementById("selecionarCarro").appendChild(selectedCar);
        document.getElementById("emptyMessage").style.display = "none";
        selectedCar.classList.remove("selected");
        selectedCar = null;
    }
}

function moverdeVolta() {
    if (selectedCar) {
        document.getElementById("carList").appendChild(selectedCar);
        selectedCar.classList.remove("selected");
        if (document.getElementById("selecionarCarro").children.length === 1) {
            document.getElementById("emptyMessage").style.display = "block";
        }
        selectedCar = null;
    }
}
