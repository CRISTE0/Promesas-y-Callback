function devolverCaracter(resultado) {
  console.log(resultado);
}

function revisarCadena(cadena) {
  let encontrado = false;
  let caracter = cadena.charAt(cadena.length - 1);
  return new Promise((resolve, reject) => {
    if (
      caracter === "a" ||
      caracter === "A" ||
      caracter === "e" ||
      caracter === "E" ||
      caracter === "i" ||
      caracter === "I" ||
      caracter === "o" ||
      caracter === "O" ||
      caracter === "u" ||
      caracter === "U"
    ) {
      encontrado = true;
    }

    if (encontrado) {
      resolve(caracter);
    } else {
      reject("el caracter no es una vocal");
    }
  });
}
revisarCadena("lola")
  .then((resultado) => {
    devolverCaracter(resultado);
  })
  .catch((error) => {
    console.log(error);
  });
