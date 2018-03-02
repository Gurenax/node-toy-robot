const robot = require('../../../src/lib/robot')

describe('Toy Robot Evaluate Input', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log')
  })

  afterEach(() => {
    console.log.mockRestore()
  })

  it('recognizes that evaluate is a function', () => {
    const given = robot.evaluate
    const expected = 'function'
    const result = typeof given
    expect(result).toEqual(expected)
  })

  it('does not return anything', () => {
    const given =
      'PLACE 0,0,NORTH\n' + 'MOVE\n' + 'LEFT\n' + 'RIGHT\n' + 'REPORT'
    const expected = undefined
    const result = robot.evaluate(given)
    expect(result).toBeUndefined()
  })

  it('evaluates commands ', () => {
    const given =
      'PLACE 0,0,NORTH\n' + 'MOVE\n' + 'LEFT\n' + 'RIGHT\n' + 'REPORT'
    const expected = '0,1,NORTH'
    const result = robot.evaluate(given)
    expect(console.log.mock.calls[0][0]).toEqual(expected)
  })

  it('evaluates commands correctly', () => {
    const given = 'PLACE 0,0,NORTH\n' + 'MOVE\n' + 'REPORT'
    const expected = '0,1,NORTH'
    const result = robot.evaluate(given)
    expect(console.log.mock.calls[0][0]).toEqual(expected)
  })

  it('evaluates commands correctly', () => {
    const given = 'PLACE 0,0,NORTH\n' + 'LEFT\n' + 'REPORT'
    const expected = '0,0,WEST'
    const result = robot.evaluate(given)
    expect(console.log.mock.calls[0][0]).toEqual(expected)
  })

  it('evaluates commands correctly', () => {
    const given =
      'PLACE 1,2,EAST\n' + 'MOVE\n' + 'MOVE\n' + 'LEFT\n' + 'MOVE\n' + 'REPORT'
    const expected = '3,3,NORTH'
    const result = robot.evaluate(given)
    expect(console.log.mock.calls[0][0]).toEqual(expected)
  })

  it('does not fall off the board', () => {
    const given =
      'PLACE 0,0,NORTH\n' + 'MOVE\n' + 'MOVE\n' + 'MOVE\n' + 'MOVE\n' + 'MOVE\n' + 'MOVE\n' + 'MOVE\n' + 'REPORT'
    const expected = '0,4,NORTH'
    const result = robot.evaluate(given)
    expect(console.log.mock.calls[0][0]).toEqual(expected)
  })

  it('does not fall off the board', () => {
    const given =
      'PLACE 2,2,NORTH\n' + 'MOVE\n' + 'RIGHT\n' + 'MOVE\n' + 'LEFT\n' + 'MOVE\n' + 'RIGHT\n' + 'MOVE\n' + 'MOVE\n' + 'REPORT'
    const expected = '4,4,EAST'
    const result = robot.evaluate(given)
    expect(console.log.mock.calls[0][0]).toEqual(expected)
  })

  it('does not fall off the board but continues to valid moves', () => {
    const given =
    'PLACE 0,0,NORTH\n' + 'MOVE\n' + 'MOVE\n' + 'MOVE\n' + 'MOVE\n' + 'MOVE\n' + 'MOVE\n' + 'MOVE\n' + 'RIGHT\n' + 'MOVE\n' + 'MOVE\n' + 'MOVE\n' + 'MOVE\n' + 'REPORT'
    const expected = '4,4,EAST'
    const result = robot.evaluate(given)
    expect(console.log.mock.calls[0][0]).toEqual(expected)
  })
})
