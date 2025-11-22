let fechaSeleccionada = null;
let horaSeleccionada = null;

function setFechaHora(fecha, hora) {
  fechaSeleccionada = fecha;
  horaSeleccionada = hora;

  document.getElementById("fecha").value = fecha;
  document.getElementById("hora").value = hora;
}

function confirmarDatos() {
  const email1 = document.getElementById("email1").value.trim();
  const email2 = document.getElementById("email2").value.trim();

  if (!email1 || !email2) {
    alert("Por favor, introduce los dos correos.");
    return;
  }

  if (!fechaSeleccionada || !horaSeleccionada) {
    alert("Selecciona una fecha y hora.");
    return;
  }

  // OCULTAR formulario
  document.getElementById("contact-form").style.display = "none";

  // MOSTRAR confirmación
  document.getElementById("confirmacion").style.display = "block";

  // MOSTRAR botón de enviar
  document.getElementById("btnEnviar").classList.remove("d-none");

  document.getElementById("textoConfirmacion").innerHTML = `
    Los correos <strong>${email1}</strong> y <strong>${email2}</strong> recibirán un email el día 
    <strong>${fechaSeleccionada}</strong> a las <strong>${horaSeleccionada}</strong>.
  `;
}

function volverAtras() {
  document.getElementById("contact-form").style.display = "block";
  document.getElementById("confirmacion").style.display = "none";
  document.getElementById("btnEnviar").classList.add("d-none");
}
