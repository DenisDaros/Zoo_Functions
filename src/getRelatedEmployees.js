const data = require('../data/zoo_data');

const { employees } = data
function isManager(id) {
  return employees.some(index => index.managers.includes(id))
}
console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'))
function getRelatedEmployees(managerId) {
//  if (isManager(managerId) === true) {

 }


module.exports = { isManager, getRelatedEmployees };
