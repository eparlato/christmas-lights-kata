describe('Walking skeleton: on a 1x1 grid', function() {
    it('when I send a ON command on a single light, that light is turned on', function() {
        var grid = new Grid(1, 1, LightV1);
        var commandParser = new CommandParser();
        var commandProcessor = new CommandProcessor();
        var commandSequence = [
            {
                from: { 
                    row: 0, 
                    column: 0
                },
                to: {
                    row: 0,
                    column: 0
                },
                action: 'ON'
            }
        ];

        var manager = new Manager(grid, commandParser, commandProcessor);

        manager.process(commandSequence);

        var statusOfLight = manager.getLightStatus(0, 0, 0, 0);
        expect(statusOfLight[0][0]).toEqual('ON');
    });
});

describe('On a 1x1 grid', function() {
    var grid;
    var commandParser;
    var commandProcessor;
    var commandSequence;
    var manager;

    var statusOfLight;

    beforeEach(function() {
        grid = new Grid(1, 1, LightV1);
        commandParser = new CommandParser();
        commandProcessor = new CommandProcessor();
        manager = new Manager(grid, commandParser, commandProcessor);
    });
    
    it('if I send a TOGGLE command on a ON light, that light is switched off', function() {

        commandSequence = [{
            from: { 
                row: 0, 
                column: 0
            },
            to: {
                row: 0,
                column: 0
            },
            action: 'ON'
        },{
            from: { 
                row: 0, 
                column: 0
            },
            to: {
                row: 0,
                column: 0
            },
            action: 'TOGGLE'
        }];

        manager.process(commandSequence);

        statusOfLight = manager.getLightStatus(0, 0, 0, 0);
        expect(statusOfLight[0][0]).toEqual('OFF');
    });
});

