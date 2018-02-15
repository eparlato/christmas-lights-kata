function Manager(grid, commandParser, commandProcessor) {

    this.process = function (commandSequence) {
        var commands = commandParser.parse(commandSequence);

        commandProcessor.process(commands, grid);
    };

    this.getLightStatus = function() {
        return grid.getLightStatus();
    };

}