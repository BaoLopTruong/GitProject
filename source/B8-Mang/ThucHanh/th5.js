let n= parseInt(prompt("Nhập n:"));
let arrs = Array();
for(let i=0; i< n; i++){
    arrs[i] = parseInt(prompt("nhập giá trị cho a[" + i + "] ="));
}

document.write(" Mảng a[" + n +"] = ");
for(let i = 0; i< arrs.length ; i++){
    document.write( arrs[i] + " ");
    
}

document.write("<br>Đảo ngược mảng: <br>");
let daoarrs = [];
for(let i = arrs.length -1 ; i>=0; i--){
    daoarrs.push(arrs[i]);
    
}
for(let i = 0; i< arrs.length ; i++){
    document.write( daoarrs[i] + " ");
    
}