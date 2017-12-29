function GridManager (grid) {
    
    this.exec_commands = function(commands) {
        commands.forEach(function (command) {
            var light = grid.getLightAtPos(command.light_pos_x, command.light_pos_y);
            light.status = command.action;
        });
    };
}