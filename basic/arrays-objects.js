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
  // for (const inventor of inventors) {
  //   console.log(
  //     `${inventor.first.padEnd(12, " ")}${inventor.last.padEnd(12, " ")}${
  //       inventor.year
  //     }`
  //   );
  // }
  inventors.forEach((inventor) =>
    console.log(
      `${inventor.first.padEnd(12, " ")}${inventor.last.padEnd(12, " ")}${
        inventor.year
      }`
    )
  );
}

//printInventors(inventors);
//console.table(inventors);

// Ejercicios
// 1.- Filtrar los inventores nacidos antes del 1800

printInventors(
  inventors
    .filter((inventor) => inventor.year < 1800)
    .map((inventor) => ({
      first: inventor.first,
      last: inventor.last.toUpperCase(),
      year: inventor.year,
    }))
);

printInventors(
  inventors.filter(function (inventor) {
    return inventor.year < 1800;
  })
);

// 2.- Convertir el apellido en mayusculas
//printInventors(inventors.map((inventor) => ({ first: inven })));
printInventors(
  inventors.map((inventor) => ({
    first: inventor.first,
    last: inventor.last.toUpperCase(),
    year: inventor.year,
  }))
);

// 3.- Buscar inventor Kepler y retornar el objeto
//console.log(inventors.find((inventor) => inventor.last === "Kepler"));
// 4.- Si existe algun inventor nacido en 1858
//console.log(inventors.some((inventor) => inventor.year === 1858));

// 5.- Si todos los inventores nacieron despues del 1500
console.log(
  inventors.every((inventor) => {
    inventor.year >= 1500;
  })
);
//inventors.every(({ year }) => year == 1500);

// 6.- Ordenar los inventores por fecha de nacimiento
printInventors(inventors.sort((a, b) => (a.year > b.year ? 1 : -1)));
printInventors(inventors.sort((a, b) => a.year - b.year));

// 7.- Ordenar los inventores por Apellido
printInventors(inventors.sort((a, b) => (a.last > b.last ? 1 : -1)));

console.log("\n----------- Ejercicio 1 --------------\n");

const inventorsBefore1800 = getInventorsBefore1800(inventors);
printInventors(inventorsBefore1800)

function getInventorsBefore1800(inventors) {
  const inventorsBefore1800 = [];
  for (const inventor of inventors) {
    if (inventor.year < 1800) {
      inventorsBefore1800.push(inventor);
    }
  }
  return inventorsBefore1800;
}



// 2.- Convertir el apellido en mayusculas

console.log("\n----------- Ejercicio 2 --------------\n");


function MayusInventors(inventors) {
  const capitalizedLastNames = [];
  for (const inventor of inventors) {
    const capitalizedLastName = {
      first: inventor.first,
      last: inventor.last.toUpperCase(), // Convertir el apellido a mayúsculas
      year: inventor.year
    };
    capitalizedLastNames.push(capitalizedLastName);
  }
  return capitalizedLastNames;
}
printInventors(MayusInventors(inventors));
console.log("\n original \n");

printInventors(inventors);



// 3.- Buscar inventor Kepler y retornar el objeto

console.log("\n----------- Ejercicio 3 --------------\n");

function inventorKepler (inventors) {
  let aDevolver;
  for (const inventor of inventors) {
    if (inventor.last == "Kepler") {
      aDevolver = inventor;
    }
  }

  return aDevolver;

}
console.log(inventorKepler(inventors));


// 4.- Si existe algun inventor nacido en 1858

console.log("\n----------- Ejercicio 4 --------------\n");

function inventor1858 (inventors) {
  let aDevolver = false;
  for (const inventor of inventors) {
    if (inventor.year == 1858) {
      aDevolver = true;
    }
  }

  return aDevolver;

}
console.log(inventor1858(inventors));

// 5.- Si todos los inventores nacieron despues del 1500

console.log("\n----------- Ejercicio 5 --------------\n");

function inventor1500 (inventors) {
  let aDevolver = true;
  for (const inventor of inventors) {
    if (inventor.year < 1500) {
      aDevolver = false;
    }
  }

  return aDevolver;

}
console.log(inventor1500(inventors));


// 6.- Ordenar los inventores por fecha de nacimiento

console.log("\n----------- Ejercicio 6 --------------\n");

function sortByYearOfBirthAndPrint(inventors) {

const inventorsAux = inventors.slice();

  inventorsAux.sort((a, b) => a.year - b.year);
  printInventors(inventorsAux);
}

sortByYearOfBirthAndPrint(inventors);

// 7.- Ordenar los inventores por Apellido

console.log("\n----------- Ejercicio 7 --------------\n");

function sortByLastNameAndPrint(inventors) {
  const sortedInventors = inventors.slice().sort((a, b) => a.last.localeCompare(b.last));
  printInventors(sortedInventors);
}

sortByLastNameAndPrint(inventors);


// 8.- Convertir el array a un formato:
console.log(
  inventors.map((inventor) => ({
    name: {
      first: inventor.first,
      last: inventor.last,
    },
    year: inventor.year,
  }))
);
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

console.log("\n----------- Ejercicio 8 --------------\n");

function arrayFormato(inventors) {
  const formatoArray = [];
  for (const inventor of inventors) {
    const objeto = {
      name: {
        first: inventor.first,
        last: inventor.last
      },
      year: inventor.year
    };
    formatoArray.push(objeto);
  }
  return formatoArray; // Devolver el nuevo arreglo al final de la función
}


function printInventorsOtroFormato(arrayFormato) {
  console.log("[");
  for (const inventor of arrayFormato) {
    console.log(` {name: { first: '${inventor.name.first}', last: '${inventor.name.last}' },`);
    console.log(`  year: ${inventor.year}`);
      console.log(" }");
    }
    console.log("]");
  }

printInventorsOtroFormato(arrayFormato(inventors));


