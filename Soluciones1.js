// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
////////////////////////////
//TEORIA
// Console.warn()
// Imprime un mensaje de advertencia en la Consola Web.
// Console.info()
// Emite un mensaje informativo a la Consola Web.En Firefox y Chrome, se muestra un pequeño ícono "i" junto a estos elementos en el registro de la Consola Web.
//FIN DE TEORIA
////////////////////////////

// function contarCaracteres(cadena=""){
//     if (!cadena){console.warn("No ingresaste ninguna cadena")}
//     else{
//         console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres`);
//     }
// }
// contarCaracteres();
// contarCaracteres("Hola Mundo");

///////////////////////////
//
// TEORIA
//Funciones declaradas VS funciones expresadas

//funcionDeclarada();

/* function funcionDeclarada() {
      console.log("Esto es un función declarada, puede invocarse en cualquier parte de nuestro código, incluso antes de que la función sea declarada");
    } */

//funcionDeclarada();

//funcionExpresada();

//función anónima
/* const funcionExpresada = function () {
      console.log("Esto es una función expresada, es decir, una función que se le ha asignado como valor a una variable, si invocamos esta función antes de su definición JS nos dirá 'Cannot access 'funcionExpresada' before initialization'")
    } */

//funcionExpresada();

// ARROW Function
//     https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions

// Comparación de funciones tradicionales con funciones flecha
//     Observa, paso a paso, la descomposición de una "función tradicional" hasta la "función flecha" más simple:
//     Nota: Cada paso a lo largo del camino es una "función flecha" válida

//     // Función tradicional
//     function (a) {
//         return a + 100;
//     }

// Desglose de la función flecha

// 1. Elimina la palabra "function" y coloca la flecha entre el argumento y el corchete de apertura.
// (a) => {
//     return a + 100;
// }

// 2. Quita los corchetes del cuerpo y la palabra "return" — el return está implícito.
// (a) => a + 100;

// 3. Suprime los paréntesis de los argumentos
//     a => a + 100;
// Como se muestra arriba, los { corchetes }, (paréntesis) y "return" son opcionales, pero pueden ser obligatorios.

// FIN DE TEORIA
////////////////////////////

// Con ayuda de las funciones expresadas y la de las arrow functions, vamos a escribir la función en una sola linea de código.

////////////////////////////////////////////////////////////////////////////
//RESOLUCION DEL EJERCICIO MEDIANTE ARROW FUNCTION
// const contarCaracteres = (cadena = "") =>
//     (!cadena)
//         ? console.warn("No ingresaste ninguna cadena")
//         : console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres`);

// contarCaracteres();

// contarCaracteres("Hola Mundo");

///////////////////////////////////////////////////////////////////////////

//     2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe.miFuncion("Hola
// Mundo", 4) devolverá "Hola".

//RESOLUCION DEL EJERCICIO MEDIANTE ARROW FUNCTION

const recortarTexto = (cadena = "", longitud = undefined) =>
  !cadena
    ? console.warn("No ingresaste una cadena de texto")
    : longitud === undefined
    ? console.warn("No ingresaste la longitud para recortar el texto")
    : console.info(cadena.slice(0, longitud));

// recortarTexto("Hola Mundo", 4);
//recortarTexto();
//recortarTexto("Hola Hola");
//recortarTexto("", 5);

/////////////////////////

// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe.
//     miFuncion('hola que tal', ' ') devolverá['hola', 'que', 'tal'].

//RESOLUCION DEL EJERCICIO MEDIANTE ARROW FUNCTION

// const cadenaAArreglo = (cadena = "", separador = undefined) =>
//     (!cadena)
//         ? console.warn("No ingresaste una cadena de texto")
//         : (separador === undefined)
//             ? console.warn("No ingresaste el caracter separador")
//             : console.info(cadena.split(separador));

// cadenaAArreglo("Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique architecto dolore quisquam minima. Velit, facere. Iusto expedita saepe possimus. Nobis fugit quasi cumque placeat vero nam aut iure suscipit? Dolore.", " ");
// cadenaAArreglo("Ene,Feb,Mar,Abr,May,Jun,Jul,Ago,Sep,Oct,Nov,Dic", ",");
// cadenaAArreglo();
// cadenaAArreglo("Hola Mundo");
// cadenaAArreglo("", "-");

////////////////////////////////////////////////////////////////////////////////////

// 4) Programa una función que repita un texto X veces, pe.miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

//RESOLUCION DEL EJERCICIO MEDIANTE ARROW FUNCTION

const repetirTexto = (texto = "", veces = undefined) => {
  if (!texto) return console.warn("No ingresaste un texto");

  if (veces === undefined)
    return console.warn("No ingresaste el número de veces a repetir el texto");

  if (veces <= 0)
    return console.error("El número de veces debe ser un entero positivo");

  for (let i = 1; i <= veces; i++) console.info(`${texto}, ${i}`);
};

repetirTexto("Hola Mundo", 3);
repetirTexto("Hola Mundo", 0);
repetirTexto("Hola Mundo", -20);
repetirTexto("", 20);
repetirTexto("Hola Mundo");
