alert("calculemos cuanto vale cada prenda si le agregamos el IVA, pero antes le pedimos que se registre.");

let usuario = prompt("Cree su nombre de usuario:");
let contrasena = prompt("Cree su contraseña:");
let intentos = 3;
let tipoPrenda, precio;

const IVA = 0.22; // valor del IVA en Uruguay

function verificarCredenciales() {
  let usuarioIngresado = prompt("Ingrese su nombre de usuario:");
  let contrasenaIngresada = prompt("Ingrese su contraseña:");
  return usuario === usuarioIngresado && contrasena === contrasenaIngresada;
}

if (verificarCredenciales()) {
  tipoPrenda = prompt("Ingrese el tipo de prenda (remera, pantalon o buzo):");
  precio = parseFloat(prompt("Ingrese el precio de la prenda:"));

  switch (tipoPrenda.toLowerCase()) {
    case "remera":
      precioConIVA = precio * (1 + IVA);
      alert(`El precio de la remera con IVA es: ${precioConIVA}`);
      break;
    case "pantalon":
      precioConIVA = precio * (1 + IVA);
      alert(`El precio del pantalon con IVA es: ${precioConIVA}`);
      break;
    case "buzo":
      precioConIVA = precio * (1 + IVA);
      alert(`El precio del buzo con IVA es: ${precioConIVA}`);
      break;
    default:
      alert(`Tipo de prenda no reconocida.`);
  }

  let eleccion = true;

while (eleccion) {
  let respuesta = prompt("¿Desea elegir otra prenda? (si/no)");

  if (respuesta.toLowerCase() === "si") {
    tipoPrenda = prompt("Ingrese el tipo de prenda (remera, pantalon o buzo):");
    precio = parseFloat(prompt("Ingrese el precio de la prenda:"));

    switch (tipoPrenda.toLowerCase()) {
      case "remera":
        precioConIVA = precio * (1 + IVA);
        alert(`El precio de la remera con IVA es: ${precioConIVA}`);
        break;
      case "pantalon":
        precioConIVA = precio * (1 + IVA);
        alert(`El precio del pantalon con IVA es: ${precioConIVA}`);
        break;
      case "buzo":
        precioConIVA = precio * (1 + IVA);
        alert(`El precio del buzo con IVA es: ${precioConIVA}`);
        break;
      default:
        alert(`Tipo de prenda no reconocida.`);
      }

  } else if (respuesta.toLowerCase() === "no") {
    eleccion = false;
    alert("Gracias por usar nuestra app!")
  } else {
    alert("Por favor, ingrese una respuesta válida (s/n)");
  }

}
  
} else {
  console.log("Usuario o Contraseña inválidos");
  alert("Usuario o contraseña inválidos, por favor recarga el sitio web.");
}

// No pude generar un ciclo en el que me permita volver a iniciar sesion y declaré que se recarge la página en el alert.

