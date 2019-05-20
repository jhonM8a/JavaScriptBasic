class Persona {
	constructor(nombre, apellido,altura){
	this.nombre = nombre
	this.apellido = apellido
	this.altura = altura
	}
	saludar(){
		console.log(`Hola me llamo ${this.nombre}`)
	}
	soyAlto(){
		console.log(`${this.altura >=1.8 ? "Soy alto":"No soy alto"}`)
	}
}

class Desarrollador extends Persona{
	constructor(nombre, apellido,altura){
	super(nombre, apellido, altura)

	}	

	saludar(){
		console.log(`Hola me llamo ${this.nombre} y soy desarrollador`)
	}
}

