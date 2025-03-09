let frutas= [];
let lacteos= [];
let congelados= [];
let dulces= [];
let listaComida= "";
let categoria= "";
let eliminar = "";

let producto = "si";

while (producto != "no"){

    if (frutas.length === 0 && lacteos.length === 0 && congelados.length === 0 && dulces.length === 0){
        producto = prompt("¿Quieres agregar un alimento a la lista? Responde 'Si' o 'No':").toLowerCase();
    }
    else{
        producto = prompt("¿Quieres agregar un alimento a la lista? 'Si', 'No' o 'Eliminar':").toLowerCase();
    }
    while(producto != 'si' && producto != 'no' && producto != 'eliminar'){
        alert("Operación no reconocida");
        producto = prompt("¿Quieres agregar un alimento a la lista? Responde 'Si' o 'No':").toLowerCase();
    }
    if(producto === 'no'){
        break;
    }

    if(producto === 'si'){
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
    else if(producto === 'eliminar'){
        if(frutas.length === 0 && lacteos.length === 0 && dulces.length === 0 && congelados.length === 0){
            alert(`¡La lista de comida está vacía!`);
        }
        else{
            eliminar = prompt(`Lista de compras:
                Frutas: ${frutas.join(", ") || "Ninguno"}
                Lácteos: ${lacteos.join(", ") || "Ninguno"}
                Congelados: ${congelados.join(", ") || "Ninguno"}
                Dulces: ${dulces.join(", ") || "Ninguno"}
                ¿Qué producto deseas eliminar?`);
		    if(frutas.indexOf(eliminar) != -1){
			    frutas.splice(frutas.indexOf(eliminar), 1);
			    alert(`¡El ítem ${eliminar} ha sido eliminado con éxito!`)
		    } else if(lacteos.indexOf(eliminar) != -1){
			    lacteos.splice(lacteos.indexOf(eliminar), 1);
			    alert(`¡El ítem ${eliminar} ha sido eliminado con éxito!`)
		    } else if (dulces.indexOf(eliminar) != -1){
			    dulces.splice(dulces.indexOf(eliminar), 1);
			    alert(`¡El ítem ${eliminar} ha sido eliminado con éxito!`)
		    } else if (congelados.indexOf(eliminar) != -1){
			    congelados.splice(congelados.indexOf(eliminar), 1);
			    alert(`¡El ítem ${eliminar} ha sido eliminado con éxito!`)
		    } else {
			    alert(`¡No fue posible encontrar el elemento dentro de la lista!`)
		    }
        }
    }
}

alert(`Lista de compras:
    Frutas: ${frutas.join(", ") || "Ninguno"}
    Lácteos: ${lacteos.join(", ") || "Ninguno"}
    Congelados: ${congelados.join(", ") || "Ninguno"}
    Dulces: ${dulces.join(", ") || "Ninguno"}
  `);