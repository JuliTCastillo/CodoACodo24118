function confirmacionPassword() {
    let contrasenia = document.getElementById("confirmPassword").value
    let password = document.getElementById("password").value
    let fort=""
    
    if(contrasenia === password){
        formValid = true
    }
    else{
        fort = "Las contraseñas no coinciden!"
        formValid = false
    }
    document.getElementById("msg").innerHTML=fort
}  

// Mostrar Contraseña Inicio sesion
document
  .getElementById('toggleConfirmPassword')
  .addEventListener('click', function () {
    var passwordField = document.getElementById('confirmPassword');
    var passwordFieldType = passwordField.getAttribute('type');
    
    if (passwordFieldType === 'password') {
      passwordField.setAttribute('type', 'text');
      this.textContent = 'Ocultar';
    } else {
      passwordField.setAttribute('type', 'password');
      this.textContent = 'Mostrar';
    }
});


const form = document.querySelector("#formRegistro");
let formValid = false

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Obtener todos los elementos del formulario
    const formData = new FormData(form);

    if(formValid){
        // Convertir los datos del formulario en un objeto JavaScript
        const formValues = {};
        for (const [key, value] of formData.entries()) {
            console.log(key);
            if(key != "confirmPassword")formValues[key] = value;
        }

        // Hacer algo con el objeto de valores, como enviar una solicitud HTTP o realizar validaciones
        console.log("Valores del formulario:", formValues);
    }
});
 