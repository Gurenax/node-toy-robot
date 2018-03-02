const robot = require('../../../src/lib/robot')

describe('output the REPORT', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log')
  })

  afterEach(() => {
    console.log.mockRestore()
  })

  it('recognizes that report is a function', () => {
    const given = robot.report
    const expected = 'function'
    const result = typeof given
    expect(result).toEqual(expected)
  })

  it('does not return anything', () => {
    const given = { x: 0, y: 0, f: 'NORTH' }
    const expected = undefined
    const result = robot.report(given)
    expect(result).toBeUndefined()
  })

  it('console logs the report', () => {
    const given = { x: 0, y: 0, f: 'NORTH' }
    const expected = '0,0,NORTH'
    const result = robot.report(given)
    expect(console.log.mock.calls[0][0]).toEqual(expected)
  })

  it('console logs the report', () => {
    const given = { x: 3, y: 4, f: 'SOUTH' }
    const expected = '3,4,SOUTH'
    const result = robot.report(given)
    expect(console.log.mock.calls[0][0]).toEqual(expected)
  })
})
