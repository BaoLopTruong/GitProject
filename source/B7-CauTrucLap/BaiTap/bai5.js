
function dinhfunction(){
    var N = 5;
    document.getElementById('kqua1').innerHTML = "<p> Kết quả <br> ";
    for(i=0;i<N;i++) {
        		//tao hang (row) *
        		for(j=0;j<=i;j++) {
        			//document.writeln(" * ");
                    
                    document.getElementById('kqua1').innerHTML += " * ";

        		}
        		//xuong dong khi hien thi ket qua cua tung hang
        		//document.writeln("<br/>");
                document.getElementById('kqua1').innerHTML += "<br>";
        	}
            document.getElementById('kqua1').innerHTML += "</p>";
}


function dayfunction(){
    var N = 5;
    document.getElementById('kqua2').innerHTML = "<p> Kết quả <br> ";
    for(i=N-1;i>=0;i--) {
        		//tao hang (row) *
        		for(j=0;j<=i;j++) {
        			//document.writeln(" * ");
                    
                    document.getElementById('kqua2').innerHTML += " * ";

        		}
        		//xuong dong khi hien thi ket qua cua tung hang
        		//document.writeln("<br/>");
                document.getElementById('kqua2').innerHTML += "<br>";
        	}
            document.getElementById('kqua2').innerHTML += "</p>";
}


function phaifunction(){
    var N = 5;
    document.getElementById('kqua3').innerHTML = "<p> Kết quả <br> ";
    for(i=N;i>0;i--) {

            for(let j=0;j<i;j++){
                //document.write("&nbsp;&nbsp;");
               document.getElementById('kqua3').innerHTML += "&nbsp;&nbsp;";
            }
        		//tao hang (row) *
        		for(let j=i;j<=N;j++) {
                   document.getElementById('kqua3').innerHTML += "*";
                    //document.write("*");
    
                }
               // document.write("</br>");
               document.getElementById('kqua3').innerHTML += "<br>";
    }
            document.getElementById('kqua3').innerHTML += "</p>";
}



function traifunction(){
    var N = 5;
    document.getElementById('kqua4').innerHTML = "<p> Kết quả <br> ";
    for(i=1;i<=N;i++) {

            for(let j=0;j<i;j++){
                //document.write("&nbsp;&nbsp;");
               document.getElementById('kqua4').innerHTML += "&nbsp;&nbsp;";
            }
        		//tao hang (row) *
        		for(j=i;j<=N;j++) {
                   document.getElementById('kqua4').innerHTML += "*";
                    //document.write("*");
    
                }
               // document.write("</br>");
               document.getElementById('kqua4').innerHTML += "<br>";
    }
            document.getElementById('kqua3').innerHTML += "</p>";
}

// var N = prompt('Nhap gia tri N')
// 	//Chuyen kieu du lieu cua N tu string toi int
// 	N = parseInt(N)
// 	//xay dung do cao cua hinh tam giac
// 	for(i=0;i<N;i++) {
// 		//tao hang (row) *
// 		for(j=0;j<=i;j++) {
// 			document.writeln(" * ")
// 		}

// 		//xuong dong khi hien thi ket qua cua tung hang
// 		document.writeln("<br/>")
// 	}