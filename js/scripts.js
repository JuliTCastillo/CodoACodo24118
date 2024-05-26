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
