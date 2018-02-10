function Manager(grid, commandParser, lightActionProcessor) {

    this.process = function (commandSequence) {
        var lightActions = commandParser.parse(commandSequence);

        lightActionProcessor.process(lightActions, grid);


    };

    // TODO: the manager should not get lights, it should return just lights status.
    // the manager output is the same as me looking at the grid: I just see the status of the lights, I don't get the light to check its status.
    // A simple wrapper on the grid will be enough
    this.getLights = function(from_row, from_column, to_row, to_column) {
        var lights = [];

        if (from_row === to_row && from_column === to_column) {
            lights.push(grid.getLightAtPos(from_row, to_row));
        }

        return lights;
    };


}