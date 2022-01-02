let sout;
sout = "<h3>Cách 1:Vòng lặp for</h3>  <table border='1' width='300' cellspacing='0' cellpadding='3'>";
for (i = 1; i <= 10; i++) {
    sout = sout + "<tr>";
    for (j = 1; j <= 10; j++) {
        sout = sout + "<td>" + i * j + "</td>";
    }
    sout = sout + "</tr>";
}
sout = sout + "</table>";
document.write(sout);

//vong lap while

let sout2, a, b;
//sout2 = " <br> <h3>Cách 2:Vòng lặp while </h3>  <table border='1' width='300' cellspacing='0' cellpadding='3'>";
sout2 =" <h3>Cách 2:Vòng lặp while </h3> ";
a = b = 1;
while (a <= 10) {
    sout2 = sout2 + "    ";
    while (b <= 10) {
        sout2 = sout2 + a * b + "    ";
        b++;
    }
    sout2 = sout2 + " <br> ";
    b = 1;
    a++;
}

document.write(sout2);