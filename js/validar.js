function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const fort = document.getElementById('fort').textContent;

    let valid = true;

    if (!validateEmail(email)) {
        emailError.style.display = 'block';
        valid = false;
    } else {
        emailError.style.display = 'none';
    }

    if (password.length < 4) {
        passwordError.textContent = 'La contraseña es demasiado corta.';
        passwordError.style.display = 'block';
        valid = false;
    } else if (!/[A-Z]/.test(password)) {
        passwordError.textContent = 'La contraseña debe contener al menos una letra mayúscula.';
        passwordError.style.display = 'block';
        valid = false;


    } else if (fort === 'Débil' || fort === '') {
        passwordError.textContent = 'La contraseña es muy débil.';
        passwordError.style.display = 'block';
        valid = false;
    } else {
        passwordError.style.display = 'none';
    }

    if (valid) {
        alert('Formulario enviado correctamente');
        this.submit();
    }
});