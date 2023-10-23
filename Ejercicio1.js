let baseDatos1 = ["Canada", "EUA", "Mexico", "Ecuador", "Brazil", "Argentina", "Uruguay"];
let baseDatos2 = ["Japon", "Iran", "Corea del sur", "Alemania", "Croacia", "España", "Inglaterra"];

function encontrado() {
    console.log("Pais encontrado");
}

function busquedaBaseDatos2(pais) {
    if (baseDatos2.includes(pais)) {
        encontrado();
    } else {
        console.log("Pais no encontrado");
    }
}

function busquedaBaseDatos1(pais, callback) {
    if (baseDatos1.includes(pais)) {
        callback();
    } else {
        busquedaBaseDatos2(pais);
    }
}
busquedaBaseDatos1("a", encontrado);
busquedaBaseDatos2("Venezuela", encontrado);
