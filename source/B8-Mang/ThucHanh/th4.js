
let n= parseInt(prompt("Nhập n:"));
let arrs = Array();
for(let i=0; i< n; i++){
    arrs[i] = parseInt(prompt("nhập giá trị cho a[" + i + "] ="));
}

document.write(" Mảng a: ");
for(let i = 0; i< arrs.length ; i++){
    document.write( arrs[i] + " ");
    
}
let max= arrs[0];
let min = arrs[0];
let position=0;
let index =0;
for( let i=1 ;i < arrs.length; i++){
    
    if(arrs[i] > max){
        max = arrs[i];
        index= i;
    }
}
document.write("<br>Giá trị lớn nhất trong mảng: " + max + ", tại vị trí: " + index);

for( let i=1 ;i < arrs.length; i++){
    
    if(min > arrs[i]){
        min = arrs[i];
        position= i;
    }
}

document.write("<br>Giá trị nhỏ nhất trong mảng: " + min + ", tại vị trí: " + position);



// function dispArr(arr) {
//     for (var i = 0; i < arr.length; ++i) {
//        document.write(arr[i] + " ");
//        if(i%10==9){
//           // putstr("\n");
//           document.write("\n");
//        }
//     }
//     if(i%10!=0){
//       // putstr("\n");
//       document.write("\n");
//     }
// } //end function dispArr()


// function findMin(arr) {
//     var min = arr[0];
//     for (var i = 1; i < arr.length; ++i) {
//        if (arr[i] < min) {
//           min = arr[i];
//        }
//     }
//     return min;
//  }

// function findMax(arr) {
//     var max = arr[0];
//     for (var i = 1; i < arr.length; ++i) {
//        if (arr[i] > max) {
//           max = arr[i];
//        }
//     }
//     return max;
//  }

// var nums = [];



// for(var i=0; i<100; ++i){
//    nums[i] = Math.floor(Math.random() * 101);
// }
// var minValue = findMin(nums);


// dispArr(nums); //Hàm này được lấy từ bài đọc thuật toán tìm kiếm
// document.write("<br/>");
// document.write("<br/>");
// document.write("The minimum value is: " + minValue);
// var maxValue = findMax(nums);
// document.write("<br/>");
// document.write("The maximum value is: " + maxValue);