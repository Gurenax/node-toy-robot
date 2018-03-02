/*
* Check if coordinate-x and coordinate-y is valid
* @params {object} coordinates Object containing the coordinates and facing direction of the robot
* @params {number} lowerLimit Lower limit of tabletop (default: 0)
* @params {number} upperLimit Upper limit of tabletop (default: 4)
* @returns {boolean} true if valid, false if invalid
* examples
  isValidCoordinates({x:0, y: 0, f:'NORTH'}) // => true
  isValidCoordinates({x:5, y: 0, f:'NORTH'}) // => false
*/
const isValidCoordinates = (coordinates, lowerLimit = 0, upperLimit = 4) => {
  if (
    coordinates === undefined ||
    coordinates.x === undefined ||
    coordinates.y === undefined
  )
    return false
  if (coordinates.x > upperLimit || coordinates.y > upperLimit) return false
  if (coordinates.x < lowerLimit || coordinates.y < lowerLimit) return false
  return true
}

/*
* Check if direction is valid
* @params {string} direction Direction of toy robot
* @returns {boolean} true if valid, false if invalid
* examples
  isValidDirection('NORTH'} // => true
  isValidDirection('NORTHH'} // => false
*/
const isValidDirection = direction => {
  return (
    direction === 'NORTH' ||
    direction === 'SOUTH' ||
    direction === 'EAST' ||
    direction === 'WEST'
  )
}

/*
* Check if coordinates and direction are valid
* @params {string} coordinates Object containing coordinates and direction of robot
* @returns {boolean} true if valid, false if invalid
* examples
  isValidCoordinatesAndDirection({x:0, y: 0, f:'NORTH'}) // => true
  isValidCoordinatesAndDirection({x:5, y: -1, f:'NORTHH'}) // => false
*/
const isValidCoordinatesAndDirection = coordinates => {
  return isValidCoordinates(coordinates) && isValidDirection(coordinates.f)
}

module.exports = {
  isValidCoordinates,
  isValidDirection,
  isValidCoordinatesAndDirection
}
