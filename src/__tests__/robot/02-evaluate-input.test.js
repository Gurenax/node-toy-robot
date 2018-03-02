const robot = require('../../../src/lib/robot')

describe('Toy Robot Evaluate Input', () => {
  
  beforeEach(() => {
    jest.spyOn(console, 'log')
  })

  afterEach(() => {
    console.log.mockRestore()
  })

  it('recognizes that evaluate is a function', () => {
    const given = robot.evaluateCommands
    const expected = 'function'
    const result = typeof given
    expect(result).toEqual(expected)
  })

  it('does not return anything', () => {
    const given = ['PLACE 0,0,NORTH', 'MOVE', 'LEFT', 'RIGHT', 'REPORT']
    const expected = undefined
    const result = robot.evaluateCommands(given)
    expect(result).toBeUndefined()
  })

  it('evaluate commands ', () => {
    const given = ['PLACE 0,0,NORTH', 'MOVE', 'LEFT', 'RIGHT', 'REPORT']
    const expected = '0,1,NORTH'
    const result = robot.evaluateCommands(given)
    expect(console.log.mock.calls[0][0]).toEqual(expected)
  })

  it('evaluate commands', () => {
    const given = ['PLACE 0,0,NORTH', 'MOVE', 'REPORT']
    const expected = '0,1,NORTH'
    const result = robot.evaluateCommands(given)
    expect(console.log.mock.calls[0][0]).toEqual(expected)
  })

  it('evaluate commands', () => {
    const given = ['PLACE 0,0,NORTH', 'LEFT', 'REPORT']
    const expected = '0,0,WEST'
    const result = robot.evaluateCommands(given)
    expect(console.log.mock.calls[0][0]).toEqual(expected)
  })

  it('evaluate commands', () => {
    const given = ['PLACE 1,2,EAST', 'MOVE', 'MOVE', 'LEFT', 'MOVE', 'REPORT']
    const expected = '3,3,NORTH'
    const result = robot.evaluateCommands(given)
    expect(console.log.mock.calls[0][0]).toEqual(expected)
  })
})
