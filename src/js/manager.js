function Manager(grid, commandParser, commandProcessor) {

    this.process = function (commandSequence) {
        var commands = commandParser.parse(commandSequence);

        commandProcessor.process(commands, grid);
    };

    this.getLightStatus = function() {
        return grid.getLightStatus();
    };

    this.getTotalLitLights = function() {
        var total_lit_lights = 0;
        var lightStatus = this.getLightStatus();
        
        var r, c;
        for (r = 0; r < lightStatus[0].length; r++) {
            for (c = 0; c < lightStatus[r].length; c++ ) {
                if (lightStatus[r][c] === 'ON') {
                    ++total_lit_lights;
                }
            }
        }
        
        return total_lit_lights;
    };

    this.getTotalBrightness = function() {
        return 0;
    };
}