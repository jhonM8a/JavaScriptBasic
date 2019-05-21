class Persona {
	constructor(nombre, apellido,altura){
	this.nombre = nombre
	this.apellido = apellido
	this.altura = altura
	}
	saludar(fn){
		console.log(`Hola me llamo ${this.nombre}`)
		if(fn){
			fn(this.nombre, this.apellido, false)
		}
	}
	soyAlto(){
		console.log(`${this.altura >=1.8 ? "Soy alto":"No soy alto"}`)
	}
}

class Desarrollador extends Persona{
	constructor(nombre, apellido,altura){
	super(nombre, apellido, altura)

	}	

	saludar(fn){
		console.log(`Hola me llamo ${this.nombre} y soy desarrollador`)
		if(fn){
			fn(this.nombre, this.apellido, true)
		}
	}
}

function respoderSaludo(nombre, esDev){
	console.log(`Buen día ${nombre} `)
	if(esDev){
		console.log("Sos Desarrollador ..")
	}
}
 var jhon   = new Persona('Jhon', 'Ochoa',1.8)
 var mario  = new Persona('Mario', 'Lemus',1.64)
 var vanessa = new Desarrollador('Vaneesa', 'Paredes',1.7)
 
 jhon.saludar();
 mario.saludar(respoderSaludo)
 vanessa.saludar(respoderSaludo)