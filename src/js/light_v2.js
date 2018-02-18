function LightV2() {
    
    var brightnessLevel = 0;

    this.execute = function(action) {
        brightnessLevel++;
    };

    this.getBrightnessLevel = function() {
        return brightnessLevel;
    };
}