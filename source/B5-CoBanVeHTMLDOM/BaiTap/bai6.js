function datefunction(){
    let thang = document.getElementById('moy').value;
    const a= " có 31 ngày";
    const b=" có 30 ngày";
    const c= " có 28 ngày ( 29 ngày nếu năm nhuận)";
    switch(thang){
        case '1':
            document.getElementById('kqua').innerHTML= "Tháng " + thang + a;
            break;
        case '2':
            document.getElementById('kqua').innerHTML= "Tháng " + thang + c; 
            break;    
        case '3':
            document.getElementById('kqua').innerHTML= "Tháng " + thang + a;
            break;
        case '4':
            document.getElementById('kqua').innerHTML= "Tháng " + thang + b; 
            break;   
        case '5':
            document.getElementById('kqua').innerHTML= "Tháng " + thang + a;
            break;
        case '6':
            document.getElementById('kqua').innerHTML= "Tháng " + thang + b;
            break;
        case '7':
            document.getElementById('kqua').innerHTML= "Tháng " + thang + a;
            break;
        case '8':
            document.getElementById('kqua').innerHTML= "Tháng " + thang + a;
            break;
        case '9':
            document.getElementById('kqua').innerHTML= "Tháng " + thang + b;
            break;
        case '10':
            document.getElementById('kqua').innerHTML= "Tháng " + thang + a;
            break;
        case '11':
            document.getElementById('kqua').innerHTML= "Tháng " + thang + b;
            break;
        case '12':
            document.getElementById('kqua').innerHTML= "Tháng " + thang + a;
            break;

    }
}