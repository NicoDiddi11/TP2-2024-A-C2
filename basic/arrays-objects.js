const inventors = [
  { first: "Albert", last: "Einstein", year: 1879 },
  { first: "Isaac", last: "Newton", year: 1643 },
  { first: "Galileo", last: "Galilei", year: 1564 },
  { first: "Marie", last: "Curie", year: 1867 },
  { first: "Johannes", last: "Kepler", year: 1571 },
  { first: "Nicolaus", last: "Copernicus", year: 1473 },
  { first: "Max", last: "Planck", year: 1858 },
];

// JSON = Javascript Object Notation
function printInventors(inventors) {
  console.log("Nombre      Apellido    Año");
  console.log("=============================");
  for (const inventor of inventors) {
    console.log(
      `${inventor.first.padEnd(12, " ")}${inventor.last.padEnd(12, " ")}${
        inventor.year
      }`
    );
  }
}

printInventors(inventors);

// Ejercicios
// 1.- Filtrar los inventores nacidos antes del 1800





// 2.- Convertir el apellido en mayusculas
// 3.- Buscar inventor Kepler y retornar el objeto
// 4.- Si existe algun inventor nacido en 1858
// 5.- Si todos los inventores nacieron despues del 1500
// 6.- Ordenar los inventores por fecha de nacimiento
// 7.- Ordenar los inventores por Apellido
// 8.- Convertir el array a un formato:
/**
 * [{name:
 *      {
 *          first: 'first name',
 *          last: 'last name'
 *      }
 * },
 * year: year
 * ]
 *
 */
