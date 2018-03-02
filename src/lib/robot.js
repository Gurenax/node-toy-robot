const { csvToArray } = require('./csvHelper')
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
    REPORT`) // => ['PLACE X,Y,F', 'MOVE', 'LEFT', 'RIGHT', 'REPORT']
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
      if (trimmedCommand.length > 0) return trimmedCommand
    })
    .filter(elem => elem !== undefined) // Remove undefined elements
}

/*
* Evaluate toy robot commands
* @params {object} commands Array of commands
* @example
* evaluateCommands(['PLACE X,Y,F', 'MOVE', 'LEFT', 'RIGHT', 'REPORT'])
*/
const evaluateCommands = commands => {
  commands.map(command => {})
}

/*
* Places the toy robot on the tabletop
* @params {string} positionStr Coordinates and facing direction of the robot
* @returns {object} object containing the coordinates and facing direction of the robot
* example
  place({x:0, y: 0, f:'NORTH'})
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

module.exports = {
  toCommandArray,
  evaluateCommands,
  place,
  move
}
