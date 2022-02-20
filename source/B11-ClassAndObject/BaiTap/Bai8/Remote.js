class Remote {
    constructor(id) {
        this.id = id;
    }
    connectToTV(tivi) {
        this.tivi = tivi;
    }
    changeChannel(channel) {
        this.tivi.channel = channel;
    }

    turnOn() {
        this.tivi.status = 'on';
    }
    turnOff() {
        this.tivi.status = 'off';
    }
}