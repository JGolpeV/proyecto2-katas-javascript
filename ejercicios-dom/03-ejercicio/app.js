/* 1.1 Basandote en el array siguiente, crea una lista ul > li
dinámicamente en el html que imprima cada uno de los paises. */

const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];
const ul = document.createElement("ul");

countries.forEach((country) => {
  const li = document.createElement("li");
  li.textContent = country;
  ul.appendChild(li);
});
document.body.appendChild(ul);

/* 1.2 Elimina el elemento que tenga la clase .fn-remove-me. */
const removeMe = document.querySelector(".fn-remove-me");
removeMe.remove();

/* 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
en el div de html con el atributo data-function="printHere". */
const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];

const printHere = document.querySelector('div[data-function="printHere"]');
const ulCars = document.createElement("ul");
cars.forEach((car) => {
  const li = document.createElement("li");
  li.textContent = car;
  ulCars.appendChild(li);
});
printHere.appendChild(ulCars);

/* 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento
h4 para el titulo y otro elemento img para la imagen. */
const images = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

images.forEach((image) => {
  const div = document.createElement("div");
  div.className = "foto";
  const h4 = document.createElement("h4");
  h4.textContent = image.title;
  const img = document.createElement("img");
  img.src = image.imgUrl;
  div.appendChild(h4);
  div.appendChild(img);
  document.body.appendChild(div);
});

/* 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
elemento de la serie de divs. */
const btn = document.createElement("button");
btn.textContent = "Eliminar div";
btn.addEventListener("click", () => {
  const div = document.querySelectorAll(".foto");
  div[div.length - 1].remove();
});
document.body.appendChild(btn);

/* 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
divs que elimine ese mismo elemento del html. */
const div = document.querySelectorAll(".foto");
div.forEach((div) => {
  const btn = document.createElement("button");  
    btn.textContent = "Eliminar éste";
    btn.addEventListener("click", () => {
        div.remove();
    });
    div.appendChild(btn);
});

