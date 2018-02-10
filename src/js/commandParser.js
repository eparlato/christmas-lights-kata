function CommandParser() {
    this.parse = function (commands) {

        var commandObjs = [];

        commands.forEach(function(command) {
            commandObjs.push(parseCommand(command));
        });

        return commandObjs;
    };

    function parseCommand(command) {
        var commandObj;

        // TODO: is it possible to remove ifs and have the same behaviour?
        if (command.action === 'ON') {
            commandObj = new CommandOn(command.from, command.to);
        } else if (command === 'OFF') {
            commandObj = new CommandOff(command.from, command.to);
        } else {
            commandObj = new CommandToggle(command.from, command.to);
        }

        return commandObj;
    }
}