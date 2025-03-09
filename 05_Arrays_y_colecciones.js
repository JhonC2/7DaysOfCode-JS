let frutas= [];
let lacteos= [];
let congelados= [];
let dulces= [];
let listaComida= "";
let categoria= "";

let producto = "si";

while (producto != "no"){
    let agregar = prompt("¿Quieres agregar un alimento a la lista? Responde 'Si' o 'No':").toLowerCase()
    while (agregar != "si" && agregar != "no"){
        alert("Operación no reconocida")
        agregar = prompt("¿Quieres agregar un alimento a la lista? Responde 'Si' o 'No':").toLowerCase();
    }
    if (agregar == "no") {
        break;
    }
    
    listaComida = prompt("¿Qué alimento quieres agregar?");
    let categoria = prompt("¿En qué categoría encaja? (Frutas, Lácteos, Congelados, Dulces)").toLowerCase();
    
    if (categoria === "frutas") {
        frutas.push(listaComida);
    } else if (categoria === "lacteos" || categoria === "lácteos") {
        lacteos.push(listaComida);
    } else if (categoria === "congelados") {
        congelados.push(listaComida);
    } else if (categoria === "dulces") {
        dulces.push(listaComida);
    } else {
        alert("Categoría no existente.")
    }
}

alert(`Lista de compras:
    Frutas: ${frutas.join(", ") || "Ninguno"}
    Lácteos: ${lacteos.join(", ") || "Ninguno"}
    Congelados: ${congelados.join(", ") || "Ninguno"}
    Dulces: ${dulces.join(", ") || "Ninguno"}
  `);