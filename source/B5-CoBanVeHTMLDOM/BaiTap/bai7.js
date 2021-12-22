function tinhdiem(){
    var toan = parseFloat(document.getElementById('toan').value);
    var van = parseFloat(document.getElementById('van').value);
    var anh = parseFloat(document.getElementById('anh').value);
    var khuvuc = parseFloat(document.getElementById('khuvuc').value);

    var S = toan + van + anh + khuvuc;

    document.getElementById('kqua').innerHTML = " Tổng điểm ĐH khối D của bạn là: " + S;
    console.log( toan, van, anh , S, khuvuc);
}