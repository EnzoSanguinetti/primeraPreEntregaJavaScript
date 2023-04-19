alert("Calculemos cuánto vale cada prenda si le agregamos el IVA, pero antes le pedimos que se registre.");

let usuario = prompt("Cree su nombre de usuario:");
let contrasena = prompt("Cree su contraseña:");
let intentos = 3;
let tipoPrenda, precio, precioConIVA;
let carrito = []; // array para almacenar las prendas

const IVA = 0.22; // valor del IVA en Uruguay

function verificarCredenciales() {
  let usuarioIngresado = prompt("Ingrese su nombre de usuario:");
  let contrasenaIngresada = prompt("Ingrese su contraseña:");
  return usuario === usuarioIngresado && contrasena === contrasenaIngresada;
}

if (verificarCredenciales()) {

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

      // Guardar contenido del carrito en almacenamiento
      localStorage.setItem("carrito", JSON.stringify(carrito));
      localStorage.setItem("total", total);

      alert(`Contenido del carrito: ${JSON.stringify(carrito)}. Total con IVA: ${total}`);

      let div = document.createElement("div");
      let h1 = document.createElement("h1");
      let h3 = document.createElement("h3");
      let ul = document.createElement("ul");

      h1.innerText = "Contenido del carrito";
      h3.innerText = `Total con IVA: ${total}`;

      carrito.forEach(prenda => {
        let li = document.createElement("li");
        li.innerText = `${prenda.tipo}: ${prenda.precioConIVA}`;
        ul.appendChild(li);
      });

      div.appendChild(h1);
      div.appendChild(h3);
      div.appendChild(ul);

      document.body.appendChild(div);

      alert("¡Gracias por usar nuestra app!");
    } else if (respuesta.toLowerCase() !== "si") {
      alert("Por favor, ingrese una respuesta válida (si/no)");
    }
  } 

} else {
  console.log("Usuario o Contraseña inválidos");
  alert("Usuario o contraseña inválidos, por favor recarga el sitio web.");
}