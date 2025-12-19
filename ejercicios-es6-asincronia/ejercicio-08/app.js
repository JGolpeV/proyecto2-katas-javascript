/* ## **Ejercicio 8**
Accederemos a los datos de una API pública de Game Of Thrones, queremos un select con todos los nombres de los personajes para que cuando un usuario seleccione un nombre salga su imagen en el medio de la página 
- API: `https://thronesapi.com/api/v2/Characters`
*/

const select = document.querySelector("#character-list");
const img = document.querySelector(".character-image");

let characters = [];

const getCharacters = async () => {
  try {
    const res = await fetch("https://thronesapi.com/api/v2/Characters");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};


const renderCharacters = async () => {
  characters = await getCharacters();

  characters.forEach((character) => {
    const option = document.createElement("option");
    option.textContent = character.fullName;
    option.value = character.id;
    select.appendChild(option);
  });

  // Ayuda ChatGPT - Mostrar imagen del primer personaje por defecto
  img.src = characters[0].imageUrl;
};


// Ayuda paso a paso de ChatGPT para el listener
select.addEventListener("change", () => {
  const characterId = Number(select.value);
  const character = characters.find((char) => char.id === characterId);
  if (character) {
    img.src = character.imageUrl;
  }
});

renderCharacters();

