//Soluciones Angel//

///////////////////////////////////////////////////////////////
    5) Programa una función que invierta las palabras de una cadena de texto, pe.miFuncion("Hola Mundo") devolverá "odnuM
// aloH".

// const invertirPalabras = (cadena = "") =>
//      (!cadena)
//          ? console.warn("No ingresaste ninguna cadena")
//          : console.info(`La cadena "${cadena}" se puede leer al reves como ${cadena.split("").reverse().join("") }; `);

//         invertirPalabras("");
//         invertirPalabras("Hola Mundo");

//              6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe.miFuncion("hola
// mundo adios mundo", "mundo") devolverá 2.

// function contarPalabras(str) {
//         palabras = str.split(' ');
//         obj = new Array();
//         for (i = 0; i < palabras.length; i++) {

//             obj[palabras[i]] = 1;
//             for (j = 0; j < palabras.length; j++) {

//                 if (i != j) {
//                     if (palabras[i] === palabras[j]) {
//                         obj[palabras[i]]++;
//                     }
//                 }
//             }
//         }
//         alert("Hola: " + obj['hola']);
//         alert("mundo: " + obj['mundo']);
//         alert("adios: " + obj['adios']);
//     }
//     contarPalabras("hola mundo adios mundo");

//     7) Programa una función que valide si una palabra o frase dada, es un palíndromo(que se lee igual en un sentido que en otro), pe.mifuncion("Salas") devolverá true.

// console.log(palindromeChecker("reconocer"));
// console.log(palindromeChecker("Atar a la rata"));

//     8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe.miFuncion("xyz1, xyz2, xyz3, xyz4
// y xyz5", "xyz") devolverá "1, 2, 3, 4 y 5.

// let elimPatron = "xyz1, xyz2, xyz3, xyz4, xyz5";

// elimPatron = elimPatron.replace(/xyz/g, "");
// console.log (elimPatron);

//Soluciones Jon Mircha

/* 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH" */
const invertirCadena = (cadena = "") =>
  !cadena
    ? console.warn("No ingresaste una cadena de texto")
    : console.info(cadena.split("").reverse().join(""));

//invertirCadena();
//invertirCadena("Hola Mundo");
//invertirCadena("JavaScript es un lenguaje de programación increíble");
//invertirCadena("Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ab blanditiis maxime ratione tenetur delectus facere ducimus consequatur. Delectus velit quasi consequuntur unde quo voluptas necessitatibus ipsum nostrum. Deleniti, fugit?");

/* 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2 */
const textoEnCadena = (cadena = "", texto = "") => {
  if (!cadena) return console.warn("No ingresaste el texto largo");

  if (!texto) return console.warn("No ingresaste la palabra a evaluar");

  let i = 0,
    contador = 0;

  while (i !== -1) {
    i = cadena.indexOf(texto, i);
    if (i !== -1) {
      i++;
      contador++;
    }
  }

  return console.info(`La palabra ${texto} se repite ${contador} veces`);
};

//textoEnCadena();
//textoEnCadena("", "mundo");
textoEnCadena("hola mundo adios mundo");
//textoEnCadena("hola mundo adios mundo", "mundo");

/* 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true */
const palindromo = (palabra = "") => {
  if (!palabra) return console.warn("No ingresaste una palabra o frase");

  palabra = palabra.toLowerCase();
  let alReves = palabra.split("").reverse().join("");

  return palabra === alReves
    ? console.info(
        `Sí es palíndromo, Palabra original ${palabra}, Palabra al revés ${alReves}`
      )
    : console.info(
        `No es palíndromo, Palabra original ${palabra}, Palabra al revés ${alReves}`
      );
};

palindromo("Salas");

//palindromo("hola Mundo");
//palindromo("SaLas");

/* 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5 */
const eliminarCaracteres = (texto = "", patron = "") =>
  !texto
    ? console.warn("No ingresaste un texto")
    : !patron
    ? console.warn("No ingresaste un patrón de caracteres")
    : console.info(texto.replace(new RegExp(patron, "ig"), ""));

//eliminarCaracteres();
//eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5");
//eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");
//eliminarCaracteres("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur commodi ratione fugit qui, dolore quos deserunt iusto veritatis reiciendis quam. Delectus iure voluptatum officia cupiditate voluptas voluptate corrupti, officiis perferendis!", "[a-z]");
