export const beers = [
  {
    id: 1,
    poster: "/imagenes/scottish.png",
    tipo: "SCOTTISH",
    nombre: "Estrella Roja",
    texto:
      "Pronunciado carácter malteado, amargor leve y una terminación ligeramente dulce, contenido alcohólico medio, buen cuerpo y excelente sabor",
    precio: 1500,
  },

  {
    id: 2,
    poster: "/imagenes/honey.png",
    tipo: "HONEY",
    nombre: "Sweet Agnes",
    texto:
      "Lo característico de la miel es su aporte en la bebida respecto al sabor dulce y al aroma atípico de ella. Hecha con miel pura de la mejor calidad.",
    precio: 3500,
  },

  {
    id: 3,
    poster: "/imagenes/golden.png",
    tipo: "GOLDEN",
    nombre: "Áurea",
    texto:
      "Tiene un agradable color dorado, amargor liviano, carbonatación media-alta, un suave sabor a cereal hace el soporte dulce para la combinación de lúpulos alemanes y americanos que entregan frescas notas cítricas y florales, cuerpo medio y agradable espuma",
    precio: 1800,
  },

  {
    id: 4,
    poster: "/imagenes/porter.png",
    tipo: "PORTER",
    nombre: "Darth",
    texto:
      "Cerveza de fermentación alta, muy oscura y con un sabor muy intenso. Su color, casi negro, se consigue utilizando malta muy tostada",
    precio: 2800,
  },

  {
    id: 5,
    poster: "/imagenes/ipa.png",
    tipo: "IPA",
    nombre: "Clásica",
    texto:
      "De alta graduación alcohólica, una mayor cantidad de lúpulo y por lo tanto un amargor y aroma intensos y cierta complejidad en el paladar.",
    precio: 1600,
  },

  {
    id: 6,
    poster: "/imagenes/american-pale-ale.jpg",
    tipo: "AMERICAN PALE ALE",
    nombre: "AMERICANA",
    texto:
      " Generalmente ligera y fresca, aunque el cuerpo puede llegar a ser medio. Sensación de boca suave, con atenuación media a alta.",
    precio: 2300,
  },

  {
    id: 7,
    poster: "/imagenes/stout.jpg",
    tipo: "STOUT",
    nombre: "SITH STOUT",
    texto:
      "  Cerveza de fermentación alta, muy oscura y con un sabor muy intenso. Su color, casi negro, se consigue utilizando malta muy tostada",
    precio: 3500,
  },
];

export const getBeerById = (beerId) => beers.find((beer) => beer.id == beerId);
