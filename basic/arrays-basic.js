// declaración de arrays
let nombres = ["Juan", "Pedro", "Maria", "Luisa"];

let primerNombre = nombres[0];
let ultimoElemento = nombres[nombres.length - 1];

// itear un array
for (let i = 0; i < nombres.length; i++) {
  //console.log(nombres[i]);
}

// no tengo control del indice
// no puedo cambiar la dimensión array
for (const nombre of nombres) {
  //console.log(nombre);
}

// itera propiedades: for in
// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];

//     }
// }

// foreach es una funcion del objeto array.

// agrego un elemento al final de un array
nombres.push("Pablo");

// agregar al principio
nombres.unshift("Juana");

// sacar elemento del array
//let ultimoNombre = nombres.pop();
// sacar del principio
//let primerElemento = nombres.shift();

// buscar la posición
let posicion = nombres.indexOf("Juana");
console.log("Posicion del elemento a borrar:" + posicion);
// Eliminar un elemento
nombres.splice(posicion, 1);
// sino se le pasa el segundo parametro elimina en adelante todos.

// como queda
//console.log("Como queda el array");
// for (const nombre of nombres) {
//   console.log(nombre);
// }

// realizar una copia
let nuevoNombres = nombres.slice();

// realizar ordenamiento simple
//console.log(nombres.sort());

// Generar un array a partir de un string
// let stringNombres = "Juan;Pedro;Maria;Jose";
// for (const s of stringNombres) {
//   console.log(s);
// }

let arrayNombres = stringNombres.split(";");
arrayNombres.push("Pepe");
//console.log(arrayNombres);

// Volver a unir
stringNombres = arrayNombres.join(";");
//console.log(stringNombres);
