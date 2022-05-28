const data = require('../data/zoo_data');

const { species } = data;

function listaAnimal() {
  return species.reduce((acc, aux) => {
    acc[aux.name] = aux.residents.length;
    return acc;
  }, {});
}

function retornarAnimaisFemale(specie, sex) {
  return species.reduce((acc, aux) => {
    if (specie === aux.name) {
      return aux.residents.filter((index) => index.sex === sex).length;
    }
    return acc;
  }, 0);
}
function countAnimals(animal) {
  if (!animal) {
    return listaAnimal();
  }
  const { specie, sex } = animal;
  if (specie && sex) {
    return retornarAnimaisFemale(specie, sex);
  }
  return listaAnimal()[specie];
}
console.log(countAnimals({ specie: 'lions', sex: 'male' }));
module.exports = countAnimals;
