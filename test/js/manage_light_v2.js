describe('If I use a light v2', function () {
    var light;

    beforeEach(function() {
        light = new LightV2();
    });
    
    it('If I send a ON command, the brightness is increased by 1', function() {
        light.execute('ON');

        expect(light.getBrightnessLevel()).toEqual(1);
    });

    it('If I send a OFF command, the brightness is decreased by 1', function() {
        light.execute('ON');
        light.execute('ON');
        light.execute('ON');
        light.execute('OFF');

        expect(light.getBrightnessLevel()).toEqual(2);
    });

    it('If I send a TOGGLE command, the brightness is increased by 2', function() {
        light.execute('TOGGLE');
        light.execute('TOGGLE');
        light.execute('TOGGLE');

        expect(light.getBrightnessLevel()).toEqual(6);
    });

    it('If I send a OFF command on a light with brightness level 0, the brightness remains 0', function() {
        light.execute('OFF');

        expect(light.getBrightnessLevel()).toEqual(0);
    });
});