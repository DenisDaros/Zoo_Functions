const data = require('../data/zoo_data');

const { species } = data;
function getAnimalsOlderThan(animal, age) {
  const blocoAnimal = species.filter((elemento) => animal.includes(elemento.name));
  return blocoAnimal.every((aux) => aux.residents.every((index) => index.age >= age));
}

module.exports = getAnimalsOlderThan;
