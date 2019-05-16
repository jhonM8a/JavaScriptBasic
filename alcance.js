var Jhon = {
  //Un objeto es clave:valor
  nombre: "Jhon Mario",
  apellido: "Ochoa",
  edad: 24
};

var Dario = {
  nombre: "Dario",
  apellido: "Lemus",
  edad: 25
};

function imprimirNombreMayuscula({ nombre }) {
  //function imprimirNombreMayuscula(persona)
  console.log(nombre.toUpperCase());
}

imprimirNombreMayuscula(Jhon);
imprimirNombreMayuscula(Dario);
imprimirNombreMayuscula({ nombre: "Pepe" });
