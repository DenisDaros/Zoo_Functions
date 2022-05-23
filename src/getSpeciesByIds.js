const data = require('../data/zoo_data');

const { species } = data;
function getSpeciesByIds(...ids) {
  return species.filter((elemento) => ids.includes(elemento.id));
}

module.exports = getSpeciesByIds;
