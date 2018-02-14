function CommandParser() {
    this.parse = function (commandSequence) {
        var commands = [];

        if(commandSequence === undefined || commandSequence === null) {
            return [];
        }


        commandSequence.forEach(function(command) {
            commands.push(command);
        });

        return commands;
    };

}