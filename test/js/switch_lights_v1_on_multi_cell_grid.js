describe('On a 3x3 grid', function() {
    var grid;
    var commandParser;
    var commandProcessor;
    var commandSequence;
    var manager;

    var statusOfLight;

    beforeEach(function() {
        grid = new Grid(3, 3, LightV1);
        commandParser = new CommandParser();
        commandProcessor = new CommandProcessor();
        manager = new Manager(grid, commandParser, commandProcessor);
    });
    
    it('I can send a ON command on multiple lights', function(){
        commandSequence = [{
            from: {
                row: 1,
                column: 1
            },
            to: {
                row: 2,
                column: 2
            },
            action: 'ON'
        }];

        manager.process(commandSequence);

        statusOfLight = manager.getLightStatus(0, 0, 2, 2);

        expect(statusOfLight[0][0]).toEqual('OFF');
        expect(statusOfLight[0][1]).toEqual('OFF');
        expect(statusOfLight[0][2]).toEqual('OFF');
        expect(statusOfLight[1][0]).toEqual('OFF');
        expect(statusOfLight[1][1]).toEqual('ON');
        expect(statusOfLight[1][2]).toEqual('ON');
        expect(statusOfLight[2][0]).toEqual('OFF');
        expect(statusOfLight[2][1]).toEqual('ON');
        expect(statusOfLight[2][2]).toEqual('ON');
    });

    it('I can send a TOGGLE command on multiple lights', function() {
        // The first command switches on a bunch of lights...
        commandSequence = [{
            from: {
                row: 0,
                column: 0
            },
            to: {
                row: 0,
                column: 2
            },
            action: 'ON'
        }];

        // ... and the second one changes the status of the lights
        var commandSequence2 = [{
            from: {
                row: 0,
                column: 1
            },
            to: {
                row: 1,
                column: 2
            },
            action: 'TOGGLE'
        }];

        manager.process(commandSequence);
        manager.process(commandSequence2);
        
        statusOfLight = manager.getLightStatus(0, 0, 1, 2);

        expect(statusOfLight[0][0]).toEqual('ON');
        expect(statusOfLight[0][1]).toEqual('OFF');
        expect(statusOfLight[0][2]).toEqual('OFF');
        expect(statusOfLight[1][1]).toEqual('ON');
        expect(statusOfLight[1][2]).toEqual('ON');
    });
});