const {
  isValidCoordinates,
  isValidDirection,
  isValidCoordinatesAndDirection
} = require('../../lib/placeHelper')

describe('Check Coordinates', () => {
  it('recognizes that isValidCoordinates is a function', () => {
    const given = isValidCoordinates
    const expected = 'function'
    const result = typeof given
    expect(result).toEqual(expected)
  })

  it('handles valid coordinates 1,1', () => {
    const given = { x: 1, y: 1 }
    const expected = true
    const result = isValidCoordinates(given)

    expect(result).toEqual(expected)
  })

  it('handles valid coordinates 3,4', () => {
    const given = { x: 3, y: 4 }
    const expected = true
    const result = isValidCoordinates(given)

    expect(result).toEqual(expected)
  })

  it('handles valid coordinates 4,0', () => {
    const given = { x: 4, y: 0 }
    const expected = true
    const result = isValidCoordinates(given)

    expect(result).toEqual(expected)
  })

  it('handles invalid x-coordinates 5,1', () => {
    const given = { x: 5, y: 1 }
    const expected = false
    const result = isValidCoordinates(given)
    expect(result).toEqual(expected)
  })

  it('handles invalid y-coordinates 1,5', () => {
    const given = { x: 1, y: 5 }
    const expected = false
    const result = isValidCoordinates(given)
    expect(result).toEqual(expected)
  })

  it('handles invalid coordinates 5,5', () => {
    const given = { x: 5, y: 5 }
    const expected = false
    const result = isValidCoordinates(given)
    expect(result).toEqual(expected)
  })
})

describe('Check Direction', () => {
  it('recognizes that isValidDirection is a function', () => {
    const given = isValidDirection
    const expected = 'function'
    const result = typeof given
    expect(result).toEqual(expected)
  })

  it('handles NORTH', () => {
    const given = 'NORTH'
    const expected = true
    const result = isValidDirection(given)
    expect(result).toEqual(expected)
  })

  it('handles SOUTH', () => {
    const given = 'SOUTH'
    const expected = true
    const result = isValidDirection(given)
    expect(result).toEqual(expected)
  })

  it('handles EAST', () => {
    const given = 'EAST'
    const expected = true
    const result = isValidDirection(given)
    expect(result).toEqual(expected)
  })

  it('handles WEST', () => {
    const given = 'WEST'
    const expected = true
    const result = isValidDirection(given)
    expect(result).toEqual(expected)
  })

  it('handles invalid direction', () => {
    const given = 'NORTHH'
    const expected = false
    const result = isValidDirection(given)
    expect(result).toEqual(expected)
  })
})

describe('Check Both Coordinates and Direction', () => {
  it('recognizes that isValidCoordinatesAndDirection is a function', () => {
    const given = isValidCoordinatesAndDirection
    const expected = 'function'
    const result = typeof given
    expect(result).toEqual(expected)
  })

  it('handles valid coordinates 1,1', () => {
    const given = { x: 1, y: 1, f: 'NORTH' }
    const expected = true
    const result = isValidCoordinatesAndDirection(given)

    expect(result).toEqual(expected)
  })

  it('handles valid coordinates 3,4', () => {
    const given = { x: 3, y: 4, f: 'NORTH' }
    const expected = true
    const result = isValidCoordinatesAndDirection(given)

    expect(result).toEqual(expected)
  })

  it('handles valid coordinates 4,0', () => {
    const given = { x: 4, y: 0, f: 'NORTH' }
    const expected = true
    const result = isValidCoordinatesAndDirection(given)

    expect(result).toEqual(expected)
  })

  it('handles invalid x-coordinates 5,1', () => {
    const given = { x: 5, y: 1, f: 'NORTH' }
    const expected = false
    const result = isValidCoordinatesAndDirection(given)
    expect(result).toEqual(expected)
  })

  it('handles invalid y-coordinates 1,5', () => {
    const given = { x: 1, y: 5, f: 'NORTH' }
    const expected = false
    const result = isValidCoordinatesAndDirection(given)
    expect(result).toEqual(expected)
  })

  it('handles invalid coordinates 5,5', () => {
    const given = { x: 5, y: 5, f: 'NORTH' }
    const expected = false
    const result = isValidCoordinatesAndDirection(given)
    expect(result).toEqual(expected)
  })

  it('handles NORTH', () => {
    const given = { x: 1, y: 1, f: 'NORTH' }
    const expected = true
    const result = isValidCoordinatesAndDirection(given)
    expect(result).toEqual(expected)
  })

  it('handles SOUTH', () => {
    const given = { x: 1, y: 1, f: 'SOUTH' }
    const expected = true
    const result = isValidCoordinatesAndDirection(given)
    expect(result).toEqual(expected)
  })

  it('handles EAST', () => {
    const given = { x: 1, y: 1, f: 'EAST' }
    const expected = true
    const result = isValidCoordinatesAndDirection(given)
    expect(result).toEqual(expected)
  })

  it('handles WEST', () => {
    const given = { x: 1, y: 1, f: 'WEST' }
    const expected = true
    const result = isValidCoordinatesAndDirection(given)
    expect(result).toEqual(expected)
  })

  it('handles invalid direction', () => {
    const given = { x: 1, y: 1, f: 'NORTHH' }
    const expected = false
    const result = isValidCoordinatesAndDirection(given)
    expect(result).toEqual(expected)
  })
})
