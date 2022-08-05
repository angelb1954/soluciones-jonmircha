const promedio = (array) => {

  if (!(array instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");

  if (array.length === 0) return console.error("El arreglo esta vacío");



  let suma = 0
  for (let i = 0; i < array.length; i++) {
    suma += array[i]
    suma = suma / array.length;
  
    console.info(suma);
  }
}
promedio([7, 5, 7, 8, 6]);
promedio([]);
promedio("a,b,c");
