function confirmarDatos() {
  const email1 = document.getElementById("email1").value.trim();
  const email2 = document.getElementById("email2").value.trim();

  const fecha = window.fechaSeleccionada; // viene del calendario
  const hora = window.horaSeleccionada; // viene del selector de horas

  // Validación básica
  if (!email1 || !email2) {
    alert("Por favor, rellena los correos.");
    return;
  }

  if (!fecha) {
    alert("Por favor, selecciona una fecha en el calendario.");
    return;
  }

  if (!hora) {
    alert("Por favor, selecciona una hora.");
    return;
  }

  // Texto de confirmación
  const texto = `
        Los correos <strong>${email1}</strong> y <strong>${email2}</strong><br>
        recibirán un email el día <strong>${fecha}</strong> a las <strong>${hora}</strong>.
    `;

  document.getElementById("textoConfirmacion").innerHTML = texto;

  // Ocultar formulario y mostrar confirmación
  document.getElementById("formulario").style.display = "none";
  document.getElementById("confirmacion").style.display = "block";
}

function volverAtras() {
  document.getElementById("confirmacion").style.display = "none";
  document.getElementById("formulario").style.display = "flex";
}

function enviarCorreo() {
  alert("Aquí pondremos el envío del correo.\nLo configuramos luego.");
}
