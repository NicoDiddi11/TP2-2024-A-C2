// let vs var
// let es la forma moderna de declarar desde el ES6
// el alance de var es global y de let a nivel bloque
// let no permite declarar dos veces o mas una misma variable con un mismo alcance

let x = 1;
if (x == 1) {
  let x = 2; // esta x es otra variable
}

// const
const key = "abc2134";

const person = {
  name: "wes",
  age: 28,
};

person.name = "Juan";
person.direccion = "asdfasdf";
person = null;

console.log(person);
