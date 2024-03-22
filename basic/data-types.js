"use strict";
// Tipos de datos en Javascript
// Number, String, Boolean, Symbol, Null, Undefined, Object
// Javascript es un lenguaje dinamico

// STRING //
let saludo = "Hola mundo";
let saludo2 = "Hola mundo 2 pablo" + "'" + '"' + "s home";
let saludo3 = `hola 
                        mundo ${saludo} 
                                            como estas? 💪 `;
//console.log(saludo3);
//console.log(typeof saludo);

// NUMBER //
let numero = 123123;
//console.log(typeof numero);

let var1 = 1;
let var2 = -0;
let var3 = -1;
let var4 = 23.4;

//console.log("Raiz cuadrado (-1) " + Math.sqrt(-1));
//console.log("1 / 0 = " + var1 / var2);

let var5 = "r4545m56";

// NaN, Undefined, Null
let var6 = parseInt(var5);

// console.log(var6);
// console.log(typeof var6);

// Null: representa la ausencia de algun valor
let nulo = 45;
//nulo = null;

// Undefined: propiedad de un objeto que no existe o variable no asignada
let nodefinido;
//console.log(typeof nodefinido);

// Una variable que se asigna y no se declara, no es una buena practica.
//variableSinDeclarar = 10;
//console.log(variableSinDeclarar);

// Ejercicio 1
// si se añade/concatena con + un string y numero
// si se añade/concatena con + un string y un boolean
// si .... un booleano con un numero

let someNumber = 10;
let someString = "Ten";
let someBoolean = true;

console.log("Suma de numero y string " + someNumber + someString);
console.log("Suma de boolean y string " + someBoolean + someString);
console.log("Suma de boolean y numero " + (someBoolean + someNumber));

// Parseo de numeros
let cadenaNumero = "34";
console.log(parseInt(cadenaNumero));

let cadenaFloat = "34.5";
console.log(parseFloat(cadenaFloat));

let numeroCadena = 45.4;
console.log(numeroCadena.toString());

// declaración de objetos
let user = {
  name: "Juan Peres",
  age: 46,
};

console.log("Nombre de usuario: " + user.name);
console.log("Edad de usuario:" + user["age"]);

user.direccion = "Olazabal";

console.log(user);

console.log(user.email);
