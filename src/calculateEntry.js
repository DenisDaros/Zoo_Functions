const data = require('../data/zoo_data');

console.log(data.prices);
const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

function countEntrants(elemento) {
  return elemento.reduce((acc, aux) => {
    if (aux.age < 18) {
      acc.child += 1;
    }
    if (aux.age >= 18 && aux.age < 50) {
      acc.adult += 1;
    }
    if (aux.age >= 50) {
      acc.senior += 1;
    }
    return acc;
  }, { child: 0, adult: 0, senior: 0 });
}
function calculateEntry(elemento) {
  if (!elemento || Object.entries(elemento).length === 0) {
    return 0;
  }
  const { child, adult, senior } = countEntrants(elemento);
  return child * 20.99 + adult * 49.99 + senior * 24.99;
}
console.log(calculateEntry(entrants));
module.exports = { calculateEntry, countEntrants };
