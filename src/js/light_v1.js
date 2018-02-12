function LightV1() {

    var status = 'OFF';

    this.execute = function (action) {

        if (action === 'TOGGLE') {
            if (status === 'OFF') {
                status = 'ON';
            } else {
                status = 'OFF';
            }
        } else {
            status = action;
        }

    };

    this.getStatus = function () {
        return status;
    };
}