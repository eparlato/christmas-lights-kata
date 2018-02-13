describe('If I use a light V1', function() {
    var light;
    var status;

    beforeEach(function() {
        light = new LightV1();
    });
    
    it('If I send a OFF command on a ON light, the status is OFF', function () {
        // Setup: the light must be switched on
        light.execute('ON');

        // Action: execute OFF
        light.execute('OFF');

        // Expectation: the light must be OFF
        expect(light.getStatus()).toEqual('OFF');
    });

    it('If I send a ON command on a OFF light, the status is ON', function() {

        light.execute('ON');

        expect(light.getStatus()).toEqual('ON');
    });

    it('If I send a TOGGLE command on a ON light, that light is OFF', function() {
        light.execute('ON');

        light.execute('TOGGLE');

        expect(light.getStatus()).toEqual('OFF');
    });
    
    it('If I send a OFF command on a OFF light, that light is OFF', function() {
      
        light.execute('OFF');

        expect(light.getStatus()).toEqual('OFF');
    });

    it('If I send an empty command on a ON light, the status is still ON', function() {

        light.execute('ON');

        light.execute('');

        expect(light.getStatus()).toEqual('ON');
    });
});