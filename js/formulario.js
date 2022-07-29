const inputNombre = document.querySelector("#inputNombre");
// const inputDireccion = document.querySelector("#inputDireccion");
const inputCiudad = document.querySelector("#inputCiudad");
const inputTelefono = document.querySelector("#inputTelefono");

const compraRealizada = (mensaje, bgColor) => {
  Swal.fire({
    title: "COMPRA REALIZADA",
    text: "GRACIAS POR CONFIAR EN NOSOTROS",
    icon: "success",
    confirmButtonText: "OK",
    background: bgColor || "#193028",
    color: "white",
    didDestroy: () => window.location.assign("../index.html"),
  });
};

document.addEventListener("submit", (e) => {
  e.preventDefault();
  saveData();
  compraRealizada();
  localStorage.clear();
});

function saveData() {
  const userData = {
    nombre: inputNombre.value,
    ciudad: inputCiudad.value,
    telefono: inputTelefono.value,
  };
  const str = JSON.stringify(userData);
  localStorage.setItem("userData", str);
}

function getData() {
  if (localStorage.getItem("userData")) {
    const userData = JSON.parse(localStorage.getItem("userData"));
    inputNombre.value = userData.nombre;
    inputCiudad.value = userData.ciudad;
    inputTelefono.value = userData.telefono;
  }

  if (localStorage.getItem("userCart")) {
    const userCart = JSON.parse(localStorage.getItem("userCart"));
    const itemsComprados = document.getElementById("itemsComprados");
    const userItems = userCart.map((beer) => beer.tipo).join(", ");
    itemsComprados.innerText = `ESTÁS COMPRANDO ${userItems}`;
  }
}

getData();
