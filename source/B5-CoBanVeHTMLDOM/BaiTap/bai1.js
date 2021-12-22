
//cách 1: 
// tinh tong hai so
function Addition(){
    var a = document.querySelector("#input1").value;
    var b = document.getElementById("input2").value;
     a = parseFloat(a);
     b = parseFloat(b);
    console.log(a, b);
    var add = a + b;
    
    document.querySelector("#kqua").innerHTML = add;

}

// han tinh hieu hai so
function Subtraction(){
    var a = document.querySelector("#input1").value;
    var b = document.getElementById("input2").value;
     a = parseFloat(a);
     b = parseFloat(b);
    console.log(a, b);
    var add = a - b;
    
    document.querySelector("#kqua").innerHTML = add;


}

// han tinh tich hai so
function Multiplication(){
    var a = document.querySelector("#input1").value;
    var b = document.getElementById("input2").value;
     a = parseFloat(a);
     b = parseFloat(b);
    console.log(a, b);
    var add = a * b;
    
    document.querySelector("#kqua").innerHTML = add;


}

// han tinh thuong hai so
function Division(){
    var a = document.querySelector("#input1").value;
    var b = document.getElementById("input2").value;
     a = parseFloat(a);
     b = parseFloat(b);
    console.log(a, b);
    var add = a / b;
    
    document.querySelector("#kqua").innerHTML = add;


}

// cach2:
// tinh tong hai so
function TinhTong(){
    var a = parseFloat( document.querySelector("#input1").value );
    var b = parseFloat(document.getElementById("input2").value);
   
    console.log(a, b);
    var add = a + b
    document.getElementById("kqua1").innerHTML = add;

} 

// tinh hieu hai so
function TinhHieu(){
    var a = parseFloat( document.querySelector("#input1").value );
    var b = parseFloat(document.getElementById("input2").value);
   
    console.log(a, b);
    var add = a - b;
    document.getElementById("kqua1").innerHTML = add;

}

// tinh tich hai so
function TinhTich(){
    var a = parseFloat( document.querySelector("#input1").value );
    var b = parseFloat(document.getElementById("input2").value);
   
    console.log(a, b);
    var add = a * b;
    document.getElementById("kqua1").innerHTML = add;

} 

// tinh thuong hai so
function TinhThuong(){
    var a = parseFloat( document.querySelector("#input1").value );
    var b = parseFloat(document.getElementById("input2").value);
   
    console.log(a, b);
    var add = a / b;
    document.getElementById("kqua1").innerHTML = add;

} 

//Yêu cầu mở rộng:
//Chúng ta có sử dụng 1 hàm duy nhất thay cho 4 hàm ở trên không?
//Nâng cấp ứng dụng để trở nên cao cấp hơn. Có thể tham khảo giao diện calculator của Google.
function Calculators(value){
    var a = parseFloat( document.querySelector("#input1").value );
    var b = parseFloat(document.getElementById("input2").value);
    if(value == "add"){
        var add = a + b;
    document.getElementById("kqua1").innerHTML = add;
    }
    else if( value =="sub"){
        var add = a - b;
    document.getElementById("kqua1").innerHTML = add;
    }
    else if( value =="mul"){
        var add = a * b;
    document.getElementById("kqua1").innerHTML = add;
    }
    else if( value =="div"){
        var add = a / b;
    document.getElementById("kqua1").innerHTML = add;
    }
    else{
        document.getElementById("kqua1").innerHTML = "Something Wrong. Try again.";
    }
}
