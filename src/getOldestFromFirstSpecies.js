const data = require('../data/zoo_data');

const { employees, species } = data;
function getOldestFromFirstSpecies(id) {
  const procurandoPorId = employees.find((index) => index.id === id);
  const procurandoPorAnimal = procurandoPorId.responsibleFor[0];
  const separandoBlocoDoAnimal = species.find((i) => i.id === procurandoPorAnimal);
  const separandoResidentes = separandoBlocoDoAnimal.residents;
  const animalMaisVelho = separandoResidentes.reduce((acc, curr) => {
    if (acc.age > curr.age) {
      return acc;
    }
    return curr;
  });
  return Object.values(animalMaisVelho);
}

module.exports = getOldestFromFirstSpecies;
