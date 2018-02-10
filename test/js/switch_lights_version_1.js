describe('Walking skeleton: on a 1x1 grid', function() {
    it('when I send a ON command on a single light, that light is turned on', function() {
        var grid = new Grid(1, 1, LightV1);
        var commandParser = new CommandParser();
        var lightActionProcessor = new LightActionProcessor();
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

        var manager = new Manager(grid, commandParser, lightActionProcessor);

        manager.process(commandSequence);

        var lights = manager.getLights(0, 0, 0, 0);
        
        expect(lights[0].getStatus()).toEqual('ON');
    });
});

