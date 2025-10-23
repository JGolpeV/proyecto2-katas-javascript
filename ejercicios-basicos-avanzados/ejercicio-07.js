/* Completa esta función para que, al recibir dos números por argumento, te devuelva por consola el más alto de los dos. */

function greaterNumber(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    console.log(`El número ${numberOne} es mayor que ${numberTwo}`);
  } else if (numberOne < numberTwo) {
    console.log(`El número ${numberTwo} es mayor que ${numberOne}`);
  } else {
    console.log(`Los números son iguales`);
  }
}
greaterNumber(2, 6);
greaterNumber(6, 4);
greaterNumber(6, 6);
