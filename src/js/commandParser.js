function CommandParser() {
    this.parse = function (commandSequence) {

        var commands = [];

        commandSequence.forEach(function(command) {
            commands.push(command);
        });

        return commands;
    };

}