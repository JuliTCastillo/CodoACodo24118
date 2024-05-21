function toggleMenu() {
  var menu = document.getElementById('menu');
  var toggle = document.getElementById('toggle');

  if (menu.style.display === 'block') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'block';
  }
}

// Mostrar Contraseña Inicio sesion
document
  .getElementById('togglePassword')
  .addEventListener('click', function () {
    var passwordField = document.getElementById('password');
    var passwordFieldType = passwordField.getAttribute('type');
    if (passwordFieldType === 'password') {
      passwordField.setAttribute('type', 'text');
      this.textContent = 'Ocultar';
    } else {
      passwordField.setAttribute('type', 'password');
      this.textContent = 'Mostrar';
    }
  });

//Modal para recuperar contraseña, envia un mensaje al correo
document
  .getElementById('forgotPasswordForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    var email = document.getElementById('forgotEmail').value;
    var messageElement = document.getElementById('forgotPasswordMessage');

    // Simulación de respuesta del servidor:
    setTimeout(function () {
      messageElement.textContent =
        'Si existe una cuenta asociada a este email, recibirás un enlace para restablecer tu contraseña.';
      messageElement.classList.add('text-success');
    }, 1000);
  });
