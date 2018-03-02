const { csvToArray } = require('./utils/csv')
const { isValidCoordinatesAndDirection } = require('./placeHelper')

/*
* Read toy robot commands and convert to Array
* @params {string} commandStr A multi-line string of toy robot commands
* @returns {object} Array of commands
* @example
* toCommandArray(`PLACE X,Y,F
    MOVE
    LEFT
    RIGHT
    REPORT`) // => ['PLACE 0,0,NORTH', 'MOVE', 'LEFT', 'RIGHT', 'REPORT']
*/
const toCommandArray = commandStr => {
  if (commandStr === null) return []
  // Split string to array by newline
  return commandStr
    .trim()
    .split('\n')
    .map(command => {
      // Trim every string element
      const trimmedCommand = command.trim()
      // Return if trimmed string is greater than length 0
      if (trimmedCommand.length > 0) return trimmedCommand.toUpperCase()
    })
    .filter(elem => elem !== undefined) // Remove undefined elements
}

/*
* Evaluate toy robot commands
* @params {object} commands Array of commands
* @example
* evaluate(['PLACE 0,0,NORTH', 'MOVE', 'LEFT', 'RIGHT', 'REPORT']) // 0,1,NORTH
*/
const evaluate = commands => {
  let result = {}
  commands.map(command => {
    if (command.indexOf('PLACE') === 0) {
      result = place(command)
    } else if (command === 'MOVE') {
      const currentCoordinates = { ...result }
      result = move(currentCoordinates)
    } else if (command === 'LEFT') {
      const currentCoordinates = { ...result }
      result = rotate(currentCoordinates, 'LEFT')
    } else if (command === 'RIGHT') {
      const currentCoordinates = { ...result }
      result = rotate(currentCoordinates, 'RIGHT')
    } else if (command === 'REPORT') {
      report(result)
    }
  })
}

/*
* Places the toy robot on the tabletop
* @params {string} positionStr Coordinates and facing direction of the robot
* @returns {object} object containing the coordinates and facing direction of the robot
* example
  place('0, 0, NORTH') // => { x:0, y:0, f: 'NORTH' }
*/
const place = positionStr => {
  if (positionStr === null) return {}
  // If command does not start with 'PLACE'
  const position = positionStr.split(' ')
  if (position[0].toUpperCase() !== 'PLACE') return {}
  // Latter half of command is the location data
  const locationData = position.slice(1).join('')
  // Convert location data to array
  const location = csvToArray(locationData)
  // Extract coordinates from location
  const coordinates = {
    x: parseInt(location[0]),
    y: parseInt(location[1]),
    f: location[2]
  }
  // Validate coordinates and direction
  if (!isValidCoordinatesAndDirection(coordinates)) return {}
  return coordinates
}

/*
* Move the toy robot to the direction it's facing
* @params {object} coordinates Object containing the coordinates and facing direction of the robot
* @params {object} steps The number of units the robot will move (default: 1)
* @returns {object} object containing the coordinates and facing direction of the robot
* examples
  move({x:0, y: 0, f:'NORTH'}) // => { x: 0, y: 1, f:'NORTH' }
  move({x:0, y: 0, f:'NORTH'}, 1) // => { x: 0, y: 1, f:'NORTH' }
*/
const move = (coordinates, steps = 1) => {
  // Clone coordinates
  const newCoordinates = { ...coordinates }
  // Move the robot
  switch (newCoordinates.f) {
    case 'NORTH':
      newCoordinates.y += steps
      break
    case 'SOUTH':
      newCoordinates.y -= steps
      break
    case 'EAST':
      newCoordinates.x += steps
      break
    case 'WEST':
      newCoordinates.x -= steps
      break
  }
  // Return new coordinates if they are valid. Otherwise, return original
  return isValidCoordinatesAndDirection(newCoordinates)
    ? newCoordinates
    : coordinates
}

/*
* Rotate the toy robot to the specified rotate direction
* @params {object} coordinates Object containing the coordinates and facing direction of the robot
* @params {object} rotateDirection The direction to where the robot will be rotated
* @returns {object} object containing the coordinates and new facing direction of the robot
* examples
  rotate({x:0, y: 0, f:'NORTH'}, 'LEFT') // => {x:0, y: 0, f:'WEST'}
  rotate({x:0, y: 0, f:'NORTH'}, 'RIGHT') // => {x:0, y: 0, f:'EAST'}
*/
const rotate = (coordinates, rotateDirection) => {
  // Clone coordinates
  const newCoordinates = { ...coordinates }
  // Move the robot
  switch (newCoordinates.f) {
    case 'NORTH':
      if (rotateDirection === 'LEFT') newCoordinates.f = 'WEST'
      else if (rotateDirection === 'RIGHT') newCoordinates.f = 'EAST'
      break
    case 'SOUTH':
      if (rotateDirection === 'LEFT') newCoordinates.f = 'EAST'
      else if (rotateDirection === 'RIGHT') newCoordinates.f = 'WEST'
      break
    case 'EAST':
      if (rotateDirection === 'LEFT') newCoordinates.f = 'NORTH'
      else if (rotateDirection === 'RIGHT') newCoordinates.f = 'SOUTH'
      break
    case 'WEST':
      if (rotateDirection === 'LEFT') newCoordinates.f = 'SOUTH'
      else if (rotateDirection === 'RIGHT') newCoordinates.f = 'NORTH'
      break
  }

  return newCoordinates
}

/*
* Produce standard output for toy robot's current position
* @params {object} coordinates Object containing the coordinates and facing direction of the robot
* examples
  report({x:0, y: 0, f:'NORTH'}) // => Log Output: 0,0,NORTH
*/
const report = coordinates => {
  console.log(`${coordinates.x},${coordinates.y},${coordinates.f}`)
}

module.exports = {
  toCommandArray,
  evaluate,
  place,
  move,
  rotate,
  report
}
