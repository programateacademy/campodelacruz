document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(form);

    // Aquí utilizamos EmailJS para enviar el correo
    emailjs.send("service_lam1dth", "template_rj50ih6", formData).then(
      function (response) {
        console.log("Correo enviado:", response);
        alert("Correo enviado correctamente");
        form.reset();
      },
      function (error) {
        console.error("Error al enviar el correo:", error);
        alert("Error al enviar el correo");
      }
    );
  });
});
