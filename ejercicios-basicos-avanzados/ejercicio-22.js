/* Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas.
Recuerda no usar frutas duplicadas.
Finalmente, imprime el array resultante. */

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

const veganSchedule = [];
let j = 0;

for (let i = 0; i < foodSchedule.length; i++) {
  if (!foodSchedule[i].isVegan) {
    veganSchedule.push({ name: fruits[j], isVegan: true });
    j++;
  } else {
    veganSchedule.push(foodSchedule[i]);
  }
}

console.log(veganSchedule);
