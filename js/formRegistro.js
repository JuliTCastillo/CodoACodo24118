    const JSON_LOCAL ="../user.json";

    fetch(JSON_LOCAL)
        .then(res => res.json())
        .then(users => {
            const form = document.querySelector("#formRegistro");

            form.addEventListener("submit", (event) => {
                event.preventDefault();
                // Agarramos datos del formulario
                const formData = new FormData(form);

                // Convertir los datos del formulario a un objeto JSON
                const jsonData = {};
                formData.forEach((value, key) => {
                    jsonData[key] = value;
                });

                // Agregar los datos del formulario al JSON
                users.push(jsonData);

                console.log(users);
                // Mostrar los usuarios actualizados (solo para propósitos de demostración)
            });
        })
        .catch(error => console.error('Error al cargar el JSON:', error))