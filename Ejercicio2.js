let baseDatos1 = ["Canada", "EUA", "Mexico", "Ecuador", "Brazil", "Argentina", "Uruguay"];
let baseDatos2 = ["Japon", "Iran", "Corea del sur", "Alemania", "Croacia", "España", "Inglaterra"];

function verificarVocalEnPais(pais) {
    return new Promise((resolve, reject) => {
        let ultimaLetra = pais.charAt(pais.length - 1).toLowerCase();

        if (/[aeiou]/.test(ultimaLetra)) {
            resolve(ultimaLetra);
        } else {
            reject("El último caracter del país no es una vocal.");
        }
    });
}

function obtenerPaisAleatorio(baseDatos) {
    let indiceAleatorio = Math.floor(Math.random() * baseDatos.length);
    return baseDatos[indiceAleatorio];
}

let baseDatosAleatoria = Math.random() < 0.5 ? baseDatos1 : baseDatos2;
let paisAleatorio = obtenerPaisAleatorio(baseDatosAleatoria);

verificarVocalEnPais(paisAleatorio)
    .then(vocal => {
        console.log(`El último caracter del país "${paisAleatorio}" es la vocal: ${vocal}`);
    })
    .catch(error => {
        console.error(error);
    });