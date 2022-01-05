
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
    for(i=0;i<N;i++) {
        		//tao hang (row) *
        		for(j=i;j>=0;j--) {
        			//document.writeln(" * ");
                    
                    document.getElementById('kqua3').innerHTML += " * ";

        		}
        		//xuong dong khi hien thi ket qua cua tung hang
        		//document.writeln("<br/>");
                document.getElementById('kqua3').innerHTML += "<br>";
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