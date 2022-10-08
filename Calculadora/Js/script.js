const displayValorAnterior = document.getElementById("valor_anterior");
const displayValorActual = document.getElementById("valor_actual");
const NumeroBotones = document.querySelectorAll('.numero');
const OperadoresBotones = document.querySelectorAll(".operador");


const display = new Display(displayValorAnterior, displayValorActual);

NumeroBotones.forEach(boton => {
  boton.addEventListener('click', () => {display.agregarNumero(boton.innerHTML);
  });
});

OperadoresBotones.forEach(boton => {
  boton.addEventListener('click', () => display.computar(boton.value))
});