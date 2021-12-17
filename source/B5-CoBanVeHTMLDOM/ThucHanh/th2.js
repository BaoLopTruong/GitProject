/*
Cách xác định năm nhuận: Những năm chia hết cho 4 là năm nhuận, ngoại trừ những năm chia hết cho 100 mà không chia hết cho 400.

Từ đó, có thể rút gọn thành các quy tắc xác định năm nhuận:

Những năm chia hết cho 4 mà không chia hết cho 100 là năm nhuận
Những năm chia hết cho 100 mà không chia hết cho 400 thì KHÔNG PHẢI là năm nhuận
Những năm chia hết đồng thời cho 100 và 400 là năm nhuận
 */

let nam = parseInt(prompt("Vui lòng nhập năm để kiểm tra"));

let nhuan = false;

let chia4 = nam % 4;
let chia100 = nam % 100;
let chia400 = nam % 400;

if(chia4 ==0){

    if(chia100 ==0){

        if(chia400 ==0){
            nhuan = true;
        }
    }
    else{
        nhuan = true;
    }
}

if (nhuan == true) {
  alert(nam + " là năm nhuận");

} else {

  alert(nam + " không là năm nhuận");

}