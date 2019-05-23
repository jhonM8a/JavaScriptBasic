const API_URL = "https://swapi.co/api/";
const PEOPLE_URL = "people/:id";

const opts = { crossDomain: true };

function obtenerPersonaje(id) {
  return new Promise((resolve, reject) => {
    const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;
    $.get(url, opts, function(data) {
      resolve(data);
    }).fail(() => reject(id));
  });
}

function onError(id) {
  console.log("Sucedio un error al obtener el personake " + id);
}
var ids = [1, 2, 4, 5, 6, 7]; //Cada elemento del array es una promesa
/*var prmesas = ids.map(function(id) {
  return obtenerPersonaje(id);
});*/

var promesasWithArrowFunction = ids.map(id => obtenerPersonaje(id));
Promise.all(promesasWithArrowFunction)
  .then(personasjes => console.log(personasjes))
  .catch(onError);
/*
obtenerPersonaje(1)
  .then(personaje => {
    console.log(`El personaje 1 es ${personaje.name}`);
    return obtenerPersonaje(2);
  })
  .then(personaje => {
    console.log(`El personaje 2 es ${personaje.name}`);
    return obtenerPersonaje(3);
  })
  .then(personaje => {
    console.log(`El personaje 3 es ${personaje.name}`);
    return obtenerPersonaje(4);
  })
  .then(personaje => {
    console.log(`El personaje 4 es ${personaje.name}`);
    return obtenerPersonaje(5);
  })
  .then(personaje => {
    console.log(`El personaje 5 es ${personaje.name}`);
    return obtenerPersonaje(6);
  })
  .then(personaje => {
    console.log(`El personaje 6 es ${personaje.name}`);
    return obtenerPersonaje(7);
  })
  .then(personaje => {
    console.log(`El personaje 7 es ${personaje.name}`);
  })
  .catch(onError);
*/
