const { readFileInput } = require('./lib/utils/file')
const { evaluate } = require('./lib/robot')

const file1 = process.cwd() + '/input/1.txt'

const startApp = async () => {
  try {
    const data = await readFileInput(file1)
    evaluate(data)
  }
  catch(error) {
    console.log(error)
  }
}

startApp()