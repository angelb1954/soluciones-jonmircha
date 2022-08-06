

//Soluciones Angel

  // 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe.miFuncion(100, 2) devolverá 4 base 10.

  const convertirNumeros = (numeros = undefined, unidad = undefined) => {
      if (numeros === undefined) return console.warn("No ingresaste cifra a convertir");

      if (typeof numeros !== "number") return console.error(`El valor "${numeros}" ingresado, NO es un número`);

      if (unidad === undefined) return console.warn("No ingresaste el tipo de numero a convertir");

      if (typeof unidad !== "string") return console.error(`El valor "${unidad}" ingresado, NO es una cadena de texto`);

      if (unidad.length !== 3 || !/(B02|B10)/.test(unidad)) return console.warn("Valor de unidad no reconocido");

      if (unidad === String && numeros >=1) return console.warn("Valor de unidad no reconocido");

    if (unidad === "B10") {
      return console.info(`${numeros} en base binaria = ${parseInt(numeros, 2)} en base decimal`);
    } else if (unidad === "B02") {
      return console.info(`${numeros} en base decimal = ${(numeros.toString(2)) } en base binaria`);
    } else {
      return console.error("El tipo de numeros a convertir NO es válido");
    }
  }
    convertirNumeros(100110, "B10");



  //   convertirNumeros("2");
  //   convertirNumeros(2);
  //   convertirNumeros(2, true);
  //   convertirNumeros(2, "E");
  //   convertirNumeros(1001, "B10");
  //   convertirNumeros(100110, "2");
  // convertirNumeros(38, "B02");

   





  // 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe.miFuncion(1000, 20) devolverá 800.

const montoFinal = (importe= undefined, descuento= undefined)=>{

if (typeof importe!== "number") console.warn ("El importe introducido no es un numero");

if (typeof descuento!== "number") console.warn ("El importe introducido no es un numero");

if (descuento >= 100) console.warn("El descuento introducido no es superior al importe de la compra");

else console.info(`El importe neto una vez aplicado el ${descuento} de descuento asciende a ${(importe)*(100-descuento)/100}`);

  

}

  montoFinal(10000, 20); 










  // 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe.miFuncion(new Date(1984, 4, 23)) devolverá 35 años(en 2020).

  // function diferenciaAgnios(fecha1, fecha2) {
  //     if (!(fecha1 instanceof Date) || !(fecha2 instanceof Date)) {
  //       throw TypeError('Ambos argumentos deben ser objetos de tipo fecha (Date)');
  //     }

  //     let diferencia = (fecha2.getTime() - fecha1.getTime()) / 1000;

  //     diferencia /= (60 * 60 * 24);
  //     diferencia /= 365.25;

  //     return Math.abs(Math.round(diferencia));
  //   }

  //   console.log(new Date());

      
  //   console.log(diferenciaAgnios(new Date(), new Date(2043, 0, 1)));
    
        
  //    console.log(diferenciaAgnios(42, new Date(2043, 0, 1)));    

//Solución encontrada en Internet(John Ortiz Ordoñez. Gracias)



//Soluciones Jon Mircha

  /* 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10 */
  // const convertirBinarioDecimal = (numero = undefined, base = undefined) => {
  //   if (numero === undefined) return console.warn("No ingresaste el número a convertir");

  //   if (typeof numero !== "number") return console.error(`El valor "${numero}" ingresado, NO es un número`);

  //   if (base === undefined) return console.warn("No ingresaste la base a convertir");

  //   if (typeof base !== "number") return console.error(`El valor "${base}" ingresado, NO es un número`);

  //   if (base === 2) {
  //     return console.info(`${numero} base ${base} = ${parseInt(numero, base)} base 10`);
  //   } else if (base === 10) {
  //     return console.info(`${numero} base ${base} = ${(numero.toString(base))} base 2`);
  //   } else {
  //     return console.error("El tipo de base a convertir NO es válido");
  //   }
  // }

  //convertirBinarioDecimal();
  //convertirBinarioDecimal("2");
  //convertirBinarioDecimal(100);
  //convertirBinarioDecimal(100, "2");
  //convertirBinarioDecimal(100, 2);
  //convertirBinarioDecimal(1110010, 2);
  //convertirBinarioDecimal(4, 10);
  //convertirBinarioDecimal(114, 10);
  //convertirBinarioDecimal(114, 3);





  /* 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800 */


  // const aplicarDescuento = (monto = undefined, descuento = 0) => {
  //   if (monto === undefined) return console.warn("No ingresaste el monto");

  //   if (typeof monto !== "number") return console.error(`El valor "${monto}" ingresado, NO es un número`);

  //   if (monto === 0) return console.error("El monto no puede ser 0");

  //   if (Math.sign(monto) === -1) return console.error("El monto no puede ser negativo");

  //   if (typeof descuento !== "number") return console.error(`El valor "${descuento}" ingresado, NO es un número`);

  //   if (Math.sign(descuento) === -1) return console.error("El descuento no puede ser negativo");

  //   return console.info(`$${monto} - ${descuento}% = $${monto - ((monto * descuento) / 100)}`)
  // }

  //aplicarDescuento();
  //aplicarDescuento("200");
  //aplicarDescuento(0);
  //aplicarDescuento(-1000);
  //aplicarDescuento(1000, "20");
  //aplicarDescuento(1000, -20);
  //aplicarDescuento(1000);
  //aplicarDescuento(1000, 25);





  /* 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020) */


  const calcularAnios = (fecha = undefined) => {
    if (fecha === undefined) return console.warn("No ingresaste la fecha");

    if (!(fecha instanceof Date)) return console.error("El valor que ingresaste no es una fecha válida");

    let hoyMenosFecha = new Date().getTime() - fecha.getTime(),
      aniosEnMS = 1000 * 60 * 60 * 24 * 365,
      aniosHumanos = Math.floor(hoyMenosFecha / aniosEnMS);

    return (Math.sign(aniosHumanos) === -1)
      ? console.info(`Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}.`)
      : (Math.sign(aniosHumanos) === 1)
        ? console.info(`Han pasado ${aniosHumanos} años, desde ${fecha.getFullYear()}.`)
        : console.info(`Estamos en el año actual ${fecha.getFullYear()}.`)
  }

    calcularAnios();
    calcularAnios({});
    calcularAnios(false);
    calcularAnios(new Date());
    calcularAnios(new Date(1984, 4, 23));
    calcularAnios(new Date(1884, 4, 23));
    calcularAnios(new Date(2084, 4, 23));


/////////////////////////





