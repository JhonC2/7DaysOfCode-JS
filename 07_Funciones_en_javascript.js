// Funciones para cada operación
function sumar(a, b) {
    return Number(a) + Number(b);
}

function restar(a, b) {
    return Number(a) - Number(b);
}

function multiplicar(a, b) {
    return Number(a) * Number(b);
}

function dividir(a, b) {
    if (b !== 0) {
        return Number(a) / Number(b);
    } else {
        return "Error: División por cero no permitida.";
    }
}

let a;
let b;
let operacion = "";

do{
    operacion = prompt(`¿Qué operación quieres realizar? \n Responde 'suma', 'resta', 'multiplicación', 'división' o 'salir'.`).toLowerCase();
    while(operacion != "suma" && operacion != "resta" && operacion != "multiplicación" && operacion != "división" && operacion != "salir"){
        alert("Operación no reconocida!!");
        prompt(`¿Qué operación quieres realizar? Responde 'suma', 'resta', 'multiplicación', 'división' o 'salir'.`).toLowerCase();
    }
    if (operacion === "salir"){
        break;
    }
    a = prompt("Introduce el primer número:");
    b = prompt("Introduce el segundo número:");
    switch (operacion) {
        case "suma":
            alert(`El resultado de la ${operacion} es: ${sumar(a, b)}`);
            break;
        case "resta":
            alert(`El resultado de la ${operacion} es: ${restar(a, b)}`);
            break;
        case "multiplicación":
            alert(`El resultado de la ${operacion} es: ${multiplicar(a, b)}`);
            break;
        case "división":
            alert(`El resultado de la ${operacion} es: ${dividir(a, b)}`);
            break;
    }
}while(operacion ==="suma" || operacion ==="resta" || operacion ==="multiplicación" || operacion ==="división");
alert("Hasta la próxima!!")