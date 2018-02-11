function Grid(tot_rows, tot_columns, light) {

    var lights = [];

    function build() {
        var col;
        var row;
        var innerArray;

        for (row = 0; row < tot_rows; row++) {
            innerArray = [];

            for (col = 0; col < tot_columns; col++) {
                innerArray.push(new light());
            }

            lights.push(innerArray);
        }
    } 

    this.setLightStatus = function(from_row, from_column, to_row, to_column, status) {
        var r;
        var c;

        for (r = from_row; r <= to_row; r++) {
            for (c = from_column; c <= to_column; c++) {
                lights[r][c].setStatus(status);
            }
        }
    };

    this.getLightStatus = function(from_row, from_column, to_row, to_column) {
        var status = [];
        var r;
        var c;
        var innerArray;

        for (r = from_row; r <= to_row; r++) {
            innerArray = [];
            for (c = from_column; c <= to_column; c++) {
                innerArray.push(lights[r][c].getStatus());
            }

            status.push(innerArray);
        }

        return status;
    };

    build();
}