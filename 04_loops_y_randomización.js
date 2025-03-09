const numeroAdivinar = Math.floor(Math.random() * (10 - 0 * 1) + 0);
let intentos = "";
let aciertos = false;

alert("¡Bienvenido al juego de adivinar el número!");

for (let i = 0; i < 3; i++) {
    intentos = prompt("Ingresa un número entre 0 y 10: ");
    if (intentos === numeroAdivinar) {
        alert(`¡Felicidades! Adivinaste el número ${numeroAdivinar}.`);
        aciertos = true;
        break;
    }
    alert("Número incorrecto.")
}
if(!aciertos){
    alert(`Desafortunadamente, no acertaste. ¡El número era ${numeroAdivinar}!`);
}
alert("¡Gracias por jugar!");