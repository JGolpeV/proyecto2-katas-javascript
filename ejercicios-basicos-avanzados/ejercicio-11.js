/* Calcular promedio mezclado: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume.
Es un poco locura, pero podremos ejercitar nuestra lógica con este ejercicio.
Puedes usar este array para probar tu función: */

const mixedElements = [
  6,
  1,
  "Marvel",
  1,
  "hamburguesa",
  "10",
  "Prometeo",
  8,
  "Hola mundo",
];

function averageWord(list) {
  let cont = 0;

  for (const item of list) {
    if (typeof item === "string") {
      cont += item.length;
    } else {
      cont += item;
    }
  }

  console.log(`El promedio de esta lista es: ${cont / list.length}`);
}

averageWord(mixedElements);
