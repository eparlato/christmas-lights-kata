function CommandProcessor() {
    this.process = function (commands, grid) {
        commands.forEach(function (command) {
            launch(command, grid);
        });
    };

    function launch(command, grid) {
        grid.launchCommand(command);
    }
}