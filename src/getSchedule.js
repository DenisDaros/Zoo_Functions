const data = require('../data/zoo_data');

const { species, hours } = data;

function procurandoOsDias(animal) {
  return species.find((index) => index.name === animal).availability;
}
// console.log(procurandoOsDias('lions'));

function objetoCria(dia) {
  if (dia === 'Monday') {
    return { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
  }
  const { open, close } = hours[dia];
  const objetoCriado = {};
  objetoCriado[dia] = {
    officeHour: `Open from ${open}am until ${close}pm`,
    exhibition: species.filter((index) => index.availability
      .includes(dia))
      .map((i) => i.name),
  };

  return objetoCriado;
}
console.log(species.name);
function getSchedule(scheduleTarget) {
  if (species.find((index) => index.name.includes(scheduleTarget))) {
    return procurandoOsDias(scheduleTarget);
  }
  if (Object.keys(hours).includes(scheduleTarget)) {
    return objetoCria(scheduleTarget);
  }
  return Object.keys(hours).reduce((acc, curr) => ({ ...acc, ...objetoCria(curr) }), {});
}

module.exports = getSchedule;
