function checkinput(a,b){  
    if(a > b){
        return true;
    }
    else{
        return false;
    }

}

function b1function(){
    let i1 = parseInt(document.getElementById('value1').value);
    let i2 = parseInt(document.getElementById('value2').value);
    if(checkinput(i1,i2)){
        alert(i1 + " > " + i2)
    }
    else{
        let S = i1 + i2;
        alert("S = " + S)
    }
}


//bài 2
let nameStar= ["Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe", "Regulus"];
let starOfStar = ["Ursa Minor", "Tarurus", "Cygnus", "Lyra", "Aquila", "Ursa Major", "Leo"];
function searchStar(X){   
    let chom="";
    for(let i = 0 ; i< 7; i++){
        if(X == nameStar[i]){
           chom = starOfStar[i];
           break;
        }
        else{
            chom ="Không tìm thấy";
        }
    }
    return chom;
}

function FindStar(){
   let star =  prompt("nhập tên Star cần tìm:");
   alert("Chòm sao của " + star + " là: " + searchStar(star));
}

//bai 3

function binhphuong(Y){
    return Y * Y;
}


function showresult(){
    let S = parseInt(document.getElementById('mu2').value);
    alert("Kết quả: " + binhphuong(S));
    
}

//bai4
function Stron(R){
return 3.14 * R * R;
}

function Ptron(R){
    return 3.14 *2 * R;
}

function showresult4(){
    let R = parseFloat( document.getElementById('idR').value);
    alert("Chu vi hình tròn: " + Ptron(R)  + ", Diện tích hình tòn: " + Stron(R));
}

//bai 5
function giaithua(n){
    if(n ==1){
        return 1;
    }
    return n * giaithua(n-1);
}

function showresult5(){
    let n = parseFloat( document.getElementById('idGT').value);
    alert(n + "!= " + giaithua(n));
}


//bai 6:
function checknumber(n){
    if(n == 'undefined'){
        return false;
    }
    else if(n >=0 && n <=9){
        return true;
    }
    return false;
}

function showresult6(){
    let n =  document.getElementById('idnumber').value;
    if(checknumber(n)){
        alert("ký tự nhập vào là số");
    }
    else{
        alert("Ký tự nhập vào không phải là số");
    }
}

//bai 7
function GTNN(a,b,c){
    let min = a;
    if(min> b){
        min = b;
        if(min > c){
            min =c;
        }
    }
    return min;
  
}

function showresult7(){
    let a = parseInt( document.getElementById('idA').value);
    let b = parseInt( document.getElementById('idB').value);
    let c = parseInt( document.getElementById('idC').value);

    alert("Giá trị nhỏ nhât là: " + GTNN(a,b,c));
}

//bai 8
function checkND(n){
       //flag = 1 => số nguyên
    //flag = 0 => số thực

    
    if (Math.ceil(n) != Math.floor(n)){
        return false;
    } 
    return true;
}

function showresult8(){
    let n = document.getElementById('idN').value;
    if(checkND(n)){
        alert( n +" là số nguyên");
    }
    else{
        alert( n +" không là số nguyên");
    }

}

//bai 9:\
let arrs = Array();
let htmnl="";
function nhapmang(){
   
    let n= parseInt(prompt("Nhập n:"));

    for(let i=0; i< n; i++){
    arrs[i] = parseInt(prompt("nhập giá trị cho a[" + i + "] ="));
    }
    for(let i = 0; i< arrs.length ; i++){
     document.getElementById('results').innerHTML +=( arrs[i] + " "); 
    }
    console.log(arrs);
}

function showresult9(){
   arrs.reverse();
   document.getElementById('results').innerHTML += "<br> Đảo ngược mảng:"
   for(let i = 0; i< arrs.length ; i++){
    document.getElementById('results').innerHTML +=  ( arrs[i] + " "); 
    }
 console.log(arrs);

}

//bai 10
function findX(arr,Y){

    let count =0;
   for(let i = 0; i< arr.length; i++){
       if(Y == arr[i]){
        count ++;
       }
    
   }
 return count;
}

function checkfunction(){
    let n = document.getElementById('id10').value;
    let Y = prompt("Nhập ký tự cần tìm.");
    let arrays = n.split("");
   
    alert("Ký tự "+ Y + " có " + findX(arrays,Y) + " xuất hiện trong chuỗi ký tự");
    console.log( findX(arrays,Y));
}