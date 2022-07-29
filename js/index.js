const titulo = document.getElementById("titulo");
const slogan = document.getElementById("slogan");
const banner = document.getElementById("banner");

titulo.innerText = "HOPFEN - CRAFT BEER";
slogan.innerText = "insumos de la mejor calidad para tu cerveza";
banner.innerText = "Tu cerveza para cada momento";

const mayorEdad = (mensaje, bgColor) => {
  Swal.fire({
    title: "SOY MAYOR DE 18 AÑOS",
    text: "BEBER CON MODERACIÓN",
    icon: "warning",
    confirmButtonText: "OK",
    background: bgColor || "#193028",
    color: "white",
  });
};

mayorEdad();
