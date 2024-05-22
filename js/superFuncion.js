export function superFuncion(data) {
    let item;
    let items = "";

    if (!data) {
        console.log("error no hay datos a leer");
        return;
    }

    let i = 0;
    setInterval(() => {
        const mensajes = ["CAFETERIA", "HOT", "&", "ICE"];
        document.title = mensajes[i];
        i++;
        if (i == 4) {
            i = 0;
        }
    }, 2_000);

    for (const item of data) {
        //   console.log("la descripcion"+item.description.slice(0,5))
        let pattern = `
    <div class="card">
        <img src="${item.image}" alt="${item.title}" height="300">
        <div class="card-info">
            <h2>${item.title}</h2>
            <h6>${item.description.slice(0, 25)}</h6>
            <p ><span class="black-bold">Precio:</span><span><a class="consultar" href="https://api.whatsapp.com/send?phone=549 99999 9999&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20${item.title}" target="_blank">
            Consultar
          </a></span></p>
            <p ><span class="black-bold">Código: </span>${item.id}</p>
        </div>
    </div>
          `;
        items += pattern;
    }
    return items;
}