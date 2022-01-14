// var a=new Array(),n="";
// a[1]='T';a[2]='Ô';a[3]='I';a[4]=' ';a[5]='L';a[6]='À';a[7]=' ';a[8]='M';a[9]='Ộ';a[10]='T';a[11]=' ';a[12]='Đ';a[13]='Ứ';a[14]='A';a[15]=' ';a[16]='N';a[17]='G';a[18]='Ố';a[19]='C';a[20]='!';a[21]='!';a[22]='!';
// function typeTextarea(){
//     t = document.f.txt.value;
//     j = t.length;
//     if(j > 0)
//     {
//         for(var i=1; i<=j; i++)
//         {
//             n = n + a[i];
//             if(i == 22)
//             {
//                 document.f.txt.value = "";
//                 n = "";
//             }
//         }
//     }
//     document.f.txt.value = n;
//     n="";
//     setTimeout("typeTextarea()", 1);
//     //return false;
// }

let b =[" ","T", "ô", "i", " ", "L", "à", " ", "M", "ộ", "t", " ", "T", "h", "ằ", "n", "g", " ", "T", "ồ", "i", " ", "!"];
let html= "";

function typeTextarea(){
    t = document.f.txt.value;
    let j = t.length;
    console.log(j);
    if( j > 0){

        for(let i =1; i<= j; i++){
            html = html + b[i];
            if(i == 23){
                document.f.txt.value = "";
                html="";
            }
        }
    }
    document.f.txt.value= html;
    html="";
    setTimeout("typeTextarea()", 1);

}