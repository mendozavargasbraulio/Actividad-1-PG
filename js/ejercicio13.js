function verificarVotacion() {
    let edad = document.getElementById("edad").value;
    if (edad === "") {
        alert("Ingresa tu edad");
        return;
    }
    edad = parseInt(edad);
    if (isNaN(edad)) {
        alert("Ingresa un valor numérico para la edad");
        return;
    }
    let resultado = document.getElementById("resultado");
    if (edad >= 18) {
        resultado.value = "Puedes votar";
    } else {
        resultado.value = "No puedes votar";
    }
}