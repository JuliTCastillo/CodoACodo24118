// Usuario por defecto
let user = "test@correo.com";
let passw = "Prueba!123";

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

const formLogin = document.getElementById("registerForm");

formLogin.addEventListener("submit", (e) => {
    e.preventDefault(); // Detener el comportamiento predeterminado de envío del formulario

    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    const password = document.getElementById('password').value;

    let valid = true;

    if (!validateEmail(email)) {
        emailError.style.display = 'block';
        valid = false;
        console.log("ERROR");
    }
    else if(password === ""){
        alert("Ingrese la contraseña!")
    }
    else {
        emailError.style.display = 'none';
        if (email === user && passw === password) {
            // Simulación de respuesta del servidor:
            alert("Se ingreso correctamente!");
            console.log("Se ingreso correctamente!");
            window.location.href = "../index.html";
        }
        else if (email === user && passw !== password){
            alert("Los datos ingresados son incorrectos")
        }
        else{
            alert("Usuario no registrado, le vamos a redirigir a registro")
            window.location.href = "../paginas/registro.html"
        }
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