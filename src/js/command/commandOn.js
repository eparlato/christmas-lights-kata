function CommandOn(from, to) {

    this.execute = function(grid) {
        grid.setLightsStatus(from.row, from.column, to.row, to.column, 'ON');
    };
}