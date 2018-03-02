const robot = require('../../../src/lib/robot')

describe('Rotate robot to LEFT or RIGHT', () => {
  it('recognizes that rotate is a function', () => {
    const given = robot.rotate
    const expected = 'function'
    const result = typeof given
    expect(result).toEqual(expected)
  })

  it('rotates the robot from NORTH to LEFT which is WEST', () => {
    const givenCoordinates = { x: 0, y: 0, f: 'NORTH' }
    const givenDirection = 'LEFT'
    const expected = { x: 0, y: 0, f: 'WEST' }
    const result = robot.rotate(givenCoordinates, givenDirection)
    expect(result).toEqual(expected)
  })

  it('rotates the robot from NORTH to RIGHT which is EAST', () => {
    const givenCoordinates = { x: 0, y: 0, f: 'NORTH' }
    const givenDirection = 'RIGHT'
    const expected = { x: 0, y: 0, f: 'EAST' }
    const result = robot.rotate(givenCoordinates, givenDirection)
    expect(result).toEqual(expected)
  })

  it('rotates the robot from SOUTH to LEFT which is EAST', () => {
    const givenCoordinates = { x: 0, y: 0, f: 'SOUTH' }
    const givenDirection = 'LEFT'
    const expected = { x: 0, y: 0, f: 'EAST' }
    const result = robot.rotate(givenCoordinates, givenDirection)
    expect(result).toEqual(expected)
  })

  it('rotates the robot from SOUTH to RIGHT which is WEST', () => {
    const givenCoordinates = { x: 0, y: 0, f: 'SOUTH' }
    const givenDirection = 'RIGHT'
    const expected = { x: 0, y: 0, f: 'WEST' }
    const result = robot.rotate(givenCoordinates, givenDirection)
    expect(result).toEqual(expected)
  })

  it('rotates the robot from EAST to LEFT which is NORTH', () => {
    const givenCoordinates = { x: 0, y: 0, f: 'EAST' }
    const givenDirection = 'LEFT'
    const expected = { x: 0, y: 0, f: 'NORTH' }
    const result = robot.rotate(givenCoordinates, givenDirection)
    expect(result).toEqual(expected)
  })

  it('rotates the robot from EAST to RIGHT which is SOUTH', () => {
    const givenCoordinates = { x: 0, y: 0, f: 'EAST' }
    const givenDirection = 'RIGHT'
    const expected = { x: 0, y: 0, f: 'SOUTH' }
    const result = robot.rotate(givenCoordinates, givenDirection)
    expect(result).toEqual(expected)
  })

  it('rotates the robot from WEST to LEFT which is SOUTH', () => {
    const givenCoordinates = { x: 0, y: 0, f: 'WEST' }
    const givenDirection = 'LEFT'
    const expected = { x: 0, y: 0, f: 'SOUTH' }
    const result = robot.rotate(givenCoordinates, givenDirection)
    expect(result).toEqual(expected)
  })

  it('rotates the robot from WEST to RIGHT which is NORTH', () => {
    const givenCoordinates = { x: 0, y: 0, f: 'WEST' }
    const givenDirection = 'RIGHT'
    const expected = { x: 0, y: 0, f: 'NORTH' }
    const result = robot.rotate(givenCoordinates, givenDirection)
    expect(result).toEqual(expected)
  })

  it('does not rotate the robot to an invalid direction', () => {
    const givenCoordinates = { x: 0, y: 0, f: 'NORTH' }
    const givenDirection = 'LEFTT'
    const expected = givenCoordinates // does not move
    const result = robot.rotate(givenCoordinates, givenDirection)
    expect(result).toEqual(expected)
  })

  it('does not rotate the robot to an invalid direction', () => {
    const givenCoordinates = { x: 0, y: 0, f: 'NORTH' }
    const givenDirection = null
    const expected = givenCoordinates // does not move
    const result = robot.rotate(givenCoordinates, givenDirection)
    expect(result).toEqual(expected)
  })
  
  it('does not rotate the robot with an invalid coordinate', () => {
    const givenCoordinates = { x: 0, y: 0, f: null }
    const givenDirection = 'LEFT'
    const expected = givenCoordinates // does not move
    const result = robot.rotate(givenCoordinates, givenDirection)
    expect(result).toEqual(expected)
  })
  
})
