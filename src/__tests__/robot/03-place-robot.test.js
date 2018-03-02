const robot = require('../../../src/lib/robot')

describe('PLACE Robot', () => {

  it('recognizes that place is a function', () => {
    const given = robot.place
    const expected = 'function'
    const result = typeof given
    expect(result).toEqual(expected)
  })

  it('places the robot correctly', () => {
    const given = 'PLACE 0,0,NORTH'
    const expected = {
      x: 0,
      y: 0,
      f: 'NORTH'
    }
    const result = robot.place(given)
    expect(result).toEqual(expected)
  })

  it('places the robot correctly even with white splaces', () => {
    const given = 'PLACE   0,   0,   NORTH'
    const expected = {
      x: 0,
      y: 0,
      f: 'NORTH'
    }
    const result = robot.place(given)
    expect(result).toEqual(expected)
  })

  it('handles invalid coordinates', () => {
    const given = 'PLACE 5,0,NORTH'
    const expected = {}
    const result = robot.place(given)
    expect(result).toEqual(expected)
  })

  

  it('handles null values', () => {
    const given = null
    const expected = {}
    const result = robot.place(given)
    expect(result).toEqual(expected)
  })
})