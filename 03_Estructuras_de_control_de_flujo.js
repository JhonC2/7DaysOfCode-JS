const areaProgramacion = prompt("¿Qué área te gustaría elegir 'Front-End' o 'Back-End'? Escribe el nombre del área: ");
let resultado = "";

if (areaProgramacion === "Front-End") {
    resultado = prompt("¿Qué tecnología te gustaría aprender React o Vue?");
}
else if (areaProgramacion === "Back-End") {
    resultado = prompt("¿Qué tecnología te gustaría aprender C# o Java?");
}
else{
    resultado = alert("Área inválida, fin del juego.");
    exit;
}

const especialidadFullstack = prompt("Escribe 1 si quieres seguir especializándote en el área elegida o escribe 2 si quieres desarrollarte para convertirte en Fullstack");

if (especialidadFullstack == 1) {
    alert(`¡Genial! Sigue profundizando en ${resultado} para convertirte en un experto del ${areaProgramacion}.`);
}
else if (especialidadFullstack == 2) {
    alert(`¡Genial! Aprender tanto Front-End como Back-End te abrirá muchas puertas en el mundo de la programación.`);
}
else {
    alert("Opción inválida, fin del juego.");
    exit;
}

let seguirAprendiendo = prompt("¿Qué otras tecnologías le gustaría conocer? Escribe 'ok' si la respuesta es positiva.")
while (seguirAprendiendo == "ok") {
    let otraTecnologia = prompt("Escribe la tecnología que te gustaría aprender:");
    alert(`${otraTecnologia} es una excelente tecnología para aprender.`)
    seguirAprendiendo = prompt("¿Hay otra tecnología que te gustaría aprender? Escribe 'ok' si la respuesta es positiva.");
}
alert("¡Gracias por jugar y sigue aprendiendo!");