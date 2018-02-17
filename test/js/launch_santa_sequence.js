describe('On a 1000x1000 grid', function () {

    var grid;
    var commandParser;
    var commandProcessor;
    var manager;
    var commandSequence_v1 = [{
            from: {
                row: 0,
                column: 0
            },
            to: {
                row: 999,
                column: 999
            },
            action: 'ON'
        }, {
            from: {
                row: 0,
                column: 0
            },
            to: {
                row: 999,
                column: 0
            },
            action: 'TOGGLE'
        }, {
            from: {
                row: 499,
                column: 499
            }, 
            to: {
                row: 500,
                column: 500
            },
            action: 'OFF'
        }
    ];

    it('I can launch the Santa\'s sequence version 1 and get the total number of lit lights', function() {
        grid = new Grid(1000, 1000, LightV1);
        commandParser = new CommandParser();
        commandProcessor = new CommandProcessor();
        manager = new Manager(grid, commandParser, commandProcessor);

        var total_lit_lights;

        manager.process(commandSequence_v1);

        total_lit_lights = manager.getTotalLitLights();

        expect(total_lit_lights).toEqual(998996);
    });
});