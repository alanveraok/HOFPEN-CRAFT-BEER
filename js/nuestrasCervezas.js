const tituloVentas = document.getElementById("tituloVentas");
tituloVentas.innerText = "NUESTRAS CERVEZAS";

const getCardHTML = (contenido) => {
  const { poster, tipo, nombre, texto } = contenido;
  return `
  <div class="card" style="width: 18rem;">
      <img src="${poster}" class="card-img-top" alt="...">
      <div class="card-body">
          <h2 class="cervezas-titles">${tipo}</h2>
          <h3 id="beerButton" class="cerveza-tipo">${nombre}</h3>
          <p class="card-text">
           ${texto}
          </p>
      </div>
  </div>
`;
};

const getContentHTML = (items) => items.map(getCardHTML).join("");

const renderContent = (items) =>
  (contenidoDOM.innerHTML = getContentHTML(items));

const loadContent = (URL) => {
  fetch(URL)
    .then((response) => response.json())
    .then(renderContent);
};

loadContent(URL);

