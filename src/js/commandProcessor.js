function CommandProcessor() {
    this.execute = function (commands, grid) {

        commands.forEach(function(command) {
            parseCommand(command, grid);
        });
    };

    function parseCommand(command, grid) {
        grid.setLightsStatus(command.from.row, command.from.column, command.to.row, command.to.column, command.action);
    }
}