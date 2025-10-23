/* Dada una lista de artistas con sus influencias, utiliza bucles anidados para listar todos los artistas y sus influencias directas e imprime cada par por consola. */

const artists = [
  { name: "Kurt Cobain", influences: ["The Beatles", "Pixies", "Lead Belly"] },
  {
    name: "David Bowie",
    influences: ["Little Richard", "Chuck Berry", "The Velvet Underground"],
  },
  {
    name: "Eddie Vedder",
    influences: ["The Who", "Neil Young", "Jim Morrison"],
  },
  {
    name: "Freddie Mercury",
    influences: ["Liza Minnelli", "Jimi Hendrix", "Aretha Franklin"],
  },
  {
    name: "John Lennon",
    influences: ["Elvis Presley", "Chuck Berry", "Buddy Holly"],
  },
];

const artisInfluences = {};

artists.forEach((artist) => {
  if (!artisInfluences[artist.name]) {
    artisInfluences[artist.name] = [];
  }
  artist.influences.forEach((influence) => {
    artisInfluences[artist.name].push(influence);
  });
  console.log(
    `El artista, ${artist.name} tiene influencias de: ${
      artisInfluences[artist.name]
    }`
  );
});
