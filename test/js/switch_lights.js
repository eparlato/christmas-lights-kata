describe('On a 1x1 grid', function() {
    it('I can turn on one light', function() {
        var grid = new Grid(1, 1);

        var processor = new Processor(
            new GridManager(grid),
            new InstructionParser()
        );

        var instruction = new Instruction('ON', {x: 0, y: 0}, {x: 0, y: 0});
        var instructions = [instruction];

        processor.processInstructions(instructions);

        var light = grid.getLightAtPos(0, 0);

        expect(light.status).toEqual('ON');
    });

    it('I can turn off one light');

    it('I can toggle one light');

    it('I can send a sequence of commands');
});

describe('On a 1000x1000 grid', function() {
    it('I can turn on every light');

    it('I can turn off a bunch of lights wherever I want');

    it('I can send the Santa\'s sequence');
});