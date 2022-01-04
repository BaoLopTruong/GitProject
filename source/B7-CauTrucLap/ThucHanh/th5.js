function vungoifunction(){
    let pass ;
    let thanchu = "vungoimora";
    
    do{
        pass = document.getElementById('thanchu').value;
        alert("Thần chú sai rồi.");
        break;
    }while(pass != thanchu);
    
        
        alert("Mở cửa thành công");
        document.write('<span> 40 ten cuop da mo cua kho bau thanh cong. </span>');
    
   
}


// let PASSWORD = "Vung oi mo ra";
// let input;
// do {
//     input = prompt("Nhap cau than chu");
// } while (input !== PASSWORD);
// alert("Mo cua thanh cong!");