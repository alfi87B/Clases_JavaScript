// Pido nombre del usuario
let nombre = prompt("Hola! Ingresa tu nombre");

// Pido la altura del usuario
let altura = Number(prompt(`Ahora ingresa tu altura en cm, ejemplo: 180`));

// Chequeo si la altura es un número válido
while (isNaN(altura)) {
    alert("Algo salio mal, vuelve a ingresar tu altura en numeros");
    altura = Number(prompt(`Vuelve a ingresa tu altura en cm, ejemplo: 180`));
}

// Chequeamos el talle según la altura
let talle = "";

if (altura >= 150 && altura <= 160) {
    talle = "S";
} else if (altura >= 161 && altura <= 177) {
    talle = "M";
} else if (altura >= 178 && altura <= 184) {
    talle = "L";
} else if (altura >= 185 && altura <= 191) {
    talle = "XL";
} else if (altura > 192) {
    talle = "XXL";
} else {
    alert("Altura no válida para determinar el talle.");
}

// Chequeo en qué categoría debería entrar según la altura
if (talle) {
    // Pido el peso al usuario
    let peso = Number(prompt(`Ahora ingresa tu peso en kg, no nos mientas jaja`));

    // Chequeo si el peso es un número válido
    while (isNaN(peso)) {
        alert("Algo salio mal, asegurate de ingresar tu peso en numeros");
        peso = Number(prompt(`Vuelve a infresar tu peso, ejemplo: 75`));
    }

    // Ajustar el talle según el peso
    if (talle === "S" && peso > 68) {
        talle = "M";
    } else if (talle === "M" && peso > 77) {
        talle = "L";
    } else if (talle === "L" && peso > 85) {
        talle = "XL";
    } else if (talle === "XL" && peso > 95) {
        talle = "XXL";
    } else if (talle === "XXL" && peso > 120) {
        alert("Lo sentimos, no tenemos talles más grandes.");
        talle = null; // Reiniciar el talle si no es válido
    }

    // Talle recomendado
    if (talle !== "XXL") {
        alert(`Hola ${nombre}, según tus datos, te recomendamos el talle ${talle}.`);
    }
} else {
    alert("Peso no válido. Por favor, ingrese un número.");
}
