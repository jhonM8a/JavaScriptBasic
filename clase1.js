var nombre = "Jhon",
  apellido = "Ochoa";
var nombreMayuscula = nombre.toUpperCase();
var apellidoMiniscula = apellido.toLowerCase();
var primerLetraDelNombre = nombre.charAt(0);
var cantidadLetrasNombre = nombre.length;

var nombreComplero = nombre + " " + apellido;

//InterPolación de texto, tambien puede ir codigo
var nombreInterPolado = `${nombre.toUpperCase()} ${apellido.toUpperCase()}`;

var str = nombre.substr(1, 2);

var UltimaLetraNombre = nombre.substr(-1, 1);
