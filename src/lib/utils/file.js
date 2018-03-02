const fs = require('fs')
const util = require('util')

// Promisify fs.readFile()
const readFilePromise = util.promisify(fs.readFile)

/*
* Read Input File
* @params {string} filePath File path to the input file
* @returns {string} Contents of the input file
*/
const readFileInput = async filePath => {
  try {
    const data = await readFilePromise(filePath)
    return data.toString()
  } catch (error) {
    throw error
  }
}

module.exports = {
  readFileInput
}
