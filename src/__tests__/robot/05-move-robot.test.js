const robot = require('../../../src/lib/robot')

describe('MOVE robot', () => {
  it('recognizes that move is a function', () => {
    const given = robot.move
    const expected = 'function'
    const result = typeof given
    expect(result).toEqual(expected)
  })

  it('moves the robot NORTH by 1 unit', () => {
    const given = { x: 0, y: 0, f: 'NORTH' }
    const expected = { x: 0, y: 1, f: 'NORTH' }
    const result = robot.move(given)
    expect(result).toEqual(expected)
  })

  it('moves the robot SOUTH by 1 unit', () => {
    const given = { x: 0, y: 1, f: 'SOUTH' }
    const expected = { x: 0, y: 0, f: 'SOUTH' }
    const result = robot.move(given)
    expect(result).toEqual(expected)
  })

  it('moves the robot EAST by 1 unit', () => {
    const given = { x: 0, y: 1, f: 'EAST' }
    const expected = { x: 1, y: 1, f: 'EAST' }
    const result = robot.move(given)
    expect(result).toEqual(expected)
  })

  it('moves the robot WEST by 1 unit', () => {
    const given = { x: 1, y: 1, f: 'WEST' }
    const expected = { x: 0, y: 1, f: 'WEST' }
    const result = robot.move(given)
    expect(result).toEqual(expected)
  })

  it('does not move the robot on invalid inputs (y=0 but going SOUTH)', () => {
    const given = { x: 0, y: 0, f: 'SOUTH' }
    const expected = given // it does not move
    const result = robot.move(given)
    expect(result).toEqual(expected)
  })

  it('does not move the robot on invalid inputs (y=4 but going NORTH)', () => {
    const given = { x: 0, y: 4, f: 'NORTH' }
    const expected = given // it does not move
    const result = robot.move(given)
    expect(result).toEqual(expected)
  })

  it('does not move the robot on invalid inputs (x=4 but going EAST)', () => {
    const given = { x: 4, y: 4, f: 'EAST' }
    const expected = given // it does not move
    const result = robot.move(given)
    expect(result).toEqual(expected)
  })

  it('does not move the robot on invalid inputs (x=0 but going WEST)', () => {
    const given = { x: 0, y: 4, f: 'WEST' }
    const expected = given // it does not move
    const result = robot.move(given)
    expect(result).toEqual(expected)
  })
})
