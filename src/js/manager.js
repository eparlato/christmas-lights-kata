function Manager(grid, commandParser, commandProcessor) {

    this.process = function (commandSequence) {
        var commands = commandParser.parse(commandSequence);

        commandProcessor.process(commands, grid);
    };

    this.getLightStatus = function(from_row, from_column, to_row, to_column) {
        return grid.getLightStatus(from_row, from_column, to_row, to_column);
    };

}