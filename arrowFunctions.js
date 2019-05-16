var jhon = {
  nombre: "Jhon",
  apellido: "Ochoa",
  edad: 14,
  ingeniero: true,
  cocinero: false,
  cantante: false,
  artista: false,
  drone: true
};

const MAYORIA_EDAD = 18;

function imprimirSiEsMayorDeEdad(persona) {
  console.log(
    `${persona.nombre} es ${esMayorEdad(persona)? "Mayor de edad arrow" : "Menor de edad"} `
  );
}
const esMayorEdad = ({ edad }) => edad >=MAYORIA_EDAD;

const esMenorEdad = (persona) => { return persona.edad <18}

function permitirAcceso(persona){
	if(!esMayorEdad(persona)){
		console.log("Denied");
	}
}

function permitirAccesoMenorEdad(persona){
	console.log(esMenorEdad(persona))
	if(esMenorEdad(persona)){
		console.log("Access to kid")
	}
}
/* Es lo mismo que el arrowFunction
const esMayorEdad = function(persona){
	return persona.edad >=MAYORIA_EDAD;
}*/
imprimirSiEsMayorDeEdad(jhon);

