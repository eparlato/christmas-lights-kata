describe('Walking skeleton: on a 1x1 grid', function() {
    it('when I send a ON command on a single light, that light is turned on', function() {
        var grid = new Grid(1, 1);

        var light = grid.getLightAtPos(0, 0);
        expect(light.status).equalTo('ON');
    });
}); 