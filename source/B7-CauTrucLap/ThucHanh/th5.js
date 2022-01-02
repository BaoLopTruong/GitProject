function vungoifunction(){
    let pass ;
    let thanchu = "vungoimora";
    do{
        pass = document.getElementById('thanchu').value;
        alert("Thần chú sai rồi.");
    }while(pass !== thanchu);
    alert("Mở cửa thành công");
    document.write('<span> 40 ten cuop da mo cua kho bau thanh cong. </span>');
}