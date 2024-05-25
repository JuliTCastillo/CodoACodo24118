function calcFortaleza() {
    let contrasenia=document.getElementById("password").value

    let cantCar=contrasenia.length

    let fort=""
    if (cantCar>=0 && cantCar<=4){
        fort=" Seguridad: Baja"
    } else if (cantCar>=5 && cantCar <=8){
        fort="Seguridad: Media"
    } else {
        fort="Seguridad: Alta"
    }

    document.getElementById("fort").innerHTML=fort






}   