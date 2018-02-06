function Grid(tot_cols, tot_rows, light_obj) {
    
    this.lights = [];

    var col;
    var row;
    var innerArray;

    for (col = 0; col < tot_cols; col++) {
        innerArray = [];
        for (row = 0; row < tot_rows; row++) {
            innerArray.push(new light_obj());
        }
        this.lights.push(innerArray);
    }

    this.getLightAtPos = function(column_pos, row_pos) {
        return this.lights[column_pos][row_pos];
    };

}

function LightOff() {
    this.status = 'OFF';
}

function LightOn() {
    this.status = 'ON';
}

var grid = new Grid(1, 1, LightOn);
var light = grid.getLightAtPos(0,0);

console.log('light is ' + light.status);
