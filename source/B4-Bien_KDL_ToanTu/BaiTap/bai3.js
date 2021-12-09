//Viết chương trình JavaScript tính lãi suất ngân hàng theo công thức tính lãi đơn. 
//Đầu vào là số tiền vay, lãi suất, số năm ( n ).
// Sau đó hiển thị kết quả của số tiền phải trả sau n năm.
//Ví dụ: Khi ta gửi tiết kiệm 50 (triệu đồng) vào một ngân hàng với lãi suất 6,9% /năm
// thì sau một năm ta nhận được số tiền lãi là: 50 * 6,9% = 3,45 (triệu đồng)
//Số tiền lãi này như nhau được cộng vào hàng năm. Kiểu tính lãi này được gọi là lãi đơn.
//Sau hai năm số tiền cả gốc lẫn lãi là: 50 + 2 * 3,45 = 56,9 (triệu đồng)
//Sau n năm số tiền cả gốc lẫn lãi là: 50 + n * 3,45 (triệu đồng)

var vay = Number(prompt("Nhập sô tiền cần vay: " +"(đơn vị: triệu VND)"));

if(isNaN(vay) === true){
  
  var vay = Number(prompt("Vui lòng nhập lại số tiền cần vay: "));
  
}
else{
  
  var lai = Number(prompt("Nhập số lãi xuất (đơn vị %):"));
  
  if(isNaN(lai) === true){
    
    var lai = Number(prompt("Vui lòng nhập lại số lãi xuất: "));
    
  }
  else{
    
    var nam = Number(prompt("Nhập số năm vay:"));
    
    if(isNaN(nam) === true){
      
      var nam = Number(prompt("Vui lòng nhập lại số năm vay:"));
      
    }
    else{
      
      var S= vay + (vay*nam*lai/100);
      
      alert("Số tiền cẩ gốc lẫn lãi là: "+S +" (đơn vị: triệu VND)");
      
    }
    
  }
  
}