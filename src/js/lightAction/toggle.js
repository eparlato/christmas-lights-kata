function Toggle(from, to) {
    
    this.execute = function(grid) {
        grid.setLightStatus(from.row, from.column, to.row, to.column, 'TOGGLE');
    };

}