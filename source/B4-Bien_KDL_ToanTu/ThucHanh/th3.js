//bài 1
//khai báo biến
let i = 10;
let j = 20.5;
let b = true;
let s = "Hà Nội";
//xuất giá trị của biến ra màn hình
document.write("Bài 1: Khai báo các biến thuộc các kiểu khác nhau, gán giá trị cho chúng và in ra tài liệu HTML. <br>");
document.write('i = ' + i + '<br/>') ;

document.write('j = ' + j + '<br/>');

document.write('b = ' + b + '<br/>');

document.write('s =  '+ s + '<br/>');


//bài 2

let width = 20;
let height = 10;
let area = width * height;
document.write("Bài 2: Viết một đoạn mã Javascript, khai báo biến width chứa giá trị độ rộng của hình chữ nhật, biến height chứa giá trị chiều cao của hình chữ nhật."+ 
"<br>In ra màn hình diện tích của hình chữ nhật đó.<br>");
document.write("Chiều rộng là: " + width + "<br>");
document.write("Chiều dài là: " + height + "<br>");
document.write("Area= width * height = 20 * 10 = " + area+ "<br>");


//bài 3
document.write("Bài 3: Dùng hàm prompt() để nhập 2 số từ bàn phím, lưu vào 2 biến là a và b. Kiểm tra xem a có phải là bội số của b hay không (tức là a có chia hết cho b hay không)."+ 
"<br>Hiển thị kết quả ra màn hình bằng cách sử dụng hàm alert().<br>");

let a = Number(prompt("Nhập số thứ nhất: "));
let c = Number(prompt("Nhập số thứ hai:"));
if(a % c == 0){
    alert(a+ " là bội số của " + c);
}
else{
    alert(a+ " không là bội số của " + c);
}