function LightV1() {

    var status = 'OFF';

    this.setStatus = function (newStatus) {
        
        if (newStatus === 'TOGGLE') {
            if (status === 'OFF') {
                status = 'ON';
            } else {
                status = 'OFF';
            }
        } else {
            status = newStatus;
        }

    };

    this.getStatus = function() {
        return status;
    };
}