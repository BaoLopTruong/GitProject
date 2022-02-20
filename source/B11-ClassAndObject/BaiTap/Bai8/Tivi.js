class Tivi {
    constructor() {
        this.channel = 1;
        this.volume = 10;
        this.status = 'off';
    }

    changeChannelTV(channel) {
        this.channel = channel;
    }

    changeVolume(string) {
        if(string == 'up') {
            this.volume ++;
        } else if(string == 'down') {
            this.volume --;
        }
    }
}