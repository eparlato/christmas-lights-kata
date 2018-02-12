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

    this.launchCommand = function (command) {
        var r;
        var c;

        for (r = command.from.row; r <= command.to.row; r++) {
            for (c = command.from.column; c <= command.to.column; c++) {
                lights[r][c].execute(command.action);
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