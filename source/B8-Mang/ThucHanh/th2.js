let arrs = [2, 3, 8, 78, 95, 67, 12, 85, 100, 45, 33, 11, 19, 45, 62, 99];

function myfunction(){
    let find = parseInt( document.getElementById('input').value);
    for(let i =0; i< arrs.length; i++){
        
        if(find == arrs[i]){
            alert("Số " + find + " được tìm thấy trong mảng A");
           
        }
    

    }
}