# Toy Robot Simulator
### by Glenn Dimaliwat

The toy robot simulator is an app which simulates the movement, rotation and placement of a robot in a 5 by 5 square tabletop. The robot cannot go beyond the edges of the table and any movement or placement pertaining to that behaviour will be ignored by the app.

![](/docs/images/toy-robot-01.png)

## Understanding the perspective of the tabletop

* `North` would be the top side of the table.
* `South` is the bottom side of the table.
* `West` is the left side of the table.
* `East` is the right side of the table.
* `Origin 0,0` is found at the South West (Lower Left) most part of the table as shown below.

![](/docs/images/toy-robot-02.png)


## How the App works
* The app will take an input file which is specified in `app.js` and will be consumed by the `readFileInput` async function.

* String data will be returned from the `readFileInput` function and it will be consumed by the `evaluate` function. The evaluate function reads a command for the robot for every line found in the data.

* The `evaluate` function can also be called directly with a hard-coded string separated by a newline carriage return to separate every command.

* The `place` function will be called when the `PLACE` command is called for the robot. Without a place command, any commands before it will be ignored by the robot.

* Calling the `place` command more than once will simply re-assign the position of the robot to the more recent coordinate and facing direction.

* The `place` command also validates if the placement is invalid. The robot cannot fall off the tabletop and the command will be ignored.

* The robot will be able to `MOVE` using the `move` function which takes the robot's current coordinate and moves one unit towards the direction it is facing. This movement of the robot will also be validated and if the robot will fall off the tabletop, the move command will be ignored.

* The robot can change its direction by rotating 90 degrees to its `LEFT` or `RIGHT` with respect to its current facing direction. This can be achieved using the `rotate` function which takes the robot's current coordinates, facing direction and its rotating direction (i.e. LEFT or RIGHT).

* The robot can `REPORT` its current status using the `report` function which takes the robot's current coordinates and facing direction. Like every other command, this command can be executed more than once.

* If the robot was never placed, the `REPORT` command will not show anything as every command is ignored.


## Test Driven Development
The test library that I used for this application is `Jest`. It is the test library that I am most comfortable with and it has given me more than enough flexibility to test this application.

My tests are organised into folders so it would be easier to determine and understand the flow of the tests.

Below is a screenshot of my tests.

![](/docs/images/toy-robot-03.png)

[Back to Readme](/README.md)
