const data = require('../data/zoo_data');

const { employees } = data;
function isManager(id) {
  return employees.some((index) => index.managers.includes(id));
}

function getRelatedEmployees(managerId) {
//  if (isManager(managerId) === true) {
  
}

module.exports = { isManager, getRelatedEmployees };
