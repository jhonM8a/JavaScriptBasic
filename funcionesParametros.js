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

const MAYORIA_EDAD = 18;
function imprimirSiEsMayorDeEdad(persona) {
  console.log(
    `${persona.nombre} es ${esMayorEdad(persona)? "Mayor de edad" : "Menor de edad"} `
  );
}
function esMayorEdad(persona){
	return persona.edad >=MAYORIA_EDAD;
}
imprimirSiEsMayorDeEdad(jhon);