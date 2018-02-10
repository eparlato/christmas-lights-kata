function LightActionProcessor() {
    this.process = function(lightActions, grid) {

        lightActions.forEach(function(command) {
            process(command, grid);
        });
    };

    function process(lightAction, grid) {
        lightAction.execute(grid);
    }
}