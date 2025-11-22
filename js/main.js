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

  // OCULTAR título principal
  document.getElementById("tituloPrincipal").style.display = "none";

  // MOSTRAR confirmación
  document.getElementById("confirmacion").style.display = "block";

  // MOSTRAR botón de enviar
  document.getElementById("btnEnviar").classList.remove("d-none");

  document.getElementById("textoConfirmacion").innerHTML = `
    Los correos <strong>${email1}</strong> y <strong>${email2}</strong><br>  recibirán un email para reservar el día 
    <strong>${fechaSeleccionada}</strong> a las <strong>${horaSeleccionada}</strong>.
  `;
}

function volverAtras() {
  document.getElementById("contact-form").style.display = "block";
  document.getElementById("confirmacion").style.display = "none";
  document.getElementById("btnEnviar").classList.add("d-none");
}

// --- ENVÍO DEL CORREO CON EMAILJS ---
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Sustituye estos valores por los de tu EmailJS
    const serviceID = "service_fe4vx7k";
    const templateID = "template_xvnfcgo";

    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        alert("Correo enviado correctamente 🎉");
      },
      (err) => {
        console.error("Error:", err);
        alert("Hubo un error al enviar el correo.");
      }
    );
  });
