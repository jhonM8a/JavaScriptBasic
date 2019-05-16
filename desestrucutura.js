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

function imprimirNombreMayuscula(persona) {
  var { nombre } = persona; //esto es lo mismo var nombre = persona.nombre
  console.log(nombre.toUpperCase());
}

function imprimirNombreYEdad(persona) {
  console.log(`Hoola me llamo ${persona.nombre} y tengo ${persona.edad} años`);
}
imprimirNombreMayuscula(Jhon);
imprimirNombreMayuscula(Dario);
imprimirNombreYEdad(Jhon);
imprimirNombreYEdad(Dario);
//imprimirNombreMayuscula({ nombre: "Pepe" });
