var jhon = {
  nombre: "Jhon",
  apellido: "Ochoa",
  edad: 24,
  ingeniero: true,
  cocinero: false,
  cantante: false,
  artista: false,
  drone: true
};

function imprimerProfesiones(persona) {
  console.log(`${persona.nombre} es :`);
  if (persona.ingeniero) {
    console.log("Ingeniero");
  }
}

function imprimirSiEsMayorDeEdad(persona) {
  console.log(
    `${persona.nombre} es ${
      persona.edad >= 18 ? "Mayor de edad" : "Menor de edad"
    } `
  );
}
imprimerProfesiones(jhon);
imprimirSiEsMayorDeEdad(jhon);
