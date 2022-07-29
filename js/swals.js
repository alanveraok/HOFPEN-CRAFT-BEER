const removeItem = (mensaje, bgColor) => {
    Swal.fire({
      title: "SE ELIMINÓ KIT DEL CARRITO",    
      icon: "success",
      confirmButtonText: "OK",
      background: bgColor || "#193028",
      color: "white",
    });
  };
  