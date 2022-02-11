let date = new MyDate(2, 2, 2007);
let day = date.getDay(); // 2
let month = date.getMonth(); // 2
let year = date.getYear(); // 2007
alert(day + "/" + month + "/" + year);

date.setMonth(10);
date.setYear(2019);
alert(date.day + "/" + date.month + "/" + date.year);

let nam= new Date();

console.log('getThu ' + nam.getDay()+ ", getNgay "+ nam.getDate()+ ", getThang "+ nam.getMonth()+ ", getNam " + nam.getFullYear());
