const { readFileInput } = require('./lib/utils/file')
const { evaluate } = require('./lib/robot')

const startApp = async () => {
  try {
    // Input files
    const file1 = process.cwd() + '/input/1.txt'
    const file2 = process.cwd() + '/input/2.txt'
    const file3 = process.cwd() + '/input/3.txt'
    const file4 = process.cwd() + '/input/4.txt'

    // Read file input
    const data1 = await readFileInput(file1)
    const data2 = await readFileInput(file2)
    const data3 = await readFileInput(file3)
    const data4 = await readFileInput(file4)

    // Evaluate data from each file
    evaluate(data1)
    evaluate(data2)
    evaluate(data3)
    evaluate(data4)
  } catch (error) {
    console.log(error)
  }
}

// Run the App
startApp()
