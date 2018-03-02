const robot = require('../../../src/lib/robot')

describe('Toy Robot Input', () => {
  
  it('recognizes that toCommandArray is a function', () => {
    const given = robot.toCommandArray
    const expected = 'function'
    const result = typeof given
    expect(result).toEqual(expected)
  })

  it('is able to read commands', () => {
    const given =
    `PLACE X,Y,F
    MOVE
    LEFT
    RIGHT
    REPORT`
    const expected = ['PLACE X,Y,F', 'MOVE', 'LEFT', 'RIGHT', 'REPORT']
    const result = robot.toCommandArray(given)
    expect(result).toEqual(expected)
  })

  it('produces an array of commands as result', () => {
    const given =
    `PLACE X,Y,F
    MOVE
    LEFT
    RIGHT
    REPORT`
    const expected = 'object'
    const result = typeof robot.toCommandArray(given)
    expect(result).toEqual(expected)
  })

  it('ignores white spaces', () => {
    const given =
    `
    
    PLACE X,Y,F

    MOVE  

      LEFT

    RIGHT 

      REPORT

    `
    const expected = ['PLACE X,Y,F', 'MOVE', 'LEFT', 'RIGHT', 'REPORT']
    const result = robot.toCommandArray(given)
    expect(result).toEqual(expected)
  })

  it('handles a null command', () =>{
    const given = null
    const expected = []
    const result = robot.toCommandArray(given)
    expect(result).toEqual(expected)
  })
})
