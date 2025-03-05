// Función para validar texto (nombre y lenguaje)
function validarTexto(texto) {
  const regexTexto = /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/;
  return regexTexto.test(texto);
}

// Función para validar que la edad sea un número entre 1 y 99
function validarEdad(edad) {
  const regexNumero = /^[0-9]+$/;
  return regexNumero.test(edad) && parseInt(edad) >= 1 && parseInt(edad) <= 99;
}

// Función para pregunta extra después de mostrar el mensaje
function preguntarGustoPorLenguaje(lenguaje) {
  setTimeout(() => {
    const respuesta = prompt(
      `¿Te gusta estudiar ${lenguaje}? Responde con el número 1 para SÍ o 2 para NO.`
    );

    if (respuesta === "1") {
      alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.");
    } else if (respuesta === "2") {
      alert("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?");
    } else {
      alert("Respuesta no válida. Por favor, responde con 1 o 2.");
    }
  }, 500);
}

// Función para mostrar resultados
function mostrarMensaje() {
  const nombre = document.getElementById("nombre").value.trim();
  const edad = document.getElementById("edad").value.trim();
  const lenguaje = document.getElementById("lenguaje").value.trim();
  const resultadoDiv = document.getElementById("resultado");

  // Validaciones
  if (!validarTexto(nombre)) {
    alert("Por favor, ingresa un nombre válido (solo letras y espacios).");
    return;
  }

  if (!validarEdad(edad)) {
    alert("Por favor, ingresa una edad válida (entre 1 y 99 años).");
    return;
  }

  if (!validarTexto(lenguaje)) {
    alert("Por favor, ingresa un lenguaje de programación válido.");
    return;
  }

  // Si todas las validaciones pasan, mostrar el mensaje
  resultadoDiv.innerHTML = `Hola <strong>${nombre}</strong>, tienes <strong>${edad}</strong> años y ya estás aprendiendo <strong>${lenguaje}</strong>!`;
  resultadoDiv.classList.remove("oculto");

  // Llamamos a la función para hacer la pregunta extra
  preguntarGustoPorLenguaje(lenguaje);
}
