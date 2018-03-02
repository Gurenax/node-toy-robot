const { csvToArray } = require('../../lib/utils/csv')

describe('CSV', () => {
  it('recognizes that csvToArray is a function', () => {
    const given = csvToArray
    const expected = 'function'
    const result = typeof given
    expect(result).toEqual(expected)
  })

  it('converts the string to array correctly', async () => {
    const given = '1,2,3,4,5'
    const expected = ['1','2','3','4','5']
    const result = await csvToArray(given)
    expect(result).toEqual(expected)
  })

  it('converts strings with white spaces', async () => {
    const given = ' 1 ,   2 , 3   , 4 , 5   '
    const expected = ['1','2','3','4','5']
    const result = await csvToArray(given)
    expect(result).toEqual(expected)
  })
  
})