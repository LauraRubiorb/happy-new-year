function confirmarDatos() {
  const email1 = document.getElementById("email1").value.trim();
  const email2 = document.getElementById("email2").value.trim();
  const fecha = document.getElementById("fecha").value.trim();

  // Validación básica
  if (email1 === "" || email2 === "" || fecha === "") {
    alert("Por favor, rellena todos los campos antes de continuar.");
    return;
  }

  // Texto de confirmación
  const texto = `
        Los correos <strong>${email1}</strong> y <strong>${email2}</strong><br>
        recibirán un email con la fecha seleccionada: <strong>${fecha}</strong>.
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
