function Grid(tot_cols, tot_rows, light_obj) {
    
    this.lights = [tot_cols][tot_rows];

    var col;
    var row;

    for (col = 0; col < tot_cols; col++) {
        for (row = 0; row < tot_rows; row++) {
            this.lights[col][row] = new light_obj();
        }
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

var grid = new Grid(1, 1, LightOff);
var light = grid.getLightAtPos(1,1);

console.log('light is ' + light.status);
