function Grid(tot_columns, tot_rows) {

    var lights = [];

    function init() {
        var row;
        
        for (var r = 0; r < tot_rows; r++) {
            row = [];

            for (var c = 0; c < tot_columns; c++) {
                row.push(new Light());
            }

            lights.push(row);
        }
    }

    this.getLightAtPos = function (row_num, column_num) {
        return lights[row_num][column_num];
    };

    init();
}