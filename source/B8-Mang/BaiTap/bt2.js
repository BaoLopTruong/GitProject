function noiphantu(){
    let mangA= ["Xin Chào", "Code", "Gym", "Tôi", "Là", "Học","Viên","Cua","Khoa","Nhap","Mon","Co", "Ban"];
    //mangA.join();
    console.log(mangA);
    console.log(mangA.join());
    document.getElementById('result1').innerHTML ="F12 để thấy kết quả";
}

function chendau(){
    let n = document.getElementById('id2').value;
    let arr    = n.split('');
    let result = [];
    arr.forEach(function(str, index){
        if((n[index-1]%2 === 0)&&(n[index]%2 === 0)){
            result.push('-', str);
        }else{
            result.push(str);
        }
    });
    // document.write(result.join(''));
    document.getElementById('result2').innerHTML = result.join('');
}

function chuhoa(){
    let hoa = document.getElementById('id3').value;
    console.log(hoa.toUpperCase())
    document.getElementById('result3').innerHTML = hoa.toUpperCase();
}