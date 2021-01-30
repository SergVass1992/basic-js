const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(array) {
  if (!(array instanceof Array)) {
    return false
  }
  array = array.sort();
  let dreamTeamName = '';
  for (let name of array) {
    if (typeof name === 'string') {
      name = name.trim();
      dreamTeamName += name[0].toUpperCase();
    }
  }
  return dreamTeamName.split('').sort().join('');
};
