describe('On a 1x1 grid', function() {
    var grid;
    var commandParser = new CommandParser();
    var commandProcessor = new CommandProcessor();
    var manager;
    var commandSequence;
    var totalBrightness;

    beforeEach(function() {
        grid = new Grid(1, 1, LightV2);
        manager = new Manager(grid, commandParser, commandProcessor);
    });
    
    it('I can increase the total brightness by 1', function() {

        commandSequence = [
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

        manager.process(commandSequence);

        totalBrightness = manager.getTotalBrightness();

        expect(totalBrightness).toEqual(1);
    });
});