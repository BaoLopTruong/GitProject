
//bai 1

let num ;

let total = 0;
while( num != -1 ) {
    num = parseInt( prompt("Enter a number: "));
    alert(num);
    total += num;
    alert("total =" + total);
 } 


//bai2:

function myFunction(){
    // var div = document.createElement("div");
    // var text = document.createTextNode("Đây là nội dung của thẻ div mới được tạo!");
    // div.appendChild(text);
    // document.body.appendChild(div);

    let i = 1;

    while (i < 100) {
        // phân thân vòng lặp
        //document.write("<hr width = " + i + "%>");
        // tạo 1 thẻ hr mới
        var createhr = document.createElement("hr");
        // xét giá trị cho thuộc tính width
        createhr.setAttribute('width', i+"%");
        // gọi đến thẻ div
        var currentDiv = document.getElementById("crehr"); 
        // thêm vào thẻ div
        document.body.insertBefore(createhr, currentDiv); 
        i++;
    }
}