alert("calculemos cuanto vale cada prenda si le agregamos el IVA, pero antes le pedimos que se registre.");

let usuario = prompt("Cree su nombre de usuario:");
let contrasena = prompt("Cree su contraseña:");
let intentos = 3;
let tipoPrenda, precio, precioConIVA;

const IVA = 0.22; // valor del IVA en Uruguay

function verificarCredenciales() {
  let usuarioIngresado = prompt("Ingrese su nombre de usuario:");
  let contrasenaIngresada = prompt("Ingrese su contraseña:");
  return usuario === usuarioIngresado && contrasena === contrasenaIngresada;
}

if (verificarCredenciales()) {
  let carrito = []; // array para almacenar las prendas 
  let continuar = true;

  while (continuar) {
    tipoPrenda = prompt("Ingrese el tipo de prenda (remera, pantalon o buzo):");
    precio = parseFloat(prompt("Ingrese el precio de la prenda:"));

    switch (tipoPrenda.toLowerCase()) {
      case "remera":
        precioConIVA = precio * (1 + IVA);
        carrito.push({ tipo: "remera", precioConIVA: precioConIVA });
        alert(`El precio de la remera con IVA es: ${precioConIVA}`);
        break;
      case "pantalon":
        precioConIVA = precio * (1 + IVA);
        carrito.push({ tipo: "pantalon", precioConIVA: precioConIVA });
        alert(`El precio del pantalon con IVA es: ${precioConIVA}`);
        break;
      case "buzo":
        precioConIVA = precio * (1 + IVA);
        carrito.push({ tipo: "buzo", precioConIVA: precioConIVA });
        alert(`El precio del buzo con IVA es: ${precioConIVA}`);
        break;
      default:
        alert(`Tipo de prenda no reconocida.`);
    }

    let respuesta = prompt("¿Desea elegir otra prenda? (si/no)");
    if (respuesta.toLowerCase() === "no") {
      continuar = false;
      let total = 0;
      carrito.forEach(prenda => {
        total += prenda.precioConIVA;
      });
      alert(`Contenido del carrito: ${JSON.stringify(carrito)}. Total con IVA: ${total}`);
      alert("gracias por usar nuestra app!");
    } else if (respuesta.toLowerCase() !== "si") {
      alert("Por favor, ingrese una respuesta válida (si/no)");
    }
  } 

} else {
  console.log("Usuario o Contraseña inválidos");
  alert("Usuario o contraseña inválidos, por favor recarga el sitio web.");
}
  
  
