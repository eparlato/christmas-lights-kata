function LightV1() {

    var status = 'OFF';

    this.setStatus = function (newStatus) {
        status = newStatus;
    };

    this.getStatus = function() {
        return status;
    };
}