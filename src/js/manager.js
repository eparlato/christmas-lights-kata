function Manager(grid, commandParser, lightActionProcessor) {

    this.process = function (commandSequence) {
        var lightActions = commandParser.parse(commandSequence);

        lightActionProcessor.process(lightActions, grid);
    };

    this.getLights = function(from_row, from_column, to_row, to_column) {
        // TODO: complete
        var lights = [];

        if (from_row === to_row && from_column === to_column) {
            lights.push(grid.getLightAtPos(from_row, to_row));
        }

        return lights;
    };
}