
const beers = [
  {
    name: "Orange Blossom Pilsner",
    abv: 5.5,
    label:
      "https://s3.amazonaws.com/brewerydbapi/beer/Rczcb9/upload_9Nhxxl-large.png",
    type: "Pilsner",
  },
  {
    name: "Darkness",
    abv: 4.2,
    label:
      "https://s3.amazonaws.com/brewerydbapi/beer/lnxbIV/upload_idNXFf-large.png",
    type: "Stout",
  },
  {
    name: "Belgian Wit",
    abv: 5.4,
    label:
      "https://s3.amazonaws.com/brewerydbapi/beer/3CvVQG/upload_xOMnlK-large.png",
    type: "Wheat",
  },
  {
    name: "Stolen Fruit",
    abv: 4.6,
    label:
      "https://s3.amazonaws.com/brewerydbapi/beer/YGT30k/upload_uVCHP7-large.png",
    type: "Wheat",
  },
  {
    name: "Purple Iris",
    abv: 6.8,
    label:
      "https://s3.amazonaws.com/brewerydbapi/beer/dMLwGo/upload_yiUllE-large.png",
    type: "IPA",
  },
];

/* 1.- Desarrollar una function que retorne un array que incluya el precio segun el siguiente criterio
 *     a) Si el  grado alcoholico es < a 5.0 el precio es 300
 *     b) Si el grado alcoholico es >= 5.0 el precio es 350
 *     c) La cerveza 'Purple Iris' esta de oferta y su precio es 320
 */
function arrayCervezas() {
  return beers.map((beer) => {
    const price =
      beer.name === "Purple Iris" ? 320 : beer.abv < 5.0 ? 300 : 350;
    return { ...beer, price };
  });
}

const cervezasConPrecio = arrayCervezas();
console.log(cervezasConPrecio);

/* 2.- Desarrolle una función que inserte la propiedad file_name a cada uno de los objetos, esta propiedad debe tener solo  
el nombre del archivo de la propiedad label (upload_xOMnlK-large.png, etc..)*/

function splitBeer() {
  return beers.map((beer) => {
    const file_name = beer.label.split("/")
    return {...beer , file_name: file_name[file_name.lengh -1]}
  })
}

const arrayBeer = splitBeer();
console.log(arrayBeer);


/* 3.- Desarrollo una funcion que ordene por tipo (type)*/

function sortXType (beers) {
 return beers.sort((a, b) => (a.type > b.type ? 1 : -1))
}

const sortFix = sortXType(beers);
console.log(sortFix[0]);
console.log(sortFix[1]);
console.log(sortFix[2]);
console.log(sortFix[3]);
console.log(sortFix[4]);

