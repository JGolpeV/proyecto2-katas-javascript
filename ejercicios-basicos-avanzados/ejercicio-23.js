/* Usa un bucle para crear 3 arrays de películas filtrados por categorías.
Pelicula pequeña -> menos de 100 minutos, película mediana -> más de 100 minutos y menos de 200 y pelicula grande -> más de 200 minutos.
Imprime cada array por consola. */

const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
  { name: "Spirited Away", durationInMinutes: 80 },
  { name: "The Matrix", durationInMinutes: 136 },
  { name: "Amélie", durationInMinutes: 110 },
  { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },
];

const peliPequeña = [];
const peliMediana = [];
const peliGrande = [];

for (const movie of movies) {
  if (movie.durationInMinutes <= 100) {
    peliPequeña.push(movie.name);
  } else if (movie.durationInMinutes > 100 && movie.durationInMinutes < 200) {
    peliMediana.push(movie.name);
  } else if (movie.durationInMinutes > 200) {
    peliGrande.push(movie.name);
  }
}

console.log(`Las peliculas pequeñas son:`);
console.log(peliPequeña);
console.log(`Las peliculas medianas son:`);
console.log(peliMediana);
console.log(`Las peliculas grandes son:`);
console.log(peliGrande);

