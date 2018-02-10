function CommandParser() {
    this.parse = function (commandSequence) {

        var lightActions = [];

        commandSequence.forEach(function(command) {
            lightActions.push(parseCommand(command));
        });

        return lightActions;
    };

    function parseCommand(command) {
        var lightAction;

        // TODO: is it possible to remove ifs and have the same behaviour?
        if (command.action === 'ON') {
            lightAction = new TurnOn(command.from, command.to);
        } else if (command === 'OFF') {
            lightAction = new TurnOff(command.from, command.to);
        } else {
            lightAction = new Toggle(command.from, command.to);
        }

        return lightAction;
    }
}