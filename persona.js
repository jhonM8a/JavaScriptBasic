//definicio prototipo

function Persona(nombre, apellido,altura){
	this.nombre = nombre
	this.apellido = apellido
	this.altura = altura
}

Persona.prototype.saludar = function() {console.log(`Hola me llamo ${this.nombre}`)}
Persona.prototype.soyAlto = function() {console.log(`${this.altura >=1.8 ? "Soy alto":"No soy alto"}`)} 
var jhon = new Persona('Jhon', 'Ochoa',1.7); //Crea un nuevo objeto dado un prototipo

jhon.saludar()
jhon.soyAlto()