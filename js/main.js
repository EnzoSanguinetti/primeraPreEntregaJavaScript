let listaPrendas = JSON.parse(localStorage.getItem('prendas')) || [];

// Función para agregar una prenda a la lista
function agregarPrenda() {
  const inputPrenda = document.getElementById('prenda');
  const inputPrecio = document.getElementById('precio');

  const prenda = inputPrenda.value;
  const precio = parseFloat(inputPrecio.value);

  // Verifica que se hayan ingresado datos válidos
  if (!prenda || isNaN(precio) || precio <= 0) {
    return;
  }

  // Agrega la prenda a la lista
  listaPrendas.push({ prenda, precio });

  // Guarda la lista actualizada en el localStorage
  localStorage.setItem('prendas', JSON.stringify(listaPrendas));

  // Actualiza la lista de prendas en el DOM
  mostrarPrendas();
  // Actualiza el subtotal, el IVA y el total en el DOM
  calcularTotales();
  // Limpia los campos de ingreso de datos
  inputPrenda.value = '';
  inputPrecio.value = '';
}

// Función para mostrar la lista de prendas en el DOM
function mostrarPrendas() {
  const listaElemento = document.getElementById('lista-prendas');
  // Limpia la lista anterior
  listaElemento.innerHTML = '';
  let i = 0;
  while (i < listaPrendas.length) {
    const prenda = listaPrendas[i];
    const li = document.createElement('li');
    li.textContent = `${prenda.prenda} - $${prenda.precio.toFixed(2)}`;
    listaElemento.appendChild(li);
    i++;
  }
}

// Función para calcular y mostrar los totales en el DOM
function calcularTotales() {
  const subtotalElemento = document.getElementById('subtotal');
  const ivaElemento = document.getElementById('iva');
  const totalElemento = document.getElementById('total');

  let subtotal = 0;
  let i = 0;
  // Recorre la lista de prendas y suma los precios
  while (i < listaPrendas.length) {
    subtotal += listaPrendas[i].precio;
    i++;
  }
  const iva = subtotal * 0.16;
  const total = subtotal + iva;

  // Muestra los totales en el DOM
  subtotalElemento.textContent = `Subtotal: $${subtotal.toFixed(2)}`;
  ivaElemento.textContent = `IVA: $${iva.toFixed(2)}`;
  totalElemento.textContent = `Total a pagar: $${total.toFixed(2)}`;
}

// Agrega un evento click al botón "Agregar"
const botonAgregar = document.getElementById('agregar');
botonAgregar.addEventListener('click', agregarPrenda);

// Si la lista de prendas no está vacía, muestra las prendas y los totales en el DOM
if (listaPrendas.length > 0) {
mostrarPrendas();
calcularTotales();
}

// Función para agregar una prenda a la lista
function agregarPrenda() {
const inputPrenda = document.getElementById('prenda');
const inputPrecio = document.getElementById('precio');

const prenda = inputPrenda.value;
const precio = parseFloat(inputPrecio.value);

// Verifica que se hayan ingresado datos válidos
if (!prenda || isNaN(precio) || precio <= 0) {
return;
}

// Agrega la prenda a la lista
listaPrendas.push({ prenda, precio });

// Guarda la lista actualizada en el localStorage
localStorage.setItem('prendas', JSON.stringify(listaPrendas));

// Actualiza la lista de prendas en el DOM
mostrarPrendas();
// Actualiza el subtotal, el IVA y el total en el DOM
calcularTotales();
// Limpia los campos de ingreso de datos
inputPrenda.value = '';
inputPrecio.value = '';
}

// Función para mostrar la lista de prendas en el DOM
function mostrarPrendas() {
const listaElemento = document.getElementById('lista-prendas');
// Limpia la lista anterior
listaElemento.innerHTML = '';
// Recorre la lista de prendas y crea un elemento <li> para cada una
for (const prenda of listaPrendas) {
const li = document.createElement('li');
li.textContent = `${prenda.prenda} - $${prenda.precio.toFixed(2)}`;
listaElemento.appendChild(li);
}
}

// Función para calcular y mostrar los totales en el DOM
function calcularTotales() {
const subtotalElemento = document.getElementById('subtotal');
const ivaElemento = document.getElementById('iva');
const totalElemento = document.getElementById('total');

let subtotal = 0;
// Recorre la lista de prendas y suma los precios
for (const prenda of listaPrendas) {
subtotal += prenda.precio;
}
const iva = subtotal * 0.16;
const total = subtotal + iva;

// Muestra los totales en el DOM
subtotalElemento.textContent = `Subtotal: $${subtotal.toFixed(2)}`;
ivaElemento.textContent = `IVA: $${iva.toFixed(2)}`;
totalElemento.textContent = `Total a pagar: $${total.toFixed(2)}`;
}