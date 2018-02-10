function CommandProcessor() {
    this.process = function(commands, grid) {

        commands.forEach(function(command) {
            processCommand(command, grid);
        });
    };

    function processCommand(command, grid) {
        command.execute(grid);
    }
}