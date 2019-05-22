const API_URL = "https://swapi.co/api/";
const PEOPLE_URL = "people/:id";

const opts = { crossDomain: true };

function obtenerPersonaje(id, callback) {
  const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;

  $.get(url, opts, function(person) {
    console.log(`Hola, yo soy ${person.name}`);

    if (callback) {
      callback();
    }
  });
}
/** No se sabe en que orden lleguen las respuestas
 * por el asinconismo
 */
obtenerPersonaje(1, function() {
  obtenerPersonaje(2, function() {
    obtenerPersonaje(3);
  });
});
