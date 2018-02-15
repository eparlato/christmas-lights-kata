describe('On a 1000x1000 grid', function () {

    var grid;
    var commandParser;
    var commandProcessor;
    var commandSequence;
    var manager;

    it('I can launch the Santa\'s command sequence with version 1 lights', function () {
        grid = new Grid(1000, 1000, LightV1);
        commandParser = new CommandParser();
        commandProcessor = new CommandProcessor();
        manager = new Manager(grid, commandParser, commandProcessor);

        var statusOfLight;

        commandSequence = [{
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

        manager.process(commandSequence);

        statusOfLight = manager.getLightStatus();

        expect(statusOfLight[0][0]).toEqual('OFF');
        expect(statusOfLight[0][1]).toEqual('ON');
        expect(statusOfLight[245][0]).toEqual('OFF');
        expect(statusOfLight[245][1]).toEqual('ON');
        expect(statusOfLight[999][0]).toEqual('OFF');
        expect(statusOfLight[999][1]).toEqual('ON');
        expect(statusOfLight[499][498]).toEqual('ON');
        expect(statusOfLight[499][499]).toEqual('OFF');
        expect(statusOfLight[499][500]).toEqual('OFF');
        expect(statusOfLight[500][499]).toEqual('OFF');
        expect(statusOfLight[500][500]).toEqual('OFF');
        expect(statusOfLight[999][999]).toEqual('ON');
    });
});