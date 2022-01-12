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
let index =0;
for( let i=1 ;i < arrs.length; i++){
    
    if(arrs[i] > max){
        max = arrs[i];
        index= i;
    }
}
document.write("<br>Giá trị lớn nhất trong mảng: " + max + ", tại vị trí: " + index);