import { getBeerById } from "./stock.js";

export let cart = [];

const deleteItem = (mensaje, bgColor) => {
  Swal.fire({
    title: "ELIMNADO DEL CARRITO",
    icon: "success",
    confirmButtonText: "OK",
    background: bgColor || "#193028",
    color: "white",
  });
};

const removeItem = (beer) => {
  const item = document.getElementById(`cart-item-${beer.id}`);
  cart = cart.filter((item) => item.id !== beer.id);
  item.remove();
  renderTotal();
};

const renderItem = (beer) => {
  const { id, tipo, precio } = beer;

  const cartContainer = document.getElementById("cartContainerr");

  const div = document.createElement("div");
  div.id = `cart-item-${id}`;
  div.classList.add("beerInCart");
  div.innerHTML = `<p class="card-text">${tipo}</p>
  <p class="card-text">$${precio}</p>
  <button class="btn light" id="remove-item-${id}">X</button>`;

  cartContainer.appendChild(div);

  const boton = document.getElementById(`remove-item-${beer.id}`);

  boton.addEventListener("click", () => {
    removeItem(beer);
    deleteItem();
  });
};

const renderTotal = () => {
  const total = cart.reduce((acc, item) => acc + item.precio, 0);
  const totalResult = document.getElementById("total");
  totalResult.innerText = `$${total}`;

  const boton = document.getElementById("buttonFinalizar");
  boton.disabled = cart.length == 0;
};

export const addCart = (beerId) => {
  const beer = getBeerById(beerId);
  cart.push(beer);

  renderItem(beer);
  renderTotal();
};

window.cart = cart;

export const saveData = () => {
  const userCart = JSON.stringify(cart);
  localStorage.setItem("userCart", userCart);
};

renderTotal();
