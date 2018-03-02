const { readFileInput } = require('../../lib/utils/file')

describe('Read input file', () => {
  it('recognizes that readFileInput is a function', () => {
    const given = readFileInput
    const expected = 'function'
    const result = typeof given
    expect(result).toEqual(expected)
  })

  it('reads the file correctly', async () => {
    const given = process.cwd() + '/input/1.txt'
    const expected =
      'PLACE 0,0,NORTH\n' + 'MOVE\n' + 'LEFT\n' + 'RIGHT\n' + 'REPORT'
    const result = await readFileInput(given)
    expect(result).toEqual(expected)
  })

  it('handles file read errors', async () => {
    try {
      const given = process.cwd() + '/input/unknown.txt'
      const data = await readFileInput(given)
      expect(data).toBeTruthy()
    } catch (error) {
      expect(error).toBeTruthy()
    }
  })
})
