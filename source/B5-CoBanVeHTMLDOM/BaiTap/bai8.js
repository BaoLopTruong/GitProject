 function CanChi(){

    let input = parseInt(document.getElementById('input').value);
    let Can = input % 10;
    let NamCan;
    let Chi = input % 12;
    let NamChi;
    // switch case Can
    switch(Can){
        case 0: 
            NamCan = "Canh";
            break;
        case 1: 
            NamCan = "Tân";
            break;
        case 2: 
            NamCan = "Nhâm";
            break;
        case 3: 
            NamCan = "Quý";
            break;
        case 4: 
            NamCan = "Giáp";
            break;
        case 5: 
            NamCan = "Ất";
            break;
        case 6: 
            NamCan = "Bính";
            break;
        case 7: 
            NamCan = "Đinh";
            break;
        case 8: 
            NamCan = "Mậu";
            break;
        case 9: 
            NamCan = "Kỷ";
            break;
            
    }

    // Tính Chi
    switch(Chi){
        case 0: 
            NamChi = "Thân";
            break;
        case 1: 
            NamChi = "Dậu";
            break;
        case 2: 
            NamChi = "Tuất";
            break;
        case 3: 
            NamChi = "Hợi";
            break;
        case 4: 
            NamChi = "Tý";
            break;
        case 5: 
            NamChi = "Sửu";
            break;
        case 6: 
            NamChi = "Dần";
            break;
        case 7: 
            NamChi = "Mão";
            break;
        case 8: 
            NamChi = "Thìn";
            break;
        case 9: 
            NamChi = "Tỵ";
            break;
        case 10: 
            NamChi = "Ngọ";
            break;
        case 11: 
            NamChi = "Mùi";
            break;
      
    }
    document.getElementById('kqua').innerHTML = "Năm duong lịch: " + input +"<br><br>Năm âm lịch: " + NamCan + " " + NamChi;

 }