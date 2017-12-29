function Processor(gridManager, instructionParser) {

    this.processInstructions = function(instructions) {
       var commands = instructionParser.parse(instructions);

       gridManager.exec_commands(commands);
    };
}