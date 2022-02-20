let remote = new Remote('RM01');
let tivi = new Tivi();
// KếT nối remote với TV
remote.connectToTV(tivi);
// Bật TIVI
remote.turnOn();
// ChuyểN kênh bằng TV
tivi.changeChannelTV(7);
console.log(tivi.channel);
// Chuyển kênh bằng remote
remote.changeChannel(3);
console.log(tivi.channel);
// Tăng âm lượng lên 2 đƠn vị
tivi.changeVolume('up');
tivi.changeVolume('up');
console.log(tivi.volume); 
// Dùng remote tắt tivi
remote.turnOff();
console.log(tivi.status);