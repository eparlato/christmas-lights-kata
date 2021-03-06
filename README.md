# Christmas lights kata

* http://kata-log.rocks/christmas-lights-kata

## Instructions

Probably a Fire Hazard

Because your neighbors keep defeating you in the holiday house decorating contest year after year, you’ve decided to deploy one million lights in a 1000x1000 grid. Furthermore, because you’ve been especially nice this year, Santa has mailed you instructions on how to display the ideal lighting configuration. Lights in your grid are numbered from 0 to 999 in each direction; the lights at each corner are at 0,0, 0,999, 999,999, and 999,0. The instructions include whether to turn on, turn off, or toggle various inclusive ranges given as coordinate pairs. Each coordinate pair represents opposite corners of a rectangle, inclusive; a coordinate pair like 0,0 through 2,2 therefore refers to 9 lights in a 3x3 square. The lights all start turned off. To defeat your neighbors this year, all you have to do is set up your lights by doing the instructions Santa sent you in order.

* turn on 0,0 through 999,999 would turn on (or leave on) every light.
* toggle 0,0 through 999,0 would toggle the first line of 1000 lights, turning off the ones that were on, and turning on the ones that were off.
* turn off 499,499 through 500,500 would turn off (or leave off) the middle four lights.

After following the instructions, how many lights are lit?

Part Two

You just finish implementing your winning light pattern when you realize you mistranslated Santa’s message from Ancient Nordic Elvish. The light grid you bought actually has individual brightness controls; each light can have a brightness of zero or more. The lights all start at zero.

* The phrase turn on actually means that you should increase the brightness of those lights by 1.
* The phrase turn off actually means that you should decrease the brightness of those lights by 1, to a minimum of zero.
* The phrase toggle actually means that you should increase the brightness of those lights by 2.

What is the total brightness of all lights combined after following Santa’s instructions?

For example:

* turn on 0,0 through 0,0 would increase the total brightness by 1.
* toggle 0,0 through 999,999 would increase the total brightness by 2000000.

## How to run the tests

Simply go to \test\js\jasmine and open SpecRunner.html

## How to run the application

Open main.html

## Working plan

First version will use a light_v1 object, where the turnOn command means modify its status to ON, turnOff modifies its status to OFF, etc.
Each end to end test will use these light_v1 objects, and will check their status property.

Second version will use a light_v2 object, where turnOn means to increase brightness level by 1, turnOff decrease brightness by 1, etc.
End to end tests for this version will use light_v2 objects, and will check their brightness property.

### GOAL 1: walking skeleton

* Write a 1x1 grid with a light. The grid creates itself. The light is off.
* Write a command sequence with 1 command. The command is from light at pos {0, 0} to light at pos {0, 0}. The command is 'ON'.
* Send the command sequence to the application, verify that the light status at pos [0, 0] is ON. 

### GOAL 2: app with lights version 1

* Create a new object to deal with different type of commands. 
* Manage the TOGGLE case on a 1x1 grid. 
* Send a sequence of commands on a 1x1 grid, implement ON/OFF command cases on a 1x1 grid. 
* Send an empty sequence of commands. 
* Send a command on several lights on a 3x3 grid, such as TOGGLE 0,0 -> 2,2. \ Send a sequence of commands on a 4x4 grid. 
* Launch Santa's sequence. 

### GOAL 3: app with lights version 2

* Increase the total brightness of a 1x1 grid by 1; 
* Handle the ON/OFF/TOGGLE commands on a version 2 light. \ Launch a sequence of commands on a 1x1 grid and calculate the total brightness. 
* Send a sequence of commands on a 4x4 grid and calculate the total brightness. 
* Launch Santa's sequence and calculate the total brightness of the grid.
