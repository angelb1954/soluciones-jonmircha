
//Soluciones Angel//

  // 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe.miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

//   const contarVocales= (texto="") =>{
//     texto = texto.replace(/\s/g, "");
//     let vocales = texto.match(/[aeiouáéíóú]/gi).length;
//     let consonantes =  texto.length - vocales ;
    
//     if (texto="") console.warn("No ha introducido un texto");
     

//    else
   
//    console.info(`El texto introducido tiene  ${vocales} vocales y ${consonantes} consonantes`);  
    
//   }
  
  

// contarVocales("Sed buenos");





  // 19) Programa una función que valide que un texto sea un nombre válido, pe.miFuncion("Jonathan MirCha") devolverá verdadero.

//   const evaluarNombre = (nombre=undefined, apellido=undefined)=>{
    
    

//     if (nombre ===undefined) console.warn("No ha introducido el nombre");
//     if (apellido ===undefined) console.warn("No ha introducido el apellido");
//     if (typeof nombre !=="string") console.warn("El nombre introducido no es correcto");
//     if (typeof apellido !=="string") console.warn("El apellido introducido no es correcto");
     
// else
    
// console.info(`El nombre ${nombre} y apellido ${apellido}  introducidos son correctos`);

    

//   }

//   evaluarNombre();














// 20) Programa una función que valide que un texto sea un email válido, pe.miFuncion("jonmircha@gmail.com") devolverá verdadero.

//   function validarEmail(correoe) {
//     var expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/; 
    
//     var esValido= expReg.test(correoe)
//     if (esValido==true)
//     {
//       alert("La dirección de email  es correcta!.");
//     } 
//     else {
//       alert("La dirección de email es incorrecta!.");
//     }
//   }

// validarEmail("angelb@gmailcom");






  



//Soluciones Jon Mircha

  /* 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5 */
  // const contarLetras = (cadena = "") => {
  //   if (!cadena) return console.warn("No ingresaste una cadena de texto");

  //   if (typeof cadena !== "string") return console.error(`El valor "${cadena}" ingresado, NO es una cadena de texto`);

  //   let vocales = 0,
  //     consonantes = 0;

  //   cadena = cadena.toLocaleLowerCase();

  //   for (let letra of cadena) {
  //     if (/[aeiouáéíóúü]/.test(letra)) vocales++;

  //     if (/[bcdfghjklmnñpqrstvwxyz]/.test(letra)) consonantes++;
  //   }

  //   return console.info({
  //     cadena,
  //     vocales,
  //     consonantes
  //   })
  // }

  // contarLetras("Sed buenos");



  // contarLetras(3);
  // contarLetras("Hola Mundo");
  // contarLetras("Ñoño");

  //contarLetras("Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim officiis, ipsum reiciendis aperiam vero voluptatem quo aliquam, rerum voluptate consequatur est totam, nobis aut expedita officia ea consectetur autem sunt.");





  /* 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero */
  // const validarNombre = (nombre = "") => {
  //    if (!nombre) return console.warn("No ingresaste un nombre");

  //    if (typeof nombre !== "string") return console.error(`El valor "${nombre}" ingresado, NO es una cadena de texto`);

  //    let expReg = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g.test(nombre);

  //    return (expReg)
  //      ? console.info(`"${nombre}", es un nombre válido`)
  //      : console.warn(`"${nombre}", NO es un nombre válido`);
  //  }

  // validarNombre();
  // validarNombre(3);
  // validarNombre("Jonathan MirCha");
  //  validarNombre("Jonathan MirCha ,19");








  /* 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero */
  // const validarEmail = (email = "") => {
  //   if (!email) return console.warn("No ingresaste un email");

  //   if (typeof email !== "string") return console.error(`El valor "${email}" ingresado, NO es una cadena de texto`);

  //   let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);

  //   return (expReg)
  //     ? console.info(`"${email}", es un email válido`)
  //     : console.warn(`"${email}", NO es un email válido`);
  // }

  //validarEmail();
  //validarEmail(34);
  //validarEmail("jon,mir,cha@gmail");
  //validarEmail("jonmircha@gmail.com");





  /* Fusión de los ejercicios 19 y 20 */
  // const validarPatron = (cadena = "", patron = undefined) => {
  //   if (!cadena) return console.warn("No ingresaste una cadena de texto a evaluar");

  //   if (typeof cadena !== "string") return console.error(`El valor "${cadena}" ingresado, NO es una cadena de texto`);

  //   if (patron === undefined) return console.warn("No ingresaste una patrón a evaluar");

  //   if (!(patron instanceof RegExp)) return console.error(`El valor "${patron}" ingresado, NO es una expresión regular`);

  //   let expReg = patron.test(cadena);

  //   return (expReg)
  //     ? console.info(`"${cadena}", cumple con el patrón ingresado`)
  //     : console.warn(`"${cadena}", NO cumple con el patrón ingresado`);
  // }

    //validarPatron();
    //validarPatron({});
    //validarPatron("Hola Mundo");
    //validarPatron("Hola Mundo", "hola");
    //validarPatron("Hola Mundo", [1, 2, 3]);
    //validarPatron("Jonathan MirCha", /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g);
    //validarPatron("Jonathan MirCha 19", /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g);
    //validarPatron("jonmircha@gmail", new RegExp("/[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/", "i"));
    //validarPatron("jonmircha@gmail.com", new RegExp("[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})", "i"));








   