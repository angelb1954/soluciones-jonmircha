
//Soluciones Angel//

  // 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe.mi_funcion([1, 4, 5]) devolverá[1, 16, 25].

// let numeros = [1,3,5,7];

  
//   let power = numeros.map(function (num) {
//     return Math.pow(num, 2);})

// alert(power);








// 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe.miFuncion([1, 4, 5, 99, -60]) devolverá[99, -60].

//  const buscarMayorMenor = (arr=undefined)=>{
  
// if (arr.length===0) return console.error("el arreglo no tiene contenido");




//   let mayorArray=(Math.max (...arr));
//   let menorArray=(Math.min (...arr));
  
 



// return console.info(`El numero mas alto es ${mayorArray}\n y el numero mas bajo es ${menorArray}\n"`)
  
//  }

//  buscarMayorMenor([]);







// 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe.miFuncion([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) devolverá { pares: [2, 4, 6, 8, 0], impares: [1, 3, 5, 7, 9] }.


  const mayorMenor = (arr = undefined) => {

if (arr.length===0) return console.error("el arreglo no tiene contenido");





  
  return console.info({
    pares : arr.filter(num => num % 2 === 0),
    impares : arr.filter(num => num % 2 === 1)
  });





 }
  mayorMenor([]);
   mayorMenor([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
 









//Soluciones Jon Mircha


  /* 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25] */

  // const devolverCuadrados = (arr = undefined) => {
  //   if (arr === undefined) return console.warn("No ingresaste un arreglo de números");

  //   if (!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");

  //   if (arr.length === 0) return console.error("El arreglo esta vacío");

  //   for (let num of arr) {
  //     if (typeof num !== "number") return console.error(`El valor "${num}" ingresado, NO es un número`);
  //   }

  //   const newArr = arr.map(el => el * el);

  //   return console.info(`Arreglo original: ${arr},\nArreglo elevado al cuadrado: ${newArr}`);
  // }

  //devolverCuadrados();
  //devolverCuadrados(true);
  //devolverCuadrados({});
  //devolverCuadrados([]);
  //devolverCuadrados([1, "3", 4, {}]);
  //devolverCuadrados([1, 4, {}]);
  //devolverCuadrados([1, 4, 8]);





  /* 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60] */

  // const arrayMinMax = (arr = undefined) => {
  //   if (arr === undefined) return console.warn("No ingresaste un arreglo de números");

  //   if (!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");

  //   if (arr.length === 0) return console.error("El arreglo esta vacío");

  //   for (let num of arr) {
  //     if (typeof num !== "number") return console.error(`El valor "${num}" ingresado, NO es un número`);
  //   }

  //   return console.info(`Arreglo original: ${arr}\nValor mayor: ${Math.max(...arr)},\nValor menor: ${Math.min(...arr)}`);
  // }

  // arrayMinMax();
    //arrayMinMax(false);
    //arrayMinMax([]);
    //arrayMinMax([2, 3, true]);
    //arrayMinMax([1, 4, 5, 99, -60]);





  /* 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]} */

    // const separarParesImpares = (arr = undefined) => {
    //   if (arr === undefined) return console.warn("No ingresaste un arreglo de números");

    //   if (!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");

    //   if (arr.length === 0) return console.error("El arreglo esta vacío");

    //   for (let num of arr) {
    //     if (typeof num !== "number") return console.error(`El valor "${num}" ingresado, NO es un número`);
    //   }

    //   return console.info({
    //     pares: arr.filter(num => num % 2 === 0),
    //     impares: arr.filter(num => num % 2 === 1)
    //   })
    // }

    // separarParesImpares();
    // separarParesImpares("hola");
    // separarParesImpares([]);
    // separarParesImpares([2, 4, "j"]);
    // separarParesImpares([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);




   