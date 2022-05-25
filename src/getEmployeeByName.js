const data = require('../data/zoo_data');

const { employees } = data;
function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const buscandoPorNome = employees
    .find((item) => item.firstName === employeeName || item.lastName === employeeName);
  return buscandoPorNome;
}

module.exports = getEmployeeByName;
