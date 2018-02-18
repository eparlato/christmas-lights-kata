describe('On a 4x4 grid', function() {
    var grid;
    var commandParser;
    var commandProcessor;
    var commandSequence;
    var manager;

    beforeEach(function() {
        grid = new Grid(4, 4, LightV2);
        commandParser = new CommandParser();
        commandProcessor = new CommandProcessor();
        manager = new Manager(grid, commandParser, commandProcessor);
    });

    it('I can send a sequence of commands on the same lights and get the total brightness', function() {
        commandSequence = [
            {
                from: {
                    row: 0,
                    column: 0
                },
                to: {
                    row: 3,
                    column: 3
                },
                action: 'ON'
            },
            {
                from: {
                    row: 0,
                    column: 0
                },
                to: {
                    row: 3,
                    column: 3
                },
                action: 'TOGGLE'
            }
        ];

        manager.process(commandSequence);

        expect(manager.getTotalBrightness()).toEqual(48);
    });

    it('I can send a sequence of commands on different lights and get the total brightness', function() {
        commandSequence = [
            {
                from: {
                    row: 1,
                    column: 1
                },
                to: {
                    row: 2,
                    column: 2
                },
                action: 'TOGGLE'
            },
            {
                from: {
                    row: 0,
                    column: 0
                },
                to: {
                    row: 1,
                    column: 1
                },
                action: 'ON'
            },
            {
                from: {
                    row: 2,
                    column: 2
                },
                to: {
                    row: 3,
                    column: 3
                },
                action: 'OFF'
            }
        ];

        manager.process(commandSequence);

        expect(manager.getTotalBrightness()).toEqual(11);
    });
});