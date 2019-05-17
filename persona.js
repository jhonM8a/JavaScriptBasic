//definicio prototipo

function Persona(nombre, apellido){
	this.nombre = nombre
	this.apellido = apellido
}

Persona.prototype.saludar = function() {console.log(`Hola me llamo ${this.nombre}`)}
 
var jhon = new Persona('Jhon', 'Ochoa'); //Crea un nuevo objeto dado un prototipo

jhon.saludar()