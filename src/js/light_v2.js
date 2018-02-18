function LightV2() {
    
    var brightnessLevel = 0;

    this.execute = function(action) {
        
        if(action === 'OFF') {
            brightnessLevel = brightnessLevel > 0 ? brightnessLevel - 1: 0;
        } else if(action === 'ON'){
            ++brightnessLevel;
        } else if(action === 'TOGGLE') {
            brightnessLevel += 2;
        }

    };

    this.getBrightnessLevel = function() {
        return brightnessLevel;
    };
}