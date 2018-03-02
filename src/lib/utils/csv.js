/*
* Converts comma separated values to Array of strings
* @params {string} comma separated values
* @returns {object} array of string values
* examples
  csvToArray('1,2,3,4,5') // => ['1','2','3','4','5']
*/
const csvToArray = csv =>
  csv
    .trim()
    .split(',')
    .map(values => values.trim())

module.exports = {
  csvToArray
}