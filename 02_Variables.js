const nombre = prompt("¿Cuál es tu nombre?");
const edad = prompt("¿Cuántos años tienes?");
const lenguajesProgramacion = prompt("¿Qué lenguaje de programación estás estudiando?");

alert(`Hola! ${nombre} tienes ${edad} años y estás estudiando ${lenguajesProgramacion} mucho gusto.`);

const ingresaNumero = prompt(`¿Te gusta estudiar ${lenguajesProgramacion}. Responde con el número 1 para SÍ o 2 para NO.`);

if (ingresaNumero == 1){
    alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.");
}
else if (ingresaNumero == 2){
    alert("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?");
}
else{
    alert("Por favor, ingresa un número válido (1 o 2).");
}