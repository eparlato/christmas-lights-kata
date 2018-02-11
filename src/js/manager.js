function Manager(grid, commandParser, lightActionProcessor) {

    this.process = function (commandSequence) {
        var lightActions = commandParser.parse(commandSequence);

        lightActionProcessor.process(lightActions, grid);
    };

    this.getLightStatus = function(from_row, from_column, to_row, to_column) {
        return grid.getLightStatus(from_row, from_column, to_row, to_column);
    };

}