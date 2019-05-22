const API_URL = "https://swapi.co/api/";
const PEOPLE_URL = "people/:id";

const opts = { crossDomain: true };

const onPeopleResponse = function(person) {
  console.log(`Hola, yo soy ${person.name}`);
};

function obtenerPersonaje(id) {
  const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;

  $.get(url, { crossDomain: true }, onPeopleResponse);
}
/** No se sabe en que orden lleguen las respuestas
 * por el asinconismo
 */
obtenerPersonaje(1);
obtenerPersonaje(2);
obtenerPersonaje(3);
