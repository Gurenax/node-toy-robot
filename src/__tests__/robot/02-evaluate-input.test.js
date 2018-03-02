const robot = require('../../../src/lib/robot')

describe('Toy Robot Evaluate Input', () => {
  
  it('recognizes that evaluate is a function', () => {
    const given = robot.evaluateCommands
    const expected = 'function'
    const result = typeof given
    expect(result).toEqual(expected)
  })

  it('does not return anything', () => {
    const given = ['PLACE X,Y,F', 'MOVE', 'LEFT', 'RIGHT', 'REPORT']
    const result = robot.evaluateCommands(given)
    expect(result).toBeUndefined()
  })

})