import { beers } from "./stock.js";
import { addCart, saveData } from "./cart.js";

const getContent = (beers) => {
  const beerContainer = document.getElementById("beerContainer");

  beers.forEach((beer) => {
    const { id, poster, nombre, tipo, precio } = beer;

    const div = document.createElement("div");
    div.classList.add("containerOfBeers");
    div.innerHTML += `<div class="card" style="width: 18rem;">
        <img src="${poster}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${nombre}</h5>
          <p class="card-text">${tipo}</p>
          <p class="card-text">PRECIO:$${precio}</p>
          <button class="btn btn-primary" id="add-item-${id}">Agregar al carrito</button>
        </div>
      </div>`;
    beerContainer.appendChild(div);

    const boton = document.getElementById(`add-item-${beer.id}`);

    boton.addEventListener("click", () => {
      addCart(id);
    });
  });
};
getContent(beers);

const boton = document.getElementById("buttonFinalizar");
boton.addEventListener("click", () => {
  saveData();
  window.location.assign("formulario.html");
});
