/* Desarrolla una función que busque en un array de objetos representando mutantes si existe alguno con un poder específico y retorne un mensaje indicando si fue encontrado o no.
Considera el caso de múltiples mutantes con el mismo poder. */

const mutants = [
  { name: "Wolverine", power: "regeneration" },
  { name: "Magneto", power: "magnetism" },
  { name: "Professor X", power: "telepathy" },
  { name: "Jean Grey", power: "telekinesis" },
  { name: "Rogue", power: "power absorption" },
  { name: "Storm", power: "weather manipulation" },
  { name: "Mystique", power: "shape-shifting" },
  { name: "Beast", power: "superhuman strength" },
  { name: "Colossus", power: "steel skin" },
  { name: "Nightcrawler", power: "teleportation" },
];

let found = false;

function findMutantByPower(mutants, power) {
  mutants.forEach((mutant) => {
    if (mutant.power == power) {
      console.log(`El mutante ${mutant.name} tiene el poder ${power}`);
      found = true;
    }
  });

    if (!found) {
        console.log(`Hasta la fecha, no hay mutantes con ese poder`);
    }
}

findMutantByPower(mutants, "magnetism");
findMutantByPower(mutants, "power absorption");
findMutantByPower(mutants, "teleportation");

findMutantByPower(mutants, "waterproof");

//Si se ponen varias funciones y una se cumple, no sale el mensaje de las que no se cumplen


