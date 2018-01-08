function Grid(tot_cols, tot_rows, light_obj) {
    
    this.lights = [];

    var c;
    var row;
	var r;

    for (c = 0; c < tot_cols; c++) {
		row = [];
        for (r = 0; r < tot_rows; r++) {
            row.push(new light_obj());
        }
		this.lights.push(row);
    }

    this.getLightAtPos = function(column_pos, row_pos) {
        return this.lights[column_pos - 1 ][row_pos - 1];
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

grid = new Grid(1, 1, LightOn);
light = grid.getLightAtPos(1,1);
console.log('light is ' + light.status);
